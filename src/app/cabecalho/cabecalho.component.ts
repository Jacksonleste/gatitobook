import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  user$ = this.userService.getUsuario();

  constructor(private userService: UserService, private router: Router) {}

  logOut() {
    this.userService.logout();
    this.router.navigate(['./']);
  }
}
