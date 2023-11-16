import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FilmsCardComponent } from './components/films-card/films-card.component';

const routes: Routes = [
  { path: '', component: FilmsPageComponent, pathMatch: 'full', title: 'Films' }
];

@NgModule({
  declarations: [FilmsPageComponent, FilmsCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
