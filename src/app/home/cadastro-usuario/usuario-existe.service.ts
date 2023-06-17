import { Injectable } from '@angular/core';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private cadastroUsuarioService: CadastroUsuarioService) {}

  usuarioExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUser) =>
          this.cadastroUsuarioService.verificaUsuarioExiste(nomeUser)
        ),
        map((usuarioExiste: any) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
