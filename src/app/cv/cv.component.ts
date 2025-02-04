// cv.component.ts
import { Component } from '@angular/core';

interface CVData {
  title: string;
  email: string;
  phone: string;
  gender: 'Mr' | 'Madame' | 'Autre';
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  birthDate: string;
  birthPlace: string;
  drivingLicense: string;
  nationality: string;
  linkedin: string;
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  cvData: CVData = {
    title: '',
    email: '',
    phone: '',
    gender: 'Mr',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    birthDate: '',
    birthPlace: '',
    drivingLicense: '',
    nationality: '',
    linkedin: ''
  };

  sections = [
    { id: 'presentation', name: 'Présentation', completed: false },
    { id: 'formations', name: 'Formations', completed: false },
    { id: 'experience', name: 'Expérience professionnelle', completed: false },
    { id: 'langue', name: 'Langue', completed: false },
    { id: 'interet', name: "Centre d'intérêt", completed: false },
    { id: 'competences', name: 'Compétences', completed: false },
    { id: 'certificats', name: 'Certificats', completed: false },
    { id: 'qualites', name: 'Qualités', completed: false },
    { id: 'habilitations', name: 'Habilitations', completed: false },
    { id: 'outils', name: 'Outils', completed: false }
  ];

  toggleSection(sectionId: string): void {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.completed = !section.completed;
    }
  }

  importLinkedIn(): void {
    // LinkedIn import logic
    console.log('Importing LinkedIn profile...');
  }

  downloadCV(): void {
    // Download CV logic
    console.log('Downloading CV...');
  }

  uploadPhoto(): void {
    // Photo upload logic
    console.log('Uploading photo...');
  }

  profileSelected: boolean = false;
  informationsSelected: boolean = true;
  formationsSelected: boolean = false;
  

  onFormationsClick(): void {
    this.profileSelected = false;
    this.informationsSelected = false;
    this.formationsSelected = true;
   
   
  }

  onInformationsClick(): void {
    this.profileSelected = false;
    this.informationsSelected = true;
    this.formationsSelected = false;
   
  }

  onProfileClick(): void {
    this.profileSelected = true;
    this.informationsSelected = false;
    this.formationsSelected = false;
  
  }
}
