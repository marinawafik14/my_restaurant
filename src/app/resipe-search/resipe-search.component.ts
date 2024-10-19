import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-resipe-search',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './resipe-search.component.html',
  styleUrl: './resipe-search.component.css'
})
export class ResipeSearchComponent  {
  searchQuery: string = ''; // This stores the value of the search input

  constructor(private recipeService: RecipeService) {}

  // This method is called when the search button is clicked
  search() {
this.recipeService.updateSearchQuery(this.searchQuery)
}
}
