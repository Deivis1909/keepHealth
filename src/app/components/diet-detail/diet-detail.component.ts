import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from '../../service/diet.service';
import { FoodItem } from '../../model/foodItem';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent implements OnInit {

  foodItem : FoodItem | undefined;

  constructor(private route:ActivatedRoute,private dietService:DietService){

  }
  ngOnInit(): void {
    const foodItemId = Number(this.route.snapshot.paramMap.get('id'));


  }

}
