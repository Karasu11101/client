import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { UserRoutingModule } from "./user-routing.module";

import { RegistrationComponent } from './registration/registration.component';
import { OnPlaceholderDirective } from '../../directives/on-placeholder.directive';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationModalComponent } from '../../shared/registration-modal/registration-modal.component';
import { UserService } from "src/app/services/user.service";


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationModalComponent,
    OnPlaceholderDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CKEditorModule,
    PasswordModule,
    DividerModule,
    UserRoutingModule,
  ],
  providers: [UserService],
  exports: []
})

export class UserModule { }
