
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.css'
})
export class FoodDetailsComponent implements OnInit {
  foodItem: any;

  constructor(private router:Router){

  }

  ngOnInit(): void{
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.foodItem = navigation.extras.state['foodItem']; // Modificação aqui
    } else {
      // Lidar com o caso em que não há dados de item de comida disponíveis
    }
  }
}


