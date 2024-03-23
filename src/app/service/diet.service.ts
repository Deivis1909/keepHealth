import { Injectable } from '@angular/core';
import { FoodItem } from '../model/foodItem';

@Injectable({
  providedIn: 'root'
})
export class DietService {private localStorageKey = 'foodList';

constructor() {
  this.initializeFoodList(); // Chama o método para inicializar a lista de alimentos
}

getFoodList(): FoodItem[] {
  const savedFoodList = localStorage.getItem(this.localStorageKey);
  return savedFoodList ? JSON.parse(savedFoodList) : [];
}

saveFoodList(foodList: FoodItem[]): void {
  localStorage.setItem(this.localStorageKey, JSON.stringify(foodList));
}

addFoodItem(foodList: FoodItem[]): void {
  const newItem: FoodItem = {
    id: foodList.length + 1,
    name: '',
    description: '',
    qttCalories: 0,
    qttDaysFeed: 0,
    imageLink: ''
  };
  foodList.push(newItem);
  this.saveFoodList(foodList);
}

initializeFoodList(): void {
  const initialFoodList: FoodItem[] = [
    {
      id: 1,
      name: "Banana",
      description: "Fruta rica em potássio e vitaminas.",
      qttCalories: 105,
      qttDaysFeed: 5,
      imageLink: 'https://via.placeholder.com/150x150'
    },
    {
      id: 2,
      name: "Maçã",
      description: "Fruta rica em fibras e vitaminas.",
      qttCalories: 95,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: "Feijão",
      description: "Leguminosa rica em proteínas e fibras.",
      qttCalories: 150,
      qttDaysFeed: 4,
      imageLink: 'https://via.placeholder.com/150x150'
    },
    {
      id: 4,
      name: "Saladas",
      description: "Combinação de folhas e vegetais frescos.",
      qttCalories: 50,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150'
    },
    {
      id: 5,
      name: "Sanduíche Natural",
      description: "Sanduíche feito com ingredientes saudáveis.",
      qttCalories: 250,
      qttDaysFeed: 3,
      imageLink: 'https://via.placeholder.com/150x150'
    },
    {
      id: 6,
      name: "Peixe",
      description: "Fonte de proteína magra e ômega-3.",
      qttCalories: 200,
      qttDaysFeed: 2,
      imageLink: 'https://via.placeholder.com/150x150'
    }
  ];


  // Se não houver lista de alimentos no localStorage, inicializa com os dados iniciais
  if (!localStorage.getItem(this.localStorageKey)) {
    this.saveFoodList(initialFoodList);
  }
}
}
