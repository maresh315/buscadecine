import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { BuscaService } from '../busca.service';
import { CineModel } from '../models/cine-model';

@Component({
  selector: 'app-cine-detalle',
  templateUrl: './cine-detalle.component.html',
  styleUrls: ['./cine-detalle.component.css']
})
export class CineDetalleComponent implements OnInit {

  private id:string;
  // private cine:CineModel;
  title:string;
  poster:string;
  plot:string
  credits:any;


  constructor(private buscaServicio:BuscaService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.id = this.buscaServicio.buscar;
    this.apiService.getSingleCine(this.id).subscribe(cine=>{
      this.title = cine.Title;
      this.poster = cine.Poster;
      this.plot = cine.Plot;
      this.credits = Object.entries(cine.credits())
    })
  }

  
}
