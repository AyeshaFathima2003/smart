import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlantDetailsService } from '../../services/plant-details.service';

interface PlantDetails {
  id: string;
  name: string;
  location: string;
  status: string;
  waterType: string;
  assignedAssets: number;
  contact: {
    name: string;
    email: string;
  };
}

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="plant-details-container">
      <div class="back-link">
        <a routerLink="/plants" class="back-button">
          <span class="back-arrow">←</span> Back to Plants Overview
        </a>
      </div>

      <div *ngIf="plantDetails; else notFound">
        <div class="plant-header">
          <h2 class="plant-title">{{ plantDetails.name }}</h2>
          <div class="plant-location">{{ plantDetails.location }}</div>
        </div>

        <div class="information-section">
          <h3 class="section-title">Information</h3>

          <div class="info-cards">
            <div class="info-card">
              <div class="card-label">Assigned Assets</div>
              <div class="card-value">{{ plantDetails.assignedAssets || '-' }}</div>
            </div>

            <div class="info-card status-card">
              <div class="card-label">Status</div>
              <div class="card-value">{{ plantDetails.status || '-' }}</div>
            </div>

            <div class="info-card water-type-card">
              <div class="card-label">Water Type</div>
              <div class="card-value">{{ plantDetails.waterType || '-' }}</div>
            </div>
          </div>

          <div class="general-info-section">
            <h3 class="subsection-title">General Information</h3>
            <table class="details-table">
              <tr>
                <th>Plant Name</th>
                <td>{{ plantDetails.name }}</td>
                <th>Additional Information</th>
                <td>-</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{{ plantDetails.location }}</td>
                <th>Contact</th>
                <td>
                  {{ plantDetails.contact.name }} <br>
                  <span class="contact-email">{{ plantDetails.contact.email }}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <ng-template #notFound>
        <div class="error-message">Plant details not found.</div>
      </ng-template>
    </div>
  `,
  styles: [` 
    .plant-details-container {
      padding: 20px;
      background-color: #f5f7fa;
      min-height: 100vh;
    }
    .back-link {
      margin-bottom: 20px;
    }
    .back-button {
      color: #0052cc;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .back-arrow {
      margin-right: 5px;
    }
    .plant-header {
      margin-bottom: 20px;
    }
    .plant-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .plant-location {
      color: #666;
      font-size: 14px;
    }
    .section-title, .subsection-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #333;
    }
    .info-cards {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
    }
    .info-card {
      background: white;
      border-radius: 4px;
      padding: 15px;
      flex: 1;
      max-width: 230px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    .status-card, .water-type-card {
      background-color: #2e7d32;
      color: white;
    }
    .card-label {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .card-value {
      font-size: 18px;
      font-weight: 600;
    }
    .general-info-section {
      background: white;
      border-radius: 4px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }
    .details-table th,
    .details-table td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }
    .details-table th {
      background-color: #f0f0f0;
      font-weight: bold;
    }
    .contact-email {
      color: #0052cc;
      font-size: 14px;
    }
    .error-message {
      font-size: 18px;
      color: red;
      text-align: center;
      margin-top: 20px;
    }
  `],
})
export class PlantDetailsComponent implements OnInit {
  plantDetails: PlantDetails | null = null;

  constructor(private route: ActivatedRoute, private plantService: PlantDetailsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const plantId = params.get('id');
      console.log('Plant ID:', plantId); // Debugging

      if (plantId) {
        this.plantDetails = this.plantService.getPlantDetails(plantId);
        console.log('Fetched Plant Details:', this.plantDetails); // Debugging
      }
    });
  }
}
