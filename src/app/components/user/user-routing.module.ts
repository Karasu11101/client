import { UserModule } from "./user.module";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { loggedInGuard } from "src/app/logged-in.guard";

const routes: Routes = [
  { path: '', component: UserModule, children: [
    { path: 'registrazione', component: RegistrationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'profilo', component: ProfileComponent, canActivate: [loggedInGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
