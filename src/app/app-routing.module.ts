import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { CombineComponent } from './components/combine/combine.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { loggedInGuard } from './logged-in.guard';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full'} per non mostrare la scritta home nell'url quando si viene ridirezionati
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'combine', component: CombineComponent},
  { path: 'ricette', loadChildren: () => import('./components/recipes/recipes.module').then(modulo => modulo.RecipesModule) },
  { path: 'user', loadChildren: () => import('./components/user/user.module').then(modulo => modulo.UserModule)},
  { path: 'contatti', component: ContactsComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full'} // il path '**' significa qualsiasi path che non sia vuoto e non sia uno di quelli esistenti, è possibile fare un redirect ad una pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
