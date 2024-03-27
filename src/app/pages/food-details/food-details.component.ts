
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DietService } from '../../service/diet.service';
import { FoodItem } from '../../model/foodItem';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.css'
})
export class FoodDetailsComponent implements OnInit {
  foodItem: FoodItem | undefined; // Definindo como opcional


  constructor(private route: ActivatedRoute, private dietService: DietService) { }

  ngOnInit(): void {
    const foodItemId = this.route.snapshot?.paramMap.get('id');
    if (foodItemId !== null && foodItemId !== undefined) {
      const parsedFoodItemId = +foodItemId;
      if (!isNaN(parsedFoodItemId)) {
        this.foodItem = this.dietService.getFoodItemById(parsedFoodItemId);
      }
    }
  }
}


