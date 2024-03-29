import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: FormGroup | undefined;
  storedUser: string | null;

  constructor() {
    this.storedUser = localStorage.getItem('usuarioCriado');
  }

  ngOnInit(): void {
    // Inicializando o formulário com os mesmos campos do formulário de cadastro
    this.profile = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      dataNasimento: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl(''),
      peso: new FormControl(''),
      altura: new FormControl(''),
      cep: new FormControl('')
    });

    // Carregando os dados do usuário do localStorage, se existirem
    if (this.storedUser) {
      const usuario = JSON.parse(this.storedUser);
      this.profile.patchValue({
        nome: usuario.nomeUsuario,
        email: usuario.emailUsuario,
        dataNasimento: usuario.dataNascimentoUsuario,
        senha: usuario.senhaUsuario,
        confirmarSenha: usuario.senhaUsuario,
        peso: usuario.pesoUsuario,
        altura: usuario.alturaUsuario,
        cep: usuario.cepUsuario
      });
    }
  }

  // Não há necessidade de salvar o perfil novamente, pois ele já foi salvo durante o cadastro
}
