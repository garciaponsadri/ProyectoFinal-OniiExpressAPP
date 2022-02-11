import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  component: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 10, rows: 3, color: 'lightblue', component: "none"},
    {text: 'Two', cols: 2, rows: 15, color: 'lightgreen', component: "categorias"},
    {text: 'Three', cols: 8, rows: 15, color: 'lightpink', component: "lista"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
