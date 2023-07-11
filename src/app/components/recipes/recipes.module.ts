import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesRoutingModule } from "./recipes-routing.module";

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeCardComponent } from 'src/app/shared/recipe-card/recipe-card.component';
import { DetailComponent } from './detail/detail.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { RecipesService } from "src/app/services/recipes.service";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    NewRecipeComponent,
    RecipeCardComponent,
    DetailComponent,
    CarouselComponent,
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CKEditorModule,
    PaginatorModule,
    CommonModule,
    RecipesRoutingModule,
  ],
  providers: [RecipesService],
  exports: [RecipeCardComponent, CarouselComponent]
})

export class RecipesModule { }
