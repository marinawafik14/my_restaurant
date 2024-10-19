import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResipeSearchComponent } from '../resipe-search/resipe-search.component';


@Component({
  selector: 'app-resipe-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule , ResipeSearchComponent],
  templateUrl: './resipe-list.component.html',
  styleUrl: './resipe-list.component.css'
})

export class ResipeListComponent implements OnInit {

meals: any[]=[];  // Holds the full list of meals

  filteredMeals: any[]=[]  // To hold the filtered meals

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
   // First, fetch all meals
this.recipeService.getMeal().subscribe((data:any)=>{
this.meals = data;                 // Store all meals
this.filteredMeals = this.meals   // Initially, show all meals
});
// Subscribe to search query changes
this.recipeService.searchQuery$.subscribe((query=>{
  this.filterMeals(query)
}))

  }

  // Method to filter meals based on the search query
  filterMeals(query: string) {
    if (query.trim() === '') {
      this.filteredMeals = this.meals; // If no search query, show all meals

    } else {
      this.filteredMeals = this.meals.filter(meal =>
        meal.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  scrollToMenu() {
    this.ngOnInit;
  }
}

