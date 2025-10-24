import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { PokemonResults, Pokemon } from '../../interfaces/pokemon';
import { AsyncPipe } from '@angular/common';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  public pokemonResults$!: Observable<PokemonResults>;
  public errorMessage!: string

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonResults$ = this.pokemonService.getPokemonList().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY
    }
    ));
  }
}
