import { Food } from "./app/shared/models/food";

export const sample_foods:Food[]=[
  {
    id:'1',
    name:'Chicken Soup',
    price:5,
    cookTime:'10-15mins',
    favorite:true,
    origins:['India' , 'Asia'],
    stars:4.0,
    imageUrl:'assets/food-1.jpg',
    tags:['SlowFood', 'Soup'],
  },
  {
    id:'2',
    name:'Vegan Pizza',
    price:11,
    cookTime:'20-30mins',
    favorite:false,
    origins:['Italy'],
    stars:3.2,
    imageUrl:'assets/food-2.jpg',
    tags:['FastFood', 'Pizza','Lunch'],
  },
  {
    id:'3',
    name:'Carbonara Pasta',
    price:9,
    cookTime:'30-40mins',
    favorite:true,
    origins:['Italy'],
    stars:4.8,
    imageUrl:'assets/food-3.jpg',
    tags:['Sauce', 'Pasta','Carbonara'],
  },
];
