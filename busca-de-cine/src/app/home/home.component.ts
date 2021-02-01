import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CineDisplayModel } from '../models/cine-display-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:string;
  cines:CineDisplayModel[] = [];
  // cineLink:string =''

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  
  enbuscar(cineTitle:string){
    this.apiService.buscaCine(cineTitle)?.subscribe(
      data=>{
        data.Search.forEach(element => {
          let cine = new CineDisplayModel(element)
          this.cines.push(cine)
        });
      }
      );
  }

  onCine(cine:CineDisplayModel){
    let title = cine.getTitle();
    console.log(title)
    // this.router.navigateByUrl(`home/${title.trim()}`)
  }
}
