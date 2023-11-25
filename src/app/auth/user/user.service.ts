import { User } from './user';
import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.verificaToken()){
      this.decodeToken();
    }
  }

  decodeToken(): void {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;
    this.userSubject.next(user);
  }

  getUsuario(): Observable<User> {
    return this.userSubject.asObservable();
  }

  salvaToken(token:string){
    this.tokenService.addToken(token)
    this.decodeToken();
  }

  logout(){
    this.tokenService.removeToken();
  }
}
