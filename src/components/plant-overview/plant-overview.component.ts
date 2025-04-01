// plant-overview.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

interface Plant {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  type: 'aerial' | 'illustration';
}

@Component({
  selector: 'app-plant-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="plant-overview-container">
      <h2 class="title">Plant Overview</h2>
      <div class="subtitle">Available plants</div>
      
      <div class="plants-grid">
        <div class="plant-card" *ngFor="let plant of plants">
          <div class="plant-image">
            <img [src]="plant.imageUrl" [alt]="plant.name">
          </div>
          <div class="plant-info">
            <div class="plant-name">{{plant.name}}</div>
            <div class="plant-location">{{plant.location}}</div>
            <button class="details-button" (click)="viewDetails(plant)">Details</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .plant-overview-container {
      padding: 20px;
    }
    .title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 20px;
    }
    .plants-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .plant-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background: white;
    }
    .plant-image {
      height: 150px;
      overflow: hidden;
    }
    .plant-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .plant-info {
      padding: 10px;
    }
    .plant-name {
      font-weight: 600;
      font-size: 1.1rem;
    }
    .plant-location {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 10px;
    }
    .details-button {
      background-color: #0052cc;
      color: white;
      border: none;
      padding: 5px 15px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
    }
    .details-button:hover {
      background-color: #003d99;
    }
  `]
})
export class PlantOverviewComponent {
  plants: Plant[] = [
    {
      id: 'N700',
      name: 'N700',
      location: 'Ludwigshafen, Germany',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Ey2d-3KH0PJRXyWKmsKIowHaFg&pid=Api&P=0&h=180',
      type: 'aerial'
    },
    {
      id: 'N703',
      name: 'N703',
      location: 'Ludwigshafen, Germany',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.qV93qXOhKG-zYK62eegXDQHaF-&pid=Api&P=0&h=180s',
      type: 'aerial'
    },
    {
      id: 'Q305',
      name: 'Q305',
      location: 'Ludwigshafen, Germany',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Df6bJfTn9vIMM6xX4S4FkQHaEK&pid=Api&P=0&h=180',
      type: 'aerial'
    },
    {
      id: 'BP3301',
      name: 'BP 3301',
      location: 'Püttlingen, Germany',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Df6bJfTn9vIMM6xX4S4FkQHaEK&pid=Api&P=0&h=180',
      type: 'illustration'
    }
  ];

  constructor(private router: Router) { }

  viewDetails(plant: Plant): void {
    console.log(`Viewing details for ${plant.id}`);
    // Navigate to the plant details page with the plant ID
    this.router.navigate(['/plants', plant.id]);
  }
}