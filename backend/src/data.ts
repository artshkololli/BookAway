export const sample_foods:any[]=[
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
    name:'Pasta Carbonara',
    price:9,
    cookTime:'30-40mins',
    favorite:true,
    origins:['Italy'],
    stars:4.8,
    imageUrl:'assets/food-3.jpg',
    tags:['Sauce','Pasta','Lunch','SlowFood'],
  },
];

export const sample_tags:any[]=[
  {name:'All',count:6},
  {name:'FastFood',count:1},
  {name:'Pizza',count:1},
  {name:'Lunch',count:2},
  {name:'SlowFood',count:1},
  {name:'Sauce',count:1},
  {name:'Pasta',count:1},
];

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];

