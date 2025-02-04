// competencies.component.ts
import { Component } from '@angular/core';

interface Sector {
  id: string;
  name: string;
}

interface Competency {
  id: string;
  name: string;
  subCategories?: Competency[];
}

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.scss']
})
export class CompetenciesComponent {
  sectors: Sector[] = [
    { id: 'auto', name: 'Automobile / Equipementiers' },
    { id: 'rail', name: 'Ferroviaire' },
    { id: 'aero', name: 'Aérospatial' },
    { id: 'naval', name: 'Naval' },
    { id: 'life', name: 'Life Science' },
    { id: 'energy', name: 'Energie' },
    { id: 'defense', name: 'Défense' },
    { id: 'industry', name: 'Industrie Mécanique / Electronique / Multi secteurs' },
    { id: 'digital', name: 'Digital - IT' }
  ];

  digitalCompetencies: Competency[] = [
    {
      id: 'dev',
      name: 'Développement et Programmation',
      subCategories: [
        { id: 'full-stack', name: 'Développeur Full-Stack' },
        { id: 'front-end', name: 'Développeur Front-End' },
        { id: 'back-end', name: 'Développeur Back-End' },
        { id: 'web', name: 'Développeur Web' },
        { id: 'mobile', name: 'Développeur Mobile' },
        { id: 'logiciel', name: 'Ingénieur Logiciel' }
      ]
    },
    { id: 'infra', name: 'Infrastructure et Réseaux' },
    { id: 'data', name: 'Data et Intelligence Artificielle' },
    { id: 'web-design', name: 'Web, Design et UI/UX' },
    { id: 'cyber', name: 'Cybersécurité' },
    { id: 'project', name: 'Gestion de Projet et Consulting' },
    { id: 'marketing', name: 'Marketing Digital et Communication' },
    { id: 'database', name: 'Administration des Bases de Données' },
    { id: 'architecture', name: 'Architecture et Ingénierie Systèmes' }
  ];

  selectedSectors: string[] = ['digital', 'rail', 'naval'];
  selectedCompetencies: string[] = [];
  selectedSubCategories: { [key: string]: string[] } = {};
  expandedCompetency: string | null = 'dev';

  toggleSector(sectorId: string) {
    const index = this.selectedSectors.indexOf(sectorId);
    if (index === -1 && this.selectedSectors.length < 3) {
      this.selectedSectors.push(sectorId);
    } else if (index !== -1) {
      this.selectedSectors.splice(index, 1);
      if (sectorId === 'digital') {
        this.selectedCompetencies = [];
        this.selectedSubCategories = {};
      }
    }
  }

  toggleCompetency(compId: string) {
    const competency = this.digitalCompetencies.find(c => c.id === compId);
    if (!competency) return;

    const index = this.selectedCompetencies.indexOf(compId);
    if (index === -1) {
      this.selectedCompetencies.push(compId);
      if (competency.subCategories) {
        this.selectedSubCategories[compId] = [];
      }
    } else {
      this.selectedCompetencies.splice(index, 1);
      delete this.selectedSubCategories[compId];
    }
  }

  toggleSubCategory(compId: string, subId: string) {
    if (!this.selectedSubCategories[compId]) {
      this.selectedSubCategories[compId] = [];
    }
    
    const index = this.selectedSubCategories[compId].indexOf(subId);
    if (index === -1) {
      this.selectedSubCategories[compId].push(subId);
    } else {
      this.selectedSubCategories[compId].splice(index, 1);
    }
  }

  getSectorName(id: string): string {
    return this.sectors.find(s => s.id === id)?.name || '';
  }

  isCompetencyExpanded(compId: string): boolean {
    return this.expandedCompetency === compId;
  }

  toggleExpand(compId: string) {
    this.expandedCompetency = this.expandedCompetency === compId ? null : compId;
  }
}