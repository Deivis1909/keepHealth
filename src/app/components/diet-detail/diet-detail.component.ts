import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from '../../service/diet.service';
import { FoodItem } from '../../model/foodItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent implements OnInit {

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
  }}
