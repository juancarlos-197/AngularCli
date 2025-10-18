import { Pokemon } from './../../interfaces/pokemon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
@Input() pokemonInfo!: Pokemon 

   
}
