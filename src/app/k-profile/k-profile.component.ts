import { Component, OnInit } from '@angular/core';

interface ContractType {
  id: string;
  name: string;
}

interface CompanyType {
  id: string;
  name: string;
}

interface MobilityOption {
  id: string;
  name: string;
}

interface Sector {
  id: string;
  name: string;
}

interface SkillCategory {
  id: string;
  name: string;
}

interface Offer {
  title: string;
  timePosted: string;
  matchPercentage: number;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-k-profile',
  templateUrl: './k-profile.component.html',
  styleUrls: ['./k-profile.component.scss']
})
export class KProfileComponent implements OnInit {
  activeView: 'search' | 'cv' = 'search';
  activeTab = 'recherche';
  activeSkillCategory: string | null = null;
  selectedSectors: string[] = [];

  contractTypes: ContractType[] = [
    { id: 'cdi', name: 'CDI' },
    { id: 'cdd', name: 'CDD' },
    { id: 'freelance', name: 'Freelance' },
    { id: 'interim', name: 'Intérim' },
    { id: 'alternance', name: 'Alternance' },
    { id: 'stage', name: 'Stage' }
  ];

  companyTypes: CompanyType[] = [
    { id: 'startup', name: 'Start-up' },
    { id: 'pme', name: 'PME' },
    { id: 'grand-groupe', name: 'Grand Groupe' },
    { id: 'ess', name: 'ESS' }
  ];

  mobilityOptions: MobilityOption[] = [
    { id: 'remote', name: 'Full Remote' },
    { id: 'hybrid', name: 'Hybride' },
    { id: 'office', name: 'Sur site' }
  ];

  mainSectors: Sector[] = [
    { id: 'digital', name: 'Digital - IT' },
    { id: 'marketing', name: 'Marketing - Communication' },
    { id: 'sales', name: 'Commercial - Vente' }
  ];

  secondarySectors: Sector[] = [
    { id: 'finance', name: 'Finance - Comptabilité' },
    { id: 'hr', name: 'Ressources Humaines' },
    { id: 'legal', name: 'Juridique' }
  ];

  digitalSkills: SkillCategory[] = [
    { id: 'dev', name: 'Développement' },
    { id: 'design', name: 'Design' },
    { id: 'data', name: 'Data' },
    { id: 'product', name: 'Product Management' }
  ];

  offers: Offer[] = [
    {
      title: 'Web Designer',
      timePosted: 'il y a 2h',
      matchPercentage: 90,
      description: 'I need a redesign done on some pages to just bring them up to be modern. Simple edits on Figma - Just looking for someone to knock them out tonight.',
      tags: ['Web design', 'Figma', 'Dev']
    }
  ];

  selectedContractTypes: string[] = [];
  selectedCompanyTypes: string[] = [];
  selectedMobilityOptions: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  switchView(view: 'search' | 'cv'): void {
    console.log('Switching to view:', view);
    this.activeView = view;
  }

  toggleTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleContractType(id: string): void {
    this.toggleSelection(this.selectedContractTypes, id);
  }

  toggleCompanyType(id: string): void {
    this.toggleSelection(this.selectedCompanyTypes, id);
  }

  toggleMobilityOption(id: string): void {
    this.toggleSelection(this.selectedMobilityOptions, id);
  }

  toggleSector(id: string): void {
    this.toggleSelection(this.selectedSectors, id);
  }

  private toggleSelection(array: string[], id: string): void {
    const index = array.indexOf(id);
    if (index === -1) {
      if (array === this.selectedSectors && this.selectedSectors.length >= 3) {
        return;
      }
      array.push(id);
    } else {
      array.splice(index, 1);
    }
  }

  isContractTypeSelected(id: string): boolean {
    return this.selectedContractTypes.includes(id);
  }

  isCompanyTypeSelected(id: string): boolean {
    return this.selectedCompanyTypes.includes(id);
  }

  isMobilityOptionSelected(id: string): boolean {
    return this.selectedMobilityOptions.includes(id);
  }

  isSectorSelected(id: string): boolean {
    return this.selectedSectors.includes(id);
  }

  getSectorName(id: string): string {
    const sector = [...this.mainSectors, ...this.secondarySectors]
      .find(s => s.id === id);
    return sector ? sector.name : '';
  }

  isSkillCategoryActive(categoryId: string): boolean {
    return this.activeSkillCategory === categoryId;
  }

  setActiveSkillCategory(categoryId: string): void {
    this.activeSkillCategory = this.activeSkillCategory === categoryId ? null : categoryId;
  }
}