import { Component } from '@angular/core';

import { Router } from '@angular/router';




import { FormsModule } from '@angular/forms';

import { FormArray } from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';

import { CadastroComponent } from '../cadastro/cadastro.component';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatDividerModule,MatIconModule,MatToolbarModule,  MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  //  email:String='';
   // senha:String='';
   // error: string = '';







  constructor() {}

  login(): void {

   // const loggedIn = this.cadastro.salvar//(this.email,this.senha);
   // if (!loggedIn) {
      //this.error = 'Usuário ou senha inválidos';
    //} else {
      // Redirecionar para a página de perfil ou outra página após o login bem-sucedido
   // }

   }


  }






