import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/planets-page/planets-page.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full', title: 'Planets' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule { }
