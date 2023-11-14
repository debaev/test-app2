import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesPageComponent } from './pages/species-page/species-page.component';

const routes: Routes = [
  { path: '', component: SpeciesPageComponent, pathMatch: 'full', title: 'Species' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpeciesModule { }
