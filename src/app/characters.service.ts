import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = './assets/database.json';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
