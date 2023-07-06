import { Recipe } from './../../models/recipe.model';
import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, tap, delay, filter } from 'rxjs/operators';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-combine-recipes',
  templateUrl: './combine-recipes.component.html',
  styleUrls: ['./combine-recipes.component.scss']
})
export class CombineRecipesComponent {

  beginnerRecipes$: Observable<Recipe[]>;
  intermediateRecipes$: Observable<Recipe[]>;
  advancedRecipes$: Observable<Recipe[]>;

  allRecipes$: Observable<any[]>;

  allRecipes = [];

  constructor(private recipesService: RecipesService) {
    this.beginnerRecipes$ = this.recipesService.getRecipesAsync().pipe(
      delay(0),
      map(recipes => recipes.filter(beginner => beginner.difficulty === 1))
    );
    this.intermediateRecipes$ = this.recipesService.getRecipesAsync().pipe(
      delay(2000),
      map(recipes => recipes.filter(intermediate => intermediate.difficulty >= 2
        && intermediate.difficulty <= 3))
    );
    this.advancedRecipes$ = this.recipesService.getRecipesAsync().pipe(
      delay(4000),
      map(recipes => recipes.filter(advanced => advanced.difficulty >= 4
        && advanced.difficulty <= 5))
    );

    this.allRecipes$ = forkJoin(this.beginnerRecipes$, this.intermediateRecipes$, this.advancedRecipes$).pipe(
      map((res) =>
        this.allRecipes = res
      ),
    )
  }
}
