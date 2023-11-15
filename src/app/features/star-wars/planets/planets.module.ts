import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';

const routes: Routes = [
  { path: '', component: PlanetsPageComponent, pathMatch: 'full', title: 'Planets' }
];

@NgModule({
  declarations: [PlanetsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule { }
