import { RecipesModule } from './recipes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { CombineRecipesComponent } from '../combine-recipes/combine-recipes.component';


const routes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent},
    { path: 'ricette-per-difficolta', component: CombineRecipesComponent},
    { path: 'nuova-ricetta', component: NewRecipeComponent},
    { path: '', component: RecipesListComponent, pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
