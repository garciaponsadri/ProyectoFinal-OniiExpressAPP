import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  //private urlAPI = "http://localhost:3000/api";

  // Está subida a heroku:
  private urlAPI = "https://oniiexpressapi.herokuapp.com"

  private url = "https://5fc9f2333c1c22001644152b.mockapi.io/api/heroresapi";

  constructor(
    private http: HttpClient
  ) {}

  getEmpleados() {
    return this.http.get(this.urlAPI + '/empleados/get');
  }
}