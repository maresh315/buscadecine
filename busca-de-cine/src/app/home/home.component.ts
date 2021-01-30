import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:string;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  
  enbuscar(cineTitle:string){
    this.apiService.buscaCine(cineTitle).subscribe(
      data=>console.log(data.Search)
    );
  }

}
