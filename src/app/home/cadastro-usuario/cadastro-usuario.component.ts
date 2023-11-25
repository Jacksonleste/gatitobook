import { UsuarioExisteService } from './usuario-existe.service';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { relative } from 'path';
import { error } from 'console';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private usuarioExisteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.initCadastroUsuarioForm();
  }

  initCadastroUsuarioForm() {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, this.validatorMinusculo],
          [this.usuarioExisteService.usuarioExiste()],
        ],
        password: ['', [Validators.required]],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if (!this.novoUsuarioForm.valid) {
      return;
    }

    const  novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.cadastroUsuarioService.cadastrarUsuario(novoUsuario).subscribe((a) => {
      this.router.navigate(['']);
    },
    (error)=>{
      console.error(error)
    });
  }

  validatorMinusculo(control: FormControl) {
    const valor = control.value;

    if (valor != valor.toLowerCase()) {
      return { minusculo: true };
    }
    return null;
  }
}
