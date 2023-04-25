import { error } from 'console';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(){
    this.authService.logar({userName: this.usuario, password: this.senha}).subscribe((result)=>{
      this.router.navigateByUrl('/animais')
    }, (error)=>{
      alert('Usuário ou senha inválida!')
    })
  }
}
