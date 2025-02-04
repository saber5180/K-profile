// profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="form-section">
      <div class="button-group">
        <h3 class="section-title">Profil</h3>
        <button class="btn-save">Enregistrer</button>
      </div>

      <p class="guide-text">
        Pour améliorer votre CV, il est important d'ajouter un résumé ou un objectif professionnel. 
        Cela permet de présenter rapidement vos compétences, vos expériences et vos ambitions à un recruteur. 
        Voici quelques questions pour vous guider :
      </p>

      <div class="form-group">
        <label>Quelles sont vos principales compétences professionnelles ?</label>
        <textarea rows="4" placeholder="Vos compétences..."></textarea>
      </div>

      <div class="form-group">
        <label>Quel est votre domaine d'expertise ou le type de poste que vous recherchez ?</label>
        <textarea rows="4" placeholder="Votre domaine d'expertise..."></textarea>
      </div>

      <div class="form-group">
        <label>Quels sont vos objectifs à court ou long terme dans votre carrière ?</label>
        <textarea rows="4" placeholder="Vos objectifs..."></textarea>
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea rows="6" placeholder="Décrivez votre profil professionnel..."></textarea>
      </div>
    </div>
  `,
  styles: [`
    .guide-text {
      color: #718096;
      margin: 20px 0;
    }
    
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
    }
  `]
})
export class ProfileComponent {}