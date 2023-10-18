import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://mandalorian-store.netlify.app/api/equipments"

  constructor(private http : HttpClient) { }

  getAllEquipments() {
    return this.http.get(this.url)
  }

  getEquipments() {
    return this.http.get(this.url)
  }
}
