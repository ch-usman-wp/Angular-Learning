import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
@Injectable({providedIn: 'root'})


export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageServices: DataStorageService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageServices.fetchRecipe();
    }

}