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
import { Router } from '@angular/router';



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
  static proximoId: number = 1;

  // montando o objeto de cadastro
  cadastro = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl(''),
    dataNasimento: new FormControl(''),
    senha:new FormControl(''),
    confirmarSenha:new FormControl(''),
    peso:new FormControl(''),
    altura:new FormControl(''),
    cep:new FormControl('')



  })

 constructor(private router:Router){

 }


  salvar(){
    if(this.cadastro.value.senha === this.cadastro.value.confirmarSenha &&
       this.cadastro.value.nome && this.cadastro.value.email && this.cadastro.value.dataNasimento){
        // verifica se valores nao sao nullos , se todos os campos foram preenchidos

      //CRIANDO OBJETO USUARIO e POPULANDO ELE
      //COM DADOS VINDOS DO .CADASTRO.VALUE -> FORMSGROUP -> DO TEMPLATE FORMULARIO
      const usuario = {
        id: CadastroComponent.proximoId++, // Incrementa o ID estático
        nomeUsuario:this.cadastro.value.nome,
        emailUsuario:this.cadastro.value.email,
        dataNascimentoUsuario:this.cadastro.value.dataNasimento,
        senhaUsuario:this.cadastro.value.senha,
        pesoUsuario:this.cadastro.value.peso,
        alturaUsuario:this.cadastro.value.altura,
        cepUsuario:this.cadastro.value.cep




      }
      // setando o objeto USUARIO QUE VEIO DO FORMSGROUP no localStorage
      localStorage.setItem('usuarioCriado', JSON.stringify(usuario));

      this.router.navigate(['/login']);

    }



  }

}
