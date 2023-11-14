import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';

const routes: Routes = [
  { path: '', component: StarshipsPageComponent, pathMatch: 'full', title: 'Starships' }
];

@NgModule({
  declarations: [StarshipsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StarshipsModule { }
