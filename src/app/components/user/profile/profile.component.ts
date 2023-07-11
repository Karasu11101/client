import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';
import { take } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dati: any;
  dataRegistrazione: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dati = this.prendiProfilo(JSON.parse(localStorage.getItem('user')).email);
  }

  prendiProfilo(email: string) {
    this.userService.getUser(email).pipe(take(1)).subscribe({
      next: res => {
        this.dati = res;
        this.dataRegistrazione = moment(this.dati.createdAt).locale('it').format('dddd DD MMMM YYYY');
      }
    })
  }
}
