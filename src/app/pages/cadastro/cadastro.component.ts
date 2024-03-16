import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators,FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,CommonModule, MatTooltipModule, MatIconModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  // montando o objeto de cadastro
  cadastro = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dataNasimento: new FormControl(),
    senha:new FormControl(''),
    confirmaSenha:new FormControl('')



  })

  salvar(){
    if(this.cadastro.value.senha === this.cadastro.value.confirmaSenha){

      //CRIANDO OBJETO USUARIO
      const usuario = {
        nomeUsuario:this.cadastro.value.nome,
        emailUsuario:this.cadastro.value.email,
        dataNascimentoUsuario:this.cadastro.value.dataNasimento,
        senhaUsuario:this.cadastro.value.senha




      }
      // setando o objeto no localStorage
      localStorage.setItem('usuarioCriado', JSON.stringify(usuario));

    }



  }

}
