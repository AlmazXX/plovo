export interface Dish {
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface DishMutation extends Dish {
  price: string;
}

export interface ApiDish extends Dish {
  id: string
}