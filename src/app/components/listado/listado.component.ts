import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cocktail } from '../../model/cocktail';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  cocktails: Cocktail[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getCocktails().subscribe((data) => {
      this.cocktails = data.drinks;
    });
  }
}
