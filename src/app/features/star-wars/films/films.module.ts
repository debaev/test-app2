import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './pages/films-page/films-page.component';

const routes: Routes = [
  { path: '', component: FilmsPageComponent, pathMatch: 'full', title: 'Films' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
