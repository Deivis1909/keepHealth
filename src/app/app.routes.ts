
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { DietasComponent } from './pages/dietas/dietas.component';
import { DietDetailComponent } from './components/diet-detail/diet-detail.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:CadastroComponent},
  {path:"home",component:HomeComponent,children:[
    {path:"diet",component:DietasComponent},
    {path:"perfil",component:ProfileComponent},

    {path:"inicial",component:InicioComponent}

  ]},
  {path:"cadastro",component:CadastroComponent},
  { path: 'food-details/:id', component: DietDetailComponent }

];
