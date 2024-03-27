
import { Component, OnInit } from '@angular/core';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FoodItem } from '../../model/foodItem';
import { DietService } from '../../service/diet.service';
import { OnReadOpts } from 'net';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foodList: FoodItem[] = [];

  constructor(private dietService: DietService) { }

  ngOnInit(): void {
    this.foodList = this.dietService.getFoodList();
  }

  addFoodItem(): void {
    this.dietService.addFoodItem(this.foodList);
  }

}
