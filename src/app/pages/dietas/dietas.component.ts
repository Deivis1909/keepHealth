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
  foodList: FoodItem[] = [{
    id: 1,
    name: "Banana",
    description: "Fruta rica em potássio e vitaminas.",
    qttCalories: 105,
    qttDaysFeed: 5,
    imageLink: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png'
  },
  {
    id: 2,
    name: "Maçã",
    description: "Fruta rica em fibras e vitaminas.",
    qttCalories: 95,
    qttDaysFeed: 7,
    imageLink: 'data:image/jpeg;base64,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'
  },
  {
    id: 3,
    name: "Feijão",
    description: "Leguminosa rica em proteínas e fibras.",
    qttCalories: 150,
    qttDaysFeed: 4,
    imageLink: 'https://media.istockphoto.com/id/1367053923/pt/foto/black-beans-and-rice-dish.jpg?s=612x612&w=0&k=20&c=BoOYHg2r7y57D1Sr06VIXwfxKnEZGuaupLURjmViTtA='
  },
  {
    id: 4,
    name: "Saladas",
    description: "Combinação de folhas e vegetais frescos.",
    qttCalories: 50,
    qttDaysFeed: 7,
    imageLink: 'https://img.freepik.com/fotos-gratis/salada-na-tigela-na-mesa-de-madeira_1150-21406.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1701907200&semt=ais'
  },
  {
    id: 5,
    name: "Sanduíche Natural",
    description: "Sanduíche feito com ingredientes saudáveis.",
    qttCalories: 250,
    qttDaysFeed: 3,
    imageLink: 'https://maravilhadesabor.com.br/wp-content/uploads/2024/02/Sanduiche-Natural.jpg'
  },
  {
    id: 6,
    name: "Peixe",
    description: "Fonte de proteína magra e ômega-3.",
    qttCalories: 200,
    qttDaysFeed: 2,
    imageLink: 'https://images.squarespace-cdn.com/content/v1/5b50a712d274cbcc82a62c08/1532017024035-03UB2F3DWF2LL9W4K853/Sardinhas-e-salada.jpg'
  }
];


  constructor(private dietService: DietService,private router:Router) { }

  ngOnInit(): void {

    this.dietService.saveFoodList(this.foodList);
  }

  addFoodItem(): void {
    this.dietService.addFoodItem(this.foodList);
  }
  showFoodDetails(foodItemId: number): void {
    this.router.navigate(['/detalhes', foodItemId]);
  }
}



