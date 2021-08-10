import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl = `${environment.baseUrl}/animal`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.baseUrl}`);
  }

  getById(id: Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl}/${id}`);
  }

  post(animal: Animal) {
    return this.http.post(`${this.baseUrl}`, animal);
  }

  put(animal: Animal) {
    return this.http.put(`${this.baseUrl}/${animal.id}`, animal);
  }

  delete(id: Number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
