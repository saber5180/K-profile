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

      <p>Pour améliorer votre CV, il est important d'ajouter un résumé ou un objectif professionnel. Cela permet de présenter rapidement vos compétences, vos expériences et vos ambitions à un recruteur. Voici quelques questions pour vous guider :</p>

<ul>
    <li>Quelles sont vos principales compétences professionnelles ?</li>
    <li>Quel est votre domaine d'expertise ou le type de poste que vous recherchez ?</li>
    <li>Quels sont vos objectifs à court ou long terme dans votre carrière ?</li>
</ul>

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
    .section-title{

color: #2c7a7b;
      
    }
    .form-section {
          
          background: white;
          padding: 24px;
          border-radius: 8px;
        }
    .button-group {
    display: flex;
    gap: 16px;

    button {
      padding: 8px 16px;
      border-radius: 4px;
      border: 1px solid;
      cursor: pointer;

      &.btn-save {
        border-color: #2c7a7b;
        color: #fdffff;
        border-radius: 20px;
        background-color: #2c7a7b;
        height: 50px;
        width: 100;
        margin-left: 80%;
      }
    }}
    p{

      color:black;
    }
    li{

      color:black;
    }
  `]
}
)
export class ProfileComponent {}