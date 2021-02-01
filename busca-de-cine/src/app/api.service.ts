import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSingleCine(id:string|number): Observable<any>{
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=${environment.apiKey}&t=${id}}`).pipe(
      map((cine)=>{})
    )
  }

  buscaCine(title:string, page:number = 1): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=${environment.apiKey}&s=${title}&page=${page}`).pipe(
      map((cines)=>{})
    );
  }
}
