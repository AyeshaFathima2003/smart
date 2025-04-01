import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Asset } from '../models/asset';

@Component({
  selector: 'app-asset-card',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <div class="asset-card">
      <!-- Image Section -->
      <div class="asset-image">
        <!-- Navigation Arrows -->
        <button class="nav-btn left" *ngIf="asset.imageUrls.length > 1" (click)="prevImage()">&#10094;</button>
        <img [src]="asset.imageUrls[currentImageIndex]" [alt]="asset.name">
        <button class="nav-btn right" *ngIf="asset.imageUrls.length > 1" (click)="nextImage()">&#10095;</button>

        <!-- Pagination Dots (Only if multiple images exist) -->
        <div class="pagination-dots" *ngIf="asset.imageUrls.length > 1">
          <span *ngFor="let img of asset.imageUrls; let i = index"
                [class.active]="i === currentImageIndex"></span>
        </div>
      </div>

      <!-- Status Below Image -->
      <div class="status-container" *ngIf="asset.status">
        <span class="status-badge" [ngClass]="asset.status">
          {{ asset.status === 'ok' ? '✔ Ok' : '⚠ Warning' }}
        </span>
      </div>

      <!-- Content Section -->
      <div class="asset-content">
        <h3 class="asset-name">{{ asset.name }}</h3>
        <p class="asset-description">{{ asset.description }}</p>
        <button class="details-btn">Details</button>
      </div>
    </div>
  `,
  styles: [`
    /* Square Card */
    .asset-card {
      width: 6cm;
      min-height: 6cm;
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
    }

    /* Image Container */
    .asset-image {
      position: relative;
      width: 100%;
      height: 3.5cm;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f9f9f9;
      overflow: hidden;
    }

    .asset-image img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    /* Navigation Arrows */
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      cursor: pointer;
      font-size: 18px;
      color: grey;
      background: none;
    }

    .left { left: 5px; }
    .right { right: 5px; }

    /* Status Below Image */
    .status-container {
      padding: 4px;
      display: flex;
      justify-content: flex-start;
    }

    .status-badge {
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 12px;
      color: white;
      font-weight: bold;
    }

    .status-badge.ok { background-color: #4caf50; }
    .status-badge.warning { background-color: #ff9800; }

    /* Pagination Dots */
    .pagination-dots {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 6px;
    }

    .pagination-dots span {
      width: 8px;
      height: 8px;
      background-color: lightgrey;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.3s ease;
    }

    .pagination-dots .active {
      background-color: grey;
    }

    /* Content Section */
    .asset-content {
      padding: 5px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: relative;
    }

    .asset-name {
      font-size: 16px;
      font-weight: 500;
      margin: 2px 0;
    }

    .asset-description {
      font-size: 14px;
      color: #666;
      margin: 2px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Details Button */
    .details-btn {
      position: absolute;
      bottom: 10px;
      right: 8px;
      padding: 4px 8px;
      font-size: 10px;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .details-btn:hover {
      background-color: #1565c0;
    }
  `]
})
export class AssetCardComponent {
  @Input() asset!: Asset;
  currentImageIndex = 0;

  nextImage() {
    if (this.asset.imageUrls?.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.asset.imageUrls.length;
    }
  }

  prevImage() {
    if (this.asset.imageUrls?.length > 1) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.asset.imageUrls.length) % this.asset.imageUrls.length;
    }
  }
}
