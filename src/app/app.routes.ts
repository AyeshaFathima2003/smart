import { Routes } from '@angular/router';
import { AssetOverviewComponent } from '../components/asset-overview/asset-overview.component';
import { PlantOverviewComponent } from '../components/plant-overview/plant-overview.component';
import { PlantDetailsComponent } from '../components/plant-details/plant-details.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect default path to 'plants'
  { path: 'plants', component: PlantOverviewComponent },
  { path: 'plants/:id', component: PlantDetailsComponent },
  { path: 'assets', component: AssetOverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' } // Redirect unknown paths to 'plants'
];
