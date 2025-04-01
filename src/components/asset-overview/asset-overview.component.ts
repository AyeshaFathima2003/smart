import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asset } from '../models/asset';
import { AssetService } from '../../services/asset.service';
import { AssetCardComponent } from '../asset-card/asset-card.component';

@Component({
  selector: 'app-asset-overview',
  standalone: true,
  imports: [CommonModule, AssetCardComponent],
  template: `
    <div class="asset-overview-container">
      <div class="header">
        <h2>Asset Overview</h2>

        <div class="dropdown">
          <button class="dropdown-btn" (click)="toggleDropdown()">
            {{ selectedPlant }} ▼
          </button>
          <ul class="dropdown-menu" *ngIf="dropdownOpen">
            <li *ngFor="let plant of plants" (click)="selectPlant(plant)">
              {{ plant }}
            </li>
          </ul>
        </div>
      </div>

      <div class="assets-grid">
        <app-asset-card *ngFor="let asset of assets" [asset]="asset"></app-asset-card>
      </div>
    </div>
  `,
  styles: [`
    .asset-overview-container {
      padding: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-btn {
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 6px 16px;
      font-size: 14px;
      cursor: pointer;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      list-style: none;
      padding: 5px 0;
      margin: 0;
      width: 150px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .dropdown-menu li {
      padding: 8px 12px;
      cursor: pointer;
    }

    .dropdown-menu li:hover {
      background: #f5f5f5;
    }

    .assets-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 10px;
    }
  `]
})
export class AssetOverviewComponent implements OnInit {
  assets: Asset[] = [];
  plants: string[] = ['Plant A', 'Plant B', 'Plant C', 'Plant D']; // Example plant names
  selectedPlant: string = 'All Plants';
  dropdownOpen: boolean = false;

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    this.assetService.getAssets().subscribe(assets => {
      this.assets = assets;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectPlant(plant: string) {
    this.selectedPlant = plant;
    this.dropdownOpen = false;
    // You can filter assets here based on the selected plant
  }
}
