import { Component } from '@angular/core';

import { Router } from '@angular/router';




import { FormsModule } from '@angular/forms';

import { FormArray } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatDividerModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user ={
    email:'',
    senha:''

  }





  constructor(private router:Router) {}

  login() {
    return null;

   }


  }






