import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private jsonurl = 'http://localhost:3000/meals';

  
// BehaviorSubject to store the search query and emit updates
private searchQuerySubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }


// Observable that other components can subscribe to
searchQuery$ = this.searchQuerySubject.asObservable();

// Method to update the search query
updateSearchQuery(query: string) {
  this.searchQuerySubject.next(query); // Emit new search query
}
// Method to fetch meals
getMeal(): Observable<any>{
  return this.http.get(this.jsonurl)
}
}


