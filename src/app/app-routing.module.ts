import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewRecipeComponent } from './components/recipes/new-recipe/new-recipe.component';
import { CombineComponent } from './components/combine/combine.component';
import { CombineRecipesComponent } from './components/combine-recipes/combine-recipes.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { loggedInGuard } from './logged-in.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full'} per non mostrare la scritta home nell'url quando si viene ridirezionati
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent},
    { path: '', component: RecipesListComponent, pathMatch: 'full'},
    { path: 'nuova-ricetta', component: NewRecipeComponent},
    { path: 'ricette-per-difficolta', component: CombineRecipesComponent}
  ]},
  { path: 'combine', component: CombineComponent},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profilo', component: ProfileComponent, canActivate: [loggedInGuard]},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full'} // il path '**' significa qualsiasi path che non sia vuoto e non sia uno di quelli esistenti, è possibile fare un redirect ad una pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
