import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

  @ViewChild('modalSummary', {static: false}) modal: ElementRef;

  form = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    difficulty: new FormControl('', [Validators.pattern(/[1-5]/), Validators.required]),
    published: new FormControl(false, Validators.requiredTrue)
  })

  constructor(private router: Router, private recipeService: RecipesService, private recipeModal: NgbModal) {}

  onSubmit() {
    console.log(this.form.value);
    const recipe = {
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image,
      difficulty: Number(this.form.value.difficulty),
      published: this.form.value.published
    }
    this.recipeService.createRecipe(recipe).subscribe((res: any) => {
      this.open(this.modal, res.image);
    });
  }

  open(content: any, imgUrl: string) {
      this.recipeModal.open(content, {ariaLabelledBy: 'modale riepilogo registrazione', size: 'xl', centered: true}).result
      .then((res) => {
        console.log('reindirizzamento a pagina nuova ricetta');
        location.reload()
      })
      .catch((res) => {
        console.log('reindirizzamento a pagina ricette');
        this.router.navigateByUrl('ricette');
      })
  }

}
