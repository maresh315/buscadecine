import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { CineDisplayModel } from '../models/cine-display-model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit, OnDestroy {
  private search:string
  // subscription:Subscription[] = [];

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy():void{

  }

  
}
