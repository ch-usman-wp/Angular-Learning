import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ParentComponent } from './components/product/parent/parent.component';
import { ChildComponent } from './components/product/child/child.component';
import { DropdownDirective } from './components/recipe/shared/dropdown.directive';
import { ShoppingListServices } from './services/shopping-list.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    RecipeComponent,
    ParentComponent,
    ChildComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
