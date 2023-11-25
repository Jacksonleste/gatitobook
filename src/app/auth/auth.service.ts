import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, observable, pipe, tap, throwError } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  logar(dados: any): Observable<HttpResponse<any>> {
    return this.http
      .post('http://localhost:3000/user/login', dados, {
        observe: 'response',
      })
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') || '';
          this.userService.salvaToken(authToken);
        }),
        catchError((error) => {
          console.error('Erro na requisição:', error);
          return throwError(error);
        })
      );
  }
}
