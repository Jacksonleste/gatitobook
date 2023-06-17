import { UsuarioExisteService } from './usuario-existe.service';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private usuarioExisteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.initCadastroUsuarioForm();
  }

  initCadastroUsuarioForm() {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, this.validatorMinusculo], [this.usuarioExisteService.usuarioExiste()]],
      password: ['', [Validators.required]],
    }, {
      validators: [usuarioSenhaIguaisValidator],
    });
  }

  cadastrar() {
    console.log(this.novoUsuarioForm.controls)
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }

  validatorMinusculo(control: FormControl) {
    const valor = control.value;

    if (valor != valor.toLowerCase()) {
      return { minusculo: true };
    }
    return null;
  }
}
