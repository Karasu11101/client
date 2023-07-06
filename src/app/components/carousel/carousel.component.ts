import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() pagina: string;

  recipes: Recipe[];
  percorso = '../assets/image/imageBg-';
  images = [
    {id: 1, label: 'Spaghetti al pomodoro'},
    {id: 2, label: 'Tagliata di manzo'},
    {id: 3, label: 'Tiramisù classico'},
  ];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
      this.recipesService.getRecipes().subscribe({
        next: (res) =>  {this.recipes = res;
        },
    error: (e) => {console.log(e)}
      })
  }
}
