import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { take, first, Observable, map } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  // ricette: Recipe[];
  ricette$: Observable<Recipe[]> = this.recipesService.getRecipesAsync().pipe(
    map(ricette => ricette.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 4))
    // map(res => this.totRicette = res)
  ); // il dollaro è una convenzione usata da tutti per far capire che va usata la pipe async

  // totRicette: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    // this.onGetRecipes();
  }

  // onGetRecipes() {
  //   this.recipesService.getRecipes().pipe(
  //     // take(1)
  //     first()
  //   ).subscribe({
  //     next: (res) => {
  //       this.ricette = res.reverse();
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     }
  //   });
  // }
}
