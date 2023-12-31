import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { VehiclesCardComponent } from './components/vehicles-card/vehicles-card.component';

const routes: Routes = [
  { path: '', component: VehiclesPageComponent, pathMatch: 'full', title: 'Vehicles' }
];

@NgModule({
  declarations: [VehiclesPageComponent, VehiclesCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VehiclesModule { }
