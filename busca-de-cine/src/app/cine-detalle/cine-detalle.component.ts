import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineModel } from '../models/cine-model';

@Component({
  selector: 'app-cine-detalle',
  templateUrl: './cine-detalle.component.html',
  styleUrls: ['./cine-detalle.component.css']
})
export class CineDetalleComponent implements OnInit {

  // public title:string;
  private infos:Array<any>;


  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.title = this.activatedRoute.snapshot.paramMap.get('title');
  }

  
}
