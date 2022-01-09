import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon.model";

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

  private BASE_API_URL: string = 'https://pokeapi.co/api/v2';

	constructor(private http: HttpClient) {
	}

	getById(id: number): Observable<Pokemon> {
		return this.http.get<Pokemon>(`${this.BASE_API_URL}/pokemon/${id}`);
	}
}
