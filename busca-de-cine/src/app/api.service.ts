import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { CineDisplayModel } from './models/cine-display-model';
import { CineModel } from './models/cine-model';
// import { ApiResponse } from './models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getSingleCine(id:string|number): Observable<CineModel>{
    return this.http.get<CineModel>(`http://www.omdbapi.com/?apikey=${environment.apiKey}&i=${id}`).pipe(
      map(cine =>{
        return new CineModel(
          cine.Title, cine.Year, cine.Rated, cine.Released, 
          cine.Runtime, cine.Genre, cine.Director, 
          cine.Writer, cine.Actors, cine.Plot, 
          cine.Language, cine.Country, cine.Awards, 
          cine.Poster, cine.Ratings, cine.Metascore, 
          cine.imdbRating, cine.imdbVotes, cine.imdbID, 
          cine.Type, cine.BoxOffice, cine.Production
        );
      })
    )
  }

  buscaCine(title:string, page:number = 1): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=${environment.apiKey}&s=${title}&page=${page}`).pipe(
      map(res => { 
        return res.Search.map((cine:CineDisplayModel) => {
          return new CineDisplayModel(
            cine.Title, cine.Year, 
            cine.Poster, cine.imdbID
          )
        })
      })
    );
  }
}
