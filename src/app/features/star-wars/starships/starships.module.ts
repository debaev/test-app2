import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsPageComponent } from './pages/starships-page/starships-page.component';
import { StarshipsCardComponent } from './components/starships-card/starships-card.component';

const routes: Routes = [
  { path: '', component: StarshipsPageComponent, pathMatch: 'full', title: 'Starships' }
];

@NgModule({
  declarations: [StarshipsPageComponent, StarshipsCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StarshipsModule { }
