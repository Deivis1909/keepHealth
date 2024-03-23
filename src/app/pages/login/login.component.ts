import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule,Validators,FormsModule, FormBuilder } from '@angular/forms';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';




import { Router } from '@angular/router';
import { DataService } from '../../data/data-service.service';


@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,CommonModule
    ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string ='';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.loginForm = this.formBuilder.group({
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    const senha = this.loginForm.get('senha')?.value;
    const email = this.loginForm.get('email')?.value;

    const usuarioSalvo = this.dataService.getUsuarioSalvo();

    if (usuarioSalvo && usuarioSalvo.senhaUsuario === senha && usuarioSalvo.emailUsuario === email) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Nome ou email incorretos. Por favor, tente novamente.';
    }
  }
}
