import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logar(dados: any): Observable<any> {
    return this.http.post('http://localhost:3000/user/login', dados);
  }
}
