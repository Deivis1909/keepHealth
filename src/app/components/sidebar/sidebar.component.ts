import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,MatDividerModule,MatIconModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


}
