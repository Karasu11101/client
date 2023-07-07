import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[];

  page = 1;
  ricettePerPagina = 4;

  recipes$ = this.recipesServices.getRecipesAsync();

  ruolo: any;
  recupera_ruolo = this.userService.ruoloUtente.subscribe(res => this.ruolo = res);


  constructor(private recipesServices: RecipesService, private userService: UserService) {}

  accorciaTesto(descrizione: string): number {
    let lunghezzaMassima = 180;
    if(descrizione.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
      return ultimoSpazio;
    }
  }

  paginate(e) {
    e.page = e.page + 1;
    this.page = e.page;
  }
}
