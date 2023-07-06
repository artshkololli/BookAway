import { Book } from "./app/shared/models/Book";
import { Tag } from "./app/shared/models/Tag";

export const sample_books:Book[]=[
  {
    id:'1',
    name:'Historical Book',
    price:25.99,
    pages:300,
    description:'1900s story',
    stars:4.1,
    imageUrl:'assets/food-1.jpg',
    tags:['History', '1900s'],
  },
  {
    id:'2',
    name:'Fantasy Book',
    price:19.99,
    pages:240,
    description:'Magic story',
    stars:3.6,
    imageUrl:'assets/food-2.jpg',
    tags:['Fantasy', 'Magic'],
  },
  {
    id:'3',
    name:'Educational Book',
    price:29.99,
    pages:180,
    description:'Education',
    stars:4.8,
    imageUrl:'assets/food-3.jpg',
    tags:['Education','School'],
  },
];

export const sample_tags:Tag[]=[
  // {name:'All',count:6},
  {name:'History',count:1},
  {name:'1900s',count:1},
  {name:'Fantasy',count:1},
  {name:'Magic',count:1},
  {name:'Education',count:1},
  {name:'School',count:1},
]
