import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { BuscaService } from '../busca.service';
import { CineDisplayModel } from '../models/cine-display-model';
// import { CineDisplayModel } from '../models/cine-display-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cines:Observable<CineDisplayModel[]>;
  buscar:string;

  constructor(private apiService:ApiService, private buscaServicio:BuscaService, private router:Router) { }

  ngOnInit(): void {
  }
  
  enbuscar(buscar){
    this.cines = this.apiService.buscaCine(buscar)
  }
  
  enCine(cine:CineDisplayModel){
    this.buscaServicio.buscar = cine.imdbID;
    this.router.navigateByUrl('search')
    
  }

}
