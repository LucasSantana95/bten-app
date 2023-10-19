import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Equipment } from '../equipment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAllEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>("https://mandalorian-store.netlify.app/api/equipments").pipe(
      catchError(this.handleError)
    );
  }

  getEquipmentById(id : string): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`https://mandalorian-store.netlify.app/api/equipments/${id}`).pipe(
      catchError(this.handleError)
    );
   }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocorreu um erro:', error);
    return throwError('Algo deu errado; por favor, tente novamente mais tarde.');
  }
}
