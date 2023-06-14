#Steps\
&emsp;1.Install dev tools\
&emsp;2.Create Angular App\
&emsp;3.Create project folder\
&emsp;4.Install @angular/cli\
&emsp;5.Create Frontend\
&emsp;&emsp;5.1.Add Header\
&emsp;&emsp;&emsp;&emsp;5.1.1.Create Header Component\
&emsp;&emsp;&emsp;&emsp;5.1.2.Add HTML/CSS\
&emsp;&emsp;5.2.List Foods\
&emsp;&emsp;&emsp;&emsp;5.2.1.Create Food model\
&emsp;&emsp;&emsp;&emsp;5.2.2.Create data.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.2.2.1.Add sample data\
&emsp;&emsp;&emsp;&emsp;5.2.3.Add images to assets\
&emsp;&emsp;&emsp;&emsp;5.2.4.Create Food service\
&emsp;&emsp;&emsp;&emsp;5.2.5.Create Home Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.2.5.1.Add HTML/CSS/TS\
&emsp;&emsp;5.3.Add Search Feature\
&emsp;&emsp;&emsp;&emsp;5.3.1.Add method(service)\
&emsp;&emsp;&emsp;&emsp;5.3.2.Add search route(app-routing,router-outlet tag in app component)\
&emsp;&emsp;&emsp;&emsp;5.3.3.Show search result in Home Component(activatedRoute in constructor)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.3.1.Use activatedRoute.params.subscribe() to get result\
&emsp;&emsp;&emsp;&emsp;5.3.4.Create Search Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.1.Add to Home Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.Add HTML/CSS/TS\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.1.Add empty search variable\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.2.Add activatedRoute in constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.3.Add private router:Router in constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.4.Use activatedRoute.params.subscribe() to get result\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.5.Create searchBar function(navigateByUrl)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.6.Add input tag(#s reference template)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.7.Add to input tag (keyup.enter)="Searchbar(s.value)"\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.8.Add to input tag [value]="search"\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.9.Add button tag(click="searchBar(s.value)")\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.3.4.2.10.Add CSS\
&emsp;&emsp;5.4.Add Tag Bar\
&emsp;&emsp;&emsp;&emsp;5.4.1.Create Tag Model(models folder)\
&emsp;&emsp;&emsp;&emsp;5.4.2.Add sample tags to data.ts\
&emsp;&emsp;&emsp;&emsp;5.4.3.Add Food tags service (food.service.ts file)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.3.1.Add get all tags method\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.3.2.Add get all foods by tag method\
&emsp;&emsp;&emsp;&emsp;5.4.4.Add tags route(app-routing)\
&emsp;&emsp;&emsp;&emsp;5.4.5.Show tag result in Home Component(add else if to activatedRoute.params.subscribe)\
&emsp;&emsp;&emsp;&emsp;5.4.6.Create Tags Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.1.Add to Home Component(app-tags html tag)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.Add HTML/CSS/TS\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.1.Add empty tag array variable\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.2.Add foodService in constructor and get all tags\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.3.Add div *ngIf="tags" directive\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.4.Add html tag a with *ngFor and routerLink directives\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.5.Add CSS\
&emsp;&emsp;5.5.Add Food Page\
&emsp;&emsp;&emsp;&emsp;5.5.1.Add method to food service(use .find)\
&emsp;&emsp;&emsp;&emsp;5.5.2.Create Food Page Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.1.Add food page route(app-routing, component:FoodPageComponent)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.2.Add empty food variable of type Food\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.3.Add activatedRoute and foodService in constuctor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.4.Use activatedRoute.params.subscribe()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.5.Add HTML/CSS (use *ngFor to show origins and tags (add routerLink))\
&emsp;&emsp;5.6.Add Cart Page\
&emsp;&emsp;&emsp;&emsp;5.6.1.Create Cart and CartItem Models\
&emsp;&emsp;&emsp;&emsp;5.6.2.Add Cart service(ng g s services/cart in terminal)\
&emsp;&emsp;&emsp;&emsp;5.6.3.create private cart:Cart=new Cart()\
&emsp;&emsp;&emsp;&emsp;5.6.4.create private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)\
&emsp;&emsp;&emsp;&emsp;5.6.5.import BehaviorSubject from rxjs\
&emsp;&emsp;&emsp;&emsp;5.6.6.Add addToCart Method (use .find() and .push())\
&emsp;&emsp;&emsp;&emsp;5.6.7.Add removeFromCart Method (use .filter())\
&emsp;&emsp;&emsp;&emsp;5.6.8.Add to Cart Button in Food Page\

