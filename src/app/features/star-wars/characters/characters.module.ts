import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

const routes: Routes = [
  { path: '', component: CharactersPageComponent, pathMatch: 'full', title: 'Characters' }
];

@NgModule({
  declarations: [CharactersPageComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CharactersModule { }
