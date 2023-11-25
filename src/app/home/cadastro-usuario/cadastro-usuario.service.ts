import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {

  private apiUrl:string = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: NovoUsuario) {
    return this.http.post(`${this.apiUrl}user/signup`, usuario);
  }

  verificaUsuarioExiste(nomeUser: string){
    console.log("verificaUsuarioExiste")
    return this.http.get(`${this.apiUrl}user/exists/${nomeUser}`)
  }
}
