import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { take, first } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() clickedPage: number;
  ricetta: Recipe;
  percorso = '../../../../assets/image/difficolta-';
  dataPubblicazione: any;

  constructor(private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.onGetRecipe();
  }

  onGetRecipe(): void {
    // const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    const id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.recipeService.getRecipe(id).pipe(
      take(1)
    ).subscribe({
      next: (res) => {
        this.ricetta = res;
        this.dataPubblicazione = moment(this.ricetta.createdAt).locale('it').format('dddd DD MMMM YYYY');
      },
      error: (e) => console.log(e)
    });
  }

  onGetRecipe2(): void {
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];
      const idNumb = id;

      this.recipeService.getRecipe(idNumb).subscribe(
        res => this.ricetta = res
      );
    })
  }
}
