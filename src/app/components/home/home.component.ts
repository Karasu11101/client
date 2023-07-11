import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { take, first } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('modalRegistration', {static: false}) modal: ElementRef;

  title = 'cibando';

  nome: string;

  email: string;

  note: string;

  colore = 'red';

  coloreScelto: string;

  evidenziato = false;

  ricette: Recipe[];

  // page: string;

  constructor(private recipesService: RecipesService, private userService: UserService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.onGetRecipes();
    // this.page = 'home';

    this.userService.datiUtente.subscribe((res: any) => {
        this.nome = res.name;
        this.email = res.email;
        this.note = res.note;
        // this.open(this.modal);
      });
  }

  onGetRecipes() {
    this.recipesService.getRecipes().pipe(
      // take(1)
      first()
    ).subscribe({
      next: (res) => {
        this.ricette = res;
        // this.ricette = this.ricette.sort((a,b) => a._id - b._id).slice(0, 4);
        this.ricette = this.ricette.slice(-4).reverse();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  cambiaSwitch() {
    this.colore = this.coloreScelto;
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }

  closeWindow() {
    // localStorage.removeItem('name');
    // localStorage.removeItem('email');
    this.userService.datiUtente.next(''); // è necessario svuotare la sorgente, altrimenti il replay continuerà a caricare i dati memorizzati
    this.nome = '';
    this.email = '';
    this.note = '';
  }

  // open(content: any) {
  //   if(this.modal) {
  //     this.modalService.open(content, {ariaLabelledBy: 'modale riepilogo registrazione', size: 'lg', centered: true});
  //     this.userService.datiUtente.next(''); // è necessario svuotare la sorgente, altrimenti il replay continuerà a caricare i dati memorizzati
  //     this.nome = '';
  //     this.email = '';
  //   }
  //   // this.modalService.open(content, {ariaLabelledBy: 'modale riepilogo registrazione', size: 'lg', centered: true});
  //   //     this.userService.datiUtente.next(''); // è necessario svuotare la sorgente, altrimenti il replay continuerà a caricare i dati memorizzati
  //   // this.nome = '';
  //   // this.email = '';
  // }
}
