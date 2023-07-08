import { Book } from "./app/shared/models/Book";
import { Tag } from "./app/shared/models/Tag";

export const sample_books:Book[]=[
  {
    id:'1',
    name:'Sapiens:A Brief History of Humankind by Yuval Noah Harari',
    price:25.99,
    pages:300,
    description:'The academic discipline of history is the account of cultural change.' +
    'Harari surveys the history of humankind from the Stone Age up to the 21st century,' +
    'focusing on Homo sapiens. He divides the history of Sapiens into four major parts:' +
    'The Cognitive Revolution (c. 70,000 BCE, when imagination evolved in Sapiens).' +
    'The Agricultural Revolution (c. 10,000 BCE, the development of agriculture).' +
    'The unification of humankind (c. 34 CE, the gradual consolidation of human political organizations towards one global empire)' +
    'The Scientific Revolution (c. 1543 CE, the emergence of objective science).',
    stars:4.6,
    imageUrl:'assets/Sapiens.jpg',
    tags:['History', 'Education','Nonfiction'],
  },
  {
    id:'2',
    name:'Harry Potter and the Deathly Hallows by J.K.Rowling',
    price:14.99,
    pages:784,
    description:'Harry is about to turn seventeen and will lose his deceased mothers protection.' +
    'Members of the Order of the Phoenix relocate the Dursleys, and prepare to move Harry to The Burrow by flying him there, using his friends as decoys.' +
    'Death Eaters attack them upon departure, and in the ensuing battle, "Mad-Eye" Moody and Hedwig die while George Weasley is wounded.' +
    'Voldemort arrives to kill Harry, whose wand fends off the attack.',
    stars:4.9,
    imageUrl:'assets/Harry_Potter.jpg',
    tags:['Fantasy', 'Magic','Supernatural','Adventure'],
  },
  {
    id:'3',
    name:'ng-book: The Complete Guide to Angular 5th Edition by Nathan Murray,Felipe Coury,Ari Lerner,Carlos Taborda',
    price:59.99,
    pages:720,
    description:' The in-depth, complete, and up-to-date book on Angular. Become an Angular expert today.'+
    'The first chapter opens with building your first Angular app. Within the first few minutes, you will know enough to have an app running'+
    'You will learn core Angular concepts - from how Angular works under the hood,' +
    'to rich interactive components, from in-depth testing to real-world applications.'+
    'Learn Angular best practices, such as: testing, code organization, and how to structure your app for performance.' +
    'We will walk through practical, common examples of how to implement complete components of your applications.',
    stars:3.9,
    imageUrl:'assets/Angular.jpg',
    tags:['Education','School','Nonfiction'],
  },
  {
    id:'4',
    name:'Twilight (Book 1) by Stephenie Meyer',
    price:19.99,
    pages:544,
    description:'Bella Swan moves from Phoenix, Arizona to live with her father in Forks, Washington to allow her mother to travel with her new husband,' +
    'a minor league baseball player. After moving to Forks, Bella finds herself involuntarily drawn to a mysterious,' +
    'handsome boy, Edward Cullen and eventually learns that he is a member of a vampire family which drinks animal blood rather than human blood.' +
    'Edward and Bella fall in love, while James, a sadistic vampire from another coven, is drawn to hunt down Bella.' +
    'Edward and the other Cullens defend Bella. She escapes to Phoenix, where she is tricked into confronting James, who tries to kill her.' +
    'She is seriously wounded, but Edward rescues her and they return to Forks.',
    stars:4.7,
    imageUrl:'assets/Twilight.jpg',
    tags:['Romance','Fantasy','Supernatural','Novel','Mystery'],
  },
  {
    id:'5',
    name:'The Da Vinci Code by Dan Brown',
    price:15.99,
    pages:689,
    description:'While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night.' +
    'The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols.' +
    'As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles,' +
    'they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.',
    stars:4.6,
    imageUrl:'assets/The_Da_Vinci_Code.jpg',
    tags:['Thriller','Crime','Novel','Mystery','Historical Fiction','Adventure'],
  },
  {
    id:'6',
    name:'The Hunger Games by Suzanne Collins',
    price:12.99,
    pages:384,
    description:'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts.' +
    'The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen' +
    'to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister,' +
    'regards it as a death sentence when she steps forward to take her sister place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature.',
    stars:4.7,
    imageUrl:'assets/Hunger_Games.jpg',
    tags:['Fantasy','Romance','Adventure','Thriller'],
  },
  {
    id:'7',
    name:'Pride and Prejudice by Jane Austen',
    price:11.99,
    pages:432,
    description:'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language.' +
    'Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print."' +
    'The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring.' +
    'And Jane Austen radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.',
    stars:4.6,
    imageUrl:'assets/Pride_And_Prejudice.jpg',
    tags:['Fantasy','Romance','Historical Fiction','Novel','History'],
  },
  {
    id:'8',
    name:'To Kill a Mockingbird by Harper Lee',
    price:23.99,
    pages:336,
    description:'One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide,' +
    'served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching,' +
    'and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl,' +
    'as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.',
    stars:4.7,
    imageUrl:'assets/Mockingbird.jpg',
    tags:['Fantasy','School','Historical Fiction','Novel','History'],
  },
  {
    id:'9',
    name:'The Diary of a Young Girl by Anne Frank',
    price:17.99,
    pages:283,
    description:'Discovered in the attic in which she spent the last years of her life, Anne Frank remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.' +
    'In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding.' +
    'For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building.' +
    'Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death.' +
    'In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous,' +
    'her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.',
    stars:4.7,
    imageUrl:'assets/Anne_Frank.jpg',
    tags:['Nonfiction','School','Novel','History'],
  },
];

export const sample_tags:Tag[]=[
  {name:'All',count:14},
  {name:'Adventure',count:3},
  {name:'History',count:4},
  {name:'Romance',count:3},
  {name:'Novel',count:5},
  {name:'Nonfiction',count:3},
  {name:'Historical Fiction',count:3},
  {name:'Mystery',count:2},
  {name:'Thriller',count:2},
  {name:'Crime',count:1},
  {name:'Supernatural',count:2},
  {name:'Fantasy',count:5},
  {name:'Magic',count:1},
  {name:'Education',count:2},
  {name:'School',count:3},
]
