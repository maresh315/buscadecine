import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class SearchBarComponent implements OnInit {

  @Input() buscar:string

  constructor() { }

  ngOnInit(): void {
  }

}
