import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  constructor(private clientehttp: HttpClient) {}
  private cocktails: Cocktail[] = [];
  public getCocktailById(idDrink: string): Cocktail | undefined {
    return this.cocktails.find((item) => item.idDrink);
  }

  public getCocktails(): Observable<any> {
    return this.clientehttp.get(this.apiUrl);
  }

  public getCocktailsByIdURL(idDrink: number): Observable<any> {
    return this.clientehttp.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    );
  }
}
