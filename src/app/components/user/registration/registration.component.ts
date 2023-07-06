import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  titolo = 'pasta al sugo';
  id = 24;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  constructor(private router: Router, private userService: UserService, private ngbModal: NgbModal) {}

  onSubmit(){
    console.log(this.form.value);
    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.userService.createUser(user).subscribe((res: any) => {
      return res;
    })
    this.userService.datiUtente.next(user);
    this.router.navigateByUrl('home');
  }

  checkPassword(): boolean {
    let password = this.form.controls.password.value;
    let ripetiPassword = this.form.controls.ripetiPassword.value;
    if(password === ripetiPassword) {
      return true;
    } else {
      return false;
    }
  }

  open(content: any, titolo?: string, id?: number) {
    let title = titolo;
    let idNum = id;
    this.ngbModal.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true}).result
    .then((res) => {
      console.log('azione da eseguire in caso positivo, titolo: '+ title + 'id: ' + idNum)
    })
    .catch((res) => {
      console.log('nessuna azione da eseguire')
    })
  }
}
