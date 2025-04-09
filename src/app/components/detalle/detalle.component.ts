import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../../model/cocktail';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
})
export class DetalleComponent {
  cocktail: Cocktail | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => {
      this.dataService
        .getCocktailsByIdURL(params['idDrink'])
        .subscribe((data) => {
          // Asigna el primer elemento del array `drinks` a `cocktail`
          this.cocktail = data.drinks ? data.drinks[0] : undefined;
        });
    });
  }
}
