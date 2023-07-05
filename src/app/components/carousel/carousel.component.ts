import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  percorso = '../assets/image/imageBg-';
  images = [
    {id: 1, label: 'Spaghetti al pomodoro'},
    {id: 2, label: 'Tagliata di manzo'},
    {id: 3, label: 'Tiramisù classico'},
  ];

  @Input() recipes: Recipe[];
  @Input() pagina: string;
}
