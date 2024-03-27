import { Component, OnInit } from '@angular/core';
import { DietService } from '../../service/diet.service';
import { FoodItem } from '../../model/foodItem';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dietas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.css'
})
export class DietasComponent implements OnInit {

  foodList: FoodItem[] = [];


  constructor(private dietService: DietService,private router:Router) { }

  ngOnInit(): void {

    this.foodList = this.dietService.getFoodList();


  }


  showFoodDetails(foodItemId: number): void {
    this.router.navigate(['/detalhes', foodItemId]);
  }
}



