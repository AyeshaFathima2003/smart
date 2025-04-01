// plant-details.service.ts
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class PlantDetailsService {
  private mockPlantDetails: Record<string, PlantDetails> = {
    'N700': {
      id: 'N700',
      name: 'N700',
      location: 'Ludwigshafen, Germany',
      status: 'Dry',
      waterType: '-',
      assignedAssets: 10,
      contact: {
        name: 'John Doe',
        email: 'john.doe@company.com',
      },
    },
    'N703': {
      id: 'N703',
      name: 'N703',
      location: 'Ludwigshafen, Germany',
      status: 'Dry',
      waterType: '-',
      assignedAssets: 8,
      contact: {
        name: 'Jane Smith',
        email: 'jane.smith@company.com',
      },
    },
    'Q305': {
      id: 'Q305',
      name: 'Q305',
      location: 'Ludwigshafen, Germany',
      status: 'Dry',
      waterType: '-',
      assignedAssets: 5,
      contact: {
        name: 'Robert Brown',
        email: 'robert.brown@company.com',
      },
    },
    'BP3301': {
      id: 'BP3301',
      name: 'BP 3301',
      location: 'Püttlingen, Germany',
      status: 'Dry',
      waterType: '-',
      assignedAssets: 12,
      contact: {
        name: 'Alice Johnson',
        email: 'alice.johnson@company.com',
      },
    },
  };

  getPlantDetails(id: string): PlantDetails | null {
    return this.mockPlantDetails[id] || null;
  }
}
