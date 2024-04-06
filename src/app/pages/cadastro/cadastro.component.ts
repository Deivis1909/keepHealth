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
import { ToastrService } from 'ngx-toastr';



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
  styleUrl: './cadastro.component.css' // Aqui está a correção
})
export class CadastroComponent {
  static proximoId: number = 1;

  // montando o objeto de cadastro
  cadastro = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dataNascimento: new FormControl('',[Validators.required,Validators.minLength(8)]),
    senha:new FormControl('',[Validators.required]),
    confirmarSenha:new FormControl('',[Validators.required]),
    peso:new FormControl('',[Validators.required,Validators.min(10),Validators.max(420)]),
    altura:new FormControl(''),
    cep:new FormControl('',)



  })

 constructor(private router:Router,private toast:ToastrService){

 }




      salvar() {

            if (this.cadastro.valid) {
            const usuario = {
              id: CadastroComponent.proximoId++,
              nomeUsuario: this.cadastro.value.nome,
              emailUsuario: this.cadastro.value.email,
              dataNascimentoUsuario: this.cadastro.value.dataNascimento,
              senhaUsuario: this.cadastro.value.senha,
              confirmaSenhaUsuario: this.cadastro.value.confirmarSenha,
              pesoUsuario: this.cadastro.value.peso,
              alturaUsuario: this.cadastro.value.altura,
              cepUsuario: this.cadastro.value.cep
            };

              if(usuario.senhaUsuario === usuario.confirmaSenhaUsuario){
                this.toast.success('Cadastro salvo com sucesso', 'Belezinha', {
                  timeOut: 2000,
                  progressBar: true,
                  closeButton: true,
                  enableHtml: true,
                  toastClass: 'custom-toast-success'
                });
                localStorage.setItem('usuarioCriado', JSON.stringify(usuario));
                this.router.navigate(['/login']);

              }else{
                this.toast.error("senha e confirmação de senha devem ser iguais","problema no confirma senha", {
                  timeOut: 200000,
                  progressBar: true,
                  closeButton: true,
                  enableHtml: true,
                  toastClass: 'custom-toast-error'
                })

              }





          } else {
            // Verificar quais campos estão inválidos
            Object.keys(this.cadastro.controls).forEach(key => {
              const control = this.cadastro.get(key);
              if (control?.invalid) {
                this.toast.error(`Campo ${key} inválido`, 'Erro', {
                  timeOut: 200000,
                  progressBar: true,
                  closeButton: true,
                  enableHtml: true,
                  toastClass: 'custom-toast-error'
                });
              }
            });
          }
        }
      }

