#Steps\
&emsp;1.Install dev tools\
&emsp;2.Create Angular App\
&emsp;3.Create project folder\
&emsp;4.Install @angular/cli\
&emsp;5.Create Frontend folder\
&emsp;&emsp;5.1.Add Header\
&emsp;&emsp;&emsp;&emsp;5.1.1.Create Header Component\
&emsp;&emsp;&emsp;&emsp;5.1.2.Add HTML/CSS\
&emsp;&emsp;5.2.List Books\
&emsp;&emsp;&emsp;&emsp;5.2.1.Create Book model\
&emsp;&emsp;&emsp;&emsp;5.2.2.Create data.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.2.2.1.Add sample data\
&emsp;&emsp;&emsp;&emsp;5.2.3.Add images to assets\
&emsp;&emsp;&emsp;&emsp;5.2.4.Create Book service\
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
&emsp;&emsp;&emsp;&emsp;5.4.3.Add Book tags service (book.service.ts file)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.3.1.Add get all tags method\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.3.2.Add get all books by tag method\
&emsp;&emsp;&emsp;&emsp;5.4.4.Add tags route(app-routing)\
&emsp;&emsp;&emsp;&emsp;5.4.5.Show tag result in Home Component(add else if to activatedRoute.params.subscribe)\
&emsp;&emsp;&emsp;&emsp;5.4.6.Create Tags Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.1.Add to Home Component(app-tags html tag)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.Add HTML/CSS/TS\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.1.Add empty tag array variable\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.2.Add bookService in constructor and get all tags\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.3.Add div *ngIf="tags" directive\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.4.Add html tag a with *ngFor and routerLink directives\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.4.6.2.5.Add CSS\
&emsp;&emsp;5.5.Add Book Page\
&emsp;&emsp;&emsp;&emsp;5.5.1.Add method to book service(use .find)\
&emsp;&emsp;&emsp;&emsp;5.5.2.Create Book Page Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.1.Add book page route(app-routing, component:FoodPageComponent)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.2.Add empty book variable of type Book\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.3.Add activatedRoute and foodService in constuctor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.4.Use activatedRoute.params.subscribe()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5.5.2.5.Add HTML/CSS (use *ngFor to show origins and tags (add routerLink))\
&emsp;&emsp;5.6.Add Cart Page\
&emsp;&emsp;&emsp;&emsp;5.6.1.Create Cart and CartItem Models\
&emsp;&emsp;&emsp;&emsp;5.6.2.Add Cart service(ng g s services/cart in terminal)\
&emsp;&emsp;&emsp;&emsp;5.6.3.Create private cart:Cart=new Cart(Changed to this.getCartFromLocalStorage() later)\
&emsp;&emsp;&emsp;&emsp;5.6.4.Create private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)\
&emsp;&emsp;&emsp;&emsp;5.6.5.Import BehaviorSubject from rxjs\
&emsp;&emsp;&emsp;&emsp;5.6.6.Add addToCart Method (use .find() and .push())\
&emsp;&emsp;&emsp;&emsp;5.6.7.Add removeFromCart Method (use .filter())\
&emsp;&emsp;&emsp;&emsp;5.6.8.Add clearCart and changeQuantity Method (use .find())\
&emsp;&emsp;&emsp;&emsp;5.6.9.Add getCartObservable Method (return this.carSubject.asObservable())\
&emsp;&emsp;&emsp;&emsp;5.6.10.Import Observable from rxjs\
&emsp;&emsp;&emsp;&emsp;5.6.11.Add private setCartToLocalStorage():void method\
&emsp;&emsp;&emsp;&emsp;5.6.12.Get totalPrice and totalCount using .reduce() method\
&emsp;&emsp;&emsp;&emsp;5.6.13.Use JSON.Stringify on this.cart to set the Cart to localStorage\
&emsp;&emsp;&emsp;&emsp;5.6.14.Use this.cartSubject.next(this.cart)\
&emsp;&emsp;&emsp;&emsp;5.6.15.Add private getCartFromLocalStorage():Cart method\
&emsp;&emsp;&emsp;&emsp;5.6.16.Use setCartToLocalStorage method on all methods except getCartObservable()\
&emsp;&emsp;&emsp;&emsp;5.6.17.Add private cartService:CartService and router:Router to Book Page constructor\
&emsp;&emsp;&emsp;&emsp;5.6.18.Add addToCart method in Book Page\
&emsp;&emsp;&emsp;&emsp;5.6.19.Add addToCart method to the button in Book Page Component\
&emsp;&emsp;&emsp;&emsp;5.6.20.Create cart-page Component\
&emsp;&emsp;&emsp;&emsp;5.6.21.Add Route for cart-page(app-routing)\
&emsp;&emsp;&emsp;&emsp;5.6.22.Add private cartService in cart-page constructor and use .subscribe method\
&emsp;&emsp;&emsp;&emsp;5.6.23.Add removeFromCart and changeQuantity methods\
&emsp;&emsp;&emsp;&emsp;5.6.24.Create title Component in partials folder\
&emsp;&emsp;&emsp;&emsp;5.6.25.Add app-title to cart-page\
&emsp;&emsp;&emsp;&emsp;5.6.26.Add @Input to title component(title! , margin? , fontSize? inputs)\
&emsp;&emsp;&emsp;&emsp;5.6.27.Use inputs in title component html(use [ngStyle] for margin and fontsize)\
&emsp;&emsp;&emsp;&emsp;5.6.28.Add CSS to title component\
&emsp;&emsp;&emsp;&emsp;5.6.29.Show cartItems in cart page\
&emsp;&emsp;&emsp;&emsp;5.6.30.Use select tag for quantity selection(use #quantitySelect on tag)\
&emsp;&emsp;&emsp;&emsp;5.6.31.Show price of cartItems\
&emsp;&emsp;&emsp;&emsp;5.6.32.Add Remove button\
&emsp;&emsp;&emsp;&emsp;5.6.33.Add Checkout with totalCount and totalPrice in cart page\
&emsp;&emsp;&emsp;&emsp;5.6.34.Add CSS\
&emsp;&emsp;&emsp;&emsp;5.6.35.Add cartService to header constuctor and show quantity in header component\
&emsp;&emsp;5.7.Add Not Found Page\
&emsp;&emsp;&emsp;&emsp;5.7.1.Create not-found Component\
&emsp;&emsp;&emsp;&emsp;5.7.2.Add app-not-found to cart-page component\
&emsp;&emsp;&emsp;&emsp;5.7.3.Add visible,notFoundMessage,resetLinkText,resetLinkRoute @Input in not-found class\
&emsp;&emsp;&emsp;&emsp;5.7.4.Add @input in cart-page component (inside app-not-found)\
&emsp;&emsp;&emsp;&emsp;5.7.5.Add CSS\
&emsp;&emsp;&emsp;&emsp;5.7.6.Add app-not-found to all pages\
&emsp;6.Create Backend folder\
&emsp;&emsp;6.1.Use npm init -y in terminal and install Typescript\
&emsp;&emsp;6.2.Create a tsconfig.json file\
&emsp;&emsp;6.3.Create src folder and .gitignore file\
&emsp;&emsp;6.4.Copy data.ts to backend/src(change array names to any)\
&emsp;&emsp;6.5.Install express cors\
&emsp;&emsp;6.6.Create server.ts file\
&emsp;&emsp;&emsp;&emsp;6.6.1.Install types@express and import express in server.ts file\
&emsp;&emsp;&emsp;&emsp;6.6.2.Install types@cors and import cors in server.ts file\
&emsp;&emsp;&emsp;&emsp;6.8.3.Create express application(app=express()), use app.use,app.get,app.listen\
&emsp;&emsp;&emsp;&emsp;6.8.4.Install ts-node and nodemon(use --save-dev for both)\
&emsp;&emsp;&emsp;&emsp;6.8.5.Add a start script in package.json(value of start is "cd src && nodemon server.ts")\
&emsp;&emsp;&emsp;&emsp;6.8.5.Make api requests for sample_foods,searchTerm,tags,tagName,foodId\
&emsp;&emsp;6.7.Create constants folder in shared folder in frontend,create urls.ts\
&emsp;&emsp;&emsp;&emsp;6.7.1.add BASE_URL="backend url",FOODS,FOODS_TAGS,FOOD_BY_SEARCH,FOODS_BY_ID(add _URL)\
&emsp;&emsp;6.8.Add HttpClient Module(import in app.module.ts)\
&emsp;&emsp;&emsp;&emsp;6.8.1.Inject HttpClient in book.service constructor(private http)\
&emsp;&emsp;&emsp;&emsp;6.8.2.Use Observable for methods(<Book[]>,<Tag[]>,<Book>)\
&emsp;&emsp;6.9.Add let foodsObservable:Observable<Book[]> in home component constructor(replace this.foods)\
&emsp;&emsp;6.10.Use .subscribe() at the end of else statement\
&emsp;&emsp;6.11.For book-page and tags components remove this.foods and subscribe to the method\
&emsp;&emsp;6.12.Change book.id to just book in book page html file\
&emsp;&emsp;6.13.Adding Login\
&emsp;&emsp;&emsp;&emsp;6.13.1.Create login-page Component\
&emsp;&emsp;&emsp;&emsp;6.13.2.Add component to route(app-routing)\
&emsp;&emsp;&emsp;&emsp;6.13.3.Import FormGroup,FormBuilder,Validators from @angular/forms\
&emsp;&emsp;&emsp;&emsp;6.13.4.Add a loginForm of type FormGroup , add private formBuilder in constructor\
&emsp;&emsp;&emsp;&emsp;6.13.5.Use Validators on loginForm inside ngOnInit method\
&emsp;&emsp;&emsp;&emsp;6.13.6.Add email and password controls for loginForm(use formBuilder.group())\
&emsp;&emsp;&emsp;&emsp;6.13.7.Make a get fc() method that returns this.loginForm.controls(fc=form control)\
&emsp;&emsp;&emsp;&emsp;6.13.8.Create submit() method to check if form is invalid and to check form values\
&emsp;&emsp;&emsp;&emsp;6.13.9.Add ReactiveFormsModule to app.module imports\
&emsp;&emsp;&emsp;&emsp;6.13.10.Add a form in login-page (use [formGroup] and (ngSubmit))\
&emsp;&emsp;&emsp;&emsp;6.13.11.Add an "error-list" div and show when input is invalid for email and password\
&emsp;&emsp;&emsp;&emsp;6.13.12.Use *ngIf to check if email and password is valid , show message if its not\
&emsp;&emsp;&emsp;&emsp;6.13.13.Add Login API\
&emsp;&emsp;&emsp;&emsp;6.13.14.Add app.post("api/users/login) method in backend server\
&emsp;&emsp;&emsp;&emsp;6.13.15.Add app.use(express.json) to allow requests with json body on API\
&emsp;&emsp;&emsp;&emsp;6.13.16.Add sample_users in data.ts\
&emsp;&emsp;&emsp;&emsp;6.13.17.Use .find() method to find user in app.post() , if user exist send request\
&emsp;&emsp;&emsp;&emsp;6.13.18.Install jsonwebtoken(JWT) library and @types/jsonwebtoken to generate tokens\
&emsp;&emsp;&emsp;&emsp;6.13.19.Create generateTokenResponse=(user:any) const (use jwt.sign())\
&emsp;&emsp;&emsp;&emsp;6.13.20.Try POST request with Postman\
&emsp;&emsp;6.14.Create User Service\
&emsp;&emsp;&emsp;&emsp;6.14.1.Create User model (shared/models folder)\
&emsp;&emsp;&emsp;&emsp;6.14.2.Create private userSubject=BehaviourSubject<User>(new User())\
&emsp;&emsp;&emsp;&emsp;6.14.3.Create public userObservable=:Observable<User>\
&emsp;&emsp;&emsp;&emsp;6.14.4.Initialize this.userObservable=this.userSubject.asObservable() in constructor\
&emsp;&emsp;&emsp;&emsp;6.14.5.Create interfaces folder in shared folder and make a IUserLogin.ts file\
&emsp;&emsp;&emsp;&emsp;6.14.6.Create login(userLogin:IUserLogin):Observable<User> method and make post request\
&emsp;&emsp;&emsp;&emsp;6.14.7.Add private http:HttpClient in constructor\
&emsp;&emsp;&emsp;&emsp;6.14.8.Add USER_LOGIN_URL to urls.ts file\
&emsp;&emsp;&emsp;&emsp;6.14.9.Use .pipe(tap()) method on login post request\
&emsp;&emsp;&emsp;&emsp;6.14.10.Install ngx-toastr module\
&emsp;&emsp;&emsp;&emsp;6.14.11.Install ngx-toastr module , import ToastrModule and BrowserAnimation (app.module)\
&emsp;&emsp;&emsp;&emsp;6.14.12.Import ToastrModule.forRoot({timeOut,positionClass,newestOnTop}) in imports:[]\
&emsp;&emsp;&emsp;&emsp;6.14.13.Add private toastrService:ToastrService , use toastrService.success in login()\
&emsp;&emsp;&emsp;&emsp;6.14.14.Add "node_modules/ngx-toastr/toastr.css" to styles in angular.json file\
&emsp;&emsp;&emsp;&emsp;6.14.15.Add private userService:UserService in login-page constructor, use it in submit()\
&emsp;&emsp;&emsp;&emsp;6.14.16.Add private activatedRoute:ActivatedRoute,private router:Route same constructor\
&emsp;&emsp;&emsp;&emsp;6.14.17.Add this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl to ngOnInit\
&emsp;&emsp;&emsp;&emsp;6.14.18.Create private setUserToLocalStorage(user:User) method on user.service\
&emsp;&emsp;&emsp;&emsp;6.14.19.Create private getUserFromLocalStorage():User method on user.service\
&emsp;&emsp;&emsp;&emsp;6.14.20.Add const USER_KEY='User' in user.service(between imports and @injectable)\
&emsp;&emsp;&emsp;&emsp;6.14.21.Change new User() to this.getUserFromLocalStorage() in private userSubject\
&emsp;&emsp;&emsp;&emsp;6.14.22.Add private userService in header component constructor , add user!:User variable\
&emsp;&emsp;&emsp;&emsp;6.14.23.Put {{user.name}} in tag a routerLink="/dashboard"> at header component html\
&emsp;&emsp;&emsp;&emsp;6.14.24.Create isAuth() that returns this.user.token\
&emsp;&emsp;&emsp;&emsp;6.14.25.Add *ngIf="!isAuth" to first li tag in header component\
&emsp;&emsp;&emsp;&emsp;6.14.26.Create logout method in user.service\
&emsp;&emsp;&emsp;&emsp;6.14.27.Create logout method in header component.ts\
&emsp;&emsp;&emsp;&emsp;6.14.28.Add logout method to logout link (a tag) add *ngIf="isAuth" to that li tag\
&emsp;&emsp;6.15.Make Components for Login Page\
&emsp;&emsp;&emsp;&emsp;6.15.1.Create input-container component(partials folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.1.1.Add label and bgColor @input to input-container component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.1.2.Change selector from app-input-container to input-container\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.1.3.Make Html page (use ng-content tag)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.1.4.Add input-container component to login-page component html\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.1.5.Add input tag and error list(div) inside input-container tag\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.1.6.Add CSS\
&emsp;&emsp;&emsp;&emsp;6.15.2.Create input-validation component(partials folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.1.Change selector from 'app-input-validation to input-validation\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.2.Add constant VALID_MSG:any={} for required and email(under imports)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.3.Add control(type AbstractControl) and showErrorWhen(boolean) @Input\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.4.Add errorMessages array\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.5.Create checkValidation():void method , use .map() to show errors\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.6.Add OnChanges interface and check validation(this.checkValidation())\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.7.Check validation on status or value changes(use subscribe in OnInit)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.7.Show error message in input-validation html (use ngIf and ngFor)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.7.Add input-validation tag in login-page html (above input-container)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.2.7.Add CSS\
&emsp;&emsp;&emsp;&emsp;6.15.3.Create text-input component(partials folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.3.1.Change selector from 'app-text-input to 'text-input\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.3.2.Add control!:AbstractControl,showErrorWhen,label,type @Input\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.3.3.Add get formControl method that returns this.control as FormControl\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.3.4.Add input-container tag from login-page to text-input component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.3.5.Add text-input tag to login-page html (email and password inputs)\
&emsp;&emsp;&emsp;&emsp;6.15.4.Create default-button component(partials folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.4.1.Change selector from 'app-default-button' to 'default-button'\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.4.2.Add type,text,bgColor,color,fontSizeRem @Input\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.4.3.Add onClick = new EventEmitter() @Output\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.4.4.Add HMTL (use ngStyle for styles)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.4.5.Add default-button tag to login-page component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.15.4.6.Add CSS\
&emsp;&emsp;6.16.Connect Login API to MongoDB Atlas\
&emsp;&emsp;&emsp;&emsp;6.16.1.Move APIs into routers\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.1.Create routers folder(src folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.2.Create book.routers.ts in routers folder and put all book apis in it\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.3.Move all app.get() methods from server.ts to book.routers(book ones)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.4.Create router instance and replace app.get with router.get\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.5.Remove the "/api/book" part from every router.get()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.6.Add book.router to server.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.7.Create user.router.ts folder(routers folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.8.Put login api and token response methods from server to user.router\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.8.Create router instance and replave app.get with router.get\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.8.Import jwt from 'jsonwebtoken'\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.1.5.Remove the "/api/users" part from router.get()\
&emsp;&emsp;&emsp;&emsp;6.16.2.Create MongoDB Atlas account ,Deploy Database and connect to it\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.1.Create .env file (src folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.2.Install packages\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.2.1.Install mongoose\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.2.2.Install dotenv\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.2.3.Install bcryptjs\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.2.4.Install express-async-handler\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.3.Import dotenv to server and call dotenv.config()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.4.Create config folder(in src) and a database.config.ts file\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.5.Import connect and connectOptions from mongoose to database.config\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.6.Create dbConnect function(export const) and use it inside server.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.7.Create models folder ,book.models and user.models file (src folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.7.1.Created Book interface , FoodSchema and Book model\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.7.2.Created User interface , USerSchema and user model\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.8.Seed the models into database\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.8.1.Import asyncHandler(express) to book and user router\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.8.2.Use asyncHandler in router.get()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.8.4.Check count in asyncHandler(use await,.countDocuments)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.8.5.Use .create() to create model at the end of async\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.9.Use the database instead of data.ts file in code\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.10.Get foods data from database instead of data.ts file(book.router)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.10.1.Change router.get(/) use asyncHandler and use .find()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.10.2.Change router.get(search),use asyncH ,RegExp, .find()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.10.3.Change router.get(tags),use asyncH,aggregate(),sort()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.10.4.Change router.get(tag),use asyncH,.find()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.10.5.Change router.get(foodId),use asyncH,.findById()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.11.Get users data from database instead of data.ts file(user.router)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.16.2.11.1.Change router.get(login),use asyncH,.findOne()\
&emsp;&emsp;&emsp;&emsp;6.16.3.Create constants folder and a http_status.ts file for http requests(backend src)\
&emsp;&emsp;6.17.Create Register Page\
&emsp;&emsp;&emsp;&emsp;6.17.1.Add register api method(user.router)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.1.1.For password encryption use bcryptjs module\
&emsp;&emsp;&emsp;&emsp;6.17.2.Create IuserRegister interface (shared folder)\
&emsp;&emsp;&emsp;&emsp;6.17.3.Add USER_REGISTER_URL to urls (constants folder)\
&emsp;&emsp;&emsp;&emsp;6.17.4.Add register method of type Observable < User >(user.service)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.4.1.Use .pipe() and tap() to set user to localStorage and show messages\
&emsp;&emsp;&emsp;&emsp;6.17.5.Create Register Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.1.Add Register component to routes (app-routing)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.2.Add registerForm:FormGroup,isSubmited=false,returnUrl(register-page)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.3.Add private formBuilder,userService,activatedRoute,router(construct)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.4.Use formBuilder.group in ngOnInit method(use Validators to check it)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.5.Create validators folder and password_match_validator(shared folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.6.Add const validator=(form:AbstractControl) method and return it\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.7.Use passwordMatchValidator in on ngOnInit method(register-page)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.8.Create get fc() and submit() methods\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.9.Create Register HTML page\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.10.Add register link to login-page\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.11.Add CSS to register-page\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.17.5.12.Add minLength and notMatch validator messages(input-validation.ts)\
&emsp;&emsp;6.18.Create Loading Page\
&emsp;&emsp;&emsp;&emsp;6.18.1.Add Loading image\
&emsp;&emsp;&emsp;&emsp;6.18.2.Create Loading Service\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.2.1.Add isLoadingSubject private to service(Behaviorsubject < boolean >)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.2.2.Add showLoading and hideLoading methods\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.2.3.Add get Loading method (return as type .asObservable())\
&emsp;&emsp;&emsp;&emsp;6.18.3.Create Loading Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.3.1.Add isLoading variable and add Loading service to constructor\
&emsp;&emsp;&emsp;&emsp;6.18.4.Add HTML\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.4.1.Add app-loading to app.component.html (on top)\
&emsp;&emsp;&emsp;&emsp;6.18.5.Add CSS\
&emsp;&emsp;&emsp;&emsp;6.18.6.Add Loading Interceptor(shared folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.1.Add HTTP_INTERCEPTORS in app.module after HTTPCientModule(same line)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.2.Add HTTP_INTERCEPTORS in providers\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.2.1.Add provide:H_I,useClass:LoadingInterceptor,multi:true\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.3.Add var pendingRequests=0 to loading interceptor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.4.Add loadingService to constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.5.Call showLoading() in intercept() and increase pendingRequest by one\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.6.Create handleHideLoading() method to hide the loading if no requests\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.18.6.7.Use .pipe() and tap() for next.handle(request) method\
&emsp;&emsp;6.19.Create Checkout Page\
&emsp;&emsp;&emsp;&emsp;6.19.1.Create Order Model\
&emsp;&emsp;&emsp;&emsp;6.19.2.Create Order Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.1.Add component to routing(app-routing)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.2.Add order:Order and checkoutForm!:FormGroup in checkout.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.3.Add cartService,private formBuilder,userService,and toastrService\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.4.Get name,address from currentUser, use formBuilder.group(ngOnInit)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.5.Create createOrder method\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.6.Add HTML\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.2.7.Add CSS\
&emsp;&emsp;&emsp;&emsp;6.19.3.Create order-items-list Component(partials folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.3.1.Chance selector to order-items-list\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.3.2.Add order!:Orders as @Input on order-items-list.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.3.3.Add table to order-items-list html (use *ngFor)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.3.4.Add order-items-list [order]="order" tag under form tag in checkout-page\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.3.5.Add CSS\
&emsp;&emsp;&emsp;&emsp;6.19.4.Create Save Order\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.Create Order Model\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.1.Import model,Schema and Types from mongoose\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.2.Export interface LatLng{lat,lng}\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.3.Export const LatLngSchema\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.4.Export interface OrderItem{book,price,quantity}\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.5.Export const OrderItemSchema\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.Add Order Model from frontend(shared/models) to backend\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.1.Change class to interface and remove !'s\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.2.Change CartItem[] to OrderItem[]\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.3.Change createdAt type to Date\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.4.Add updatedAt:Date\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.5.Add user:Types.ObjectId\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.6.6.Change status type to OrderStatus\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.7.Add const OrderSchema\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.1.8.Export const OrderModel = model ('order' , orderSchema)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.2.Create order_status.ts file in constants folder\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.2.1.Export enum OrderStatus{NEW,PAYED,SHIPPED,CANCELED,REFUNDED}\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.3.Create order.router file (routers folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.3.1.Create order API\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.3.2.Import Router and asyncHandler\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.3.3.Create post request and use deleteOne to replace NEW  order\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.Create middleware folder and auth.mid.ts (to check auth of user)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.1.Export default(req:any,res:any,next:any) function\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.2.Add const token=req.headers.access_token as string;\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.3.If !token return res.status(HTTP_UNAUTHORIZED).send()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.4.Add export const HTTP_UNAUTHORIZED=401 in http_status.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.5.Use try catch class\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.6.Inside try add const decodedUser=verify(token,process.env.)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.7.Add id to jwt.sign at generateTokenResponse()(user.router)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.8.Return next() after try catch class\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.4.9.Add auth middleware to order.router (router.use(auth))\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.5.Save newOrder and send it to the client(at the end of router.post)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.5.1.Use await newOrder.save() and res.send(newOrder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.5.2.Export order router\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.5.3.Connect order.router to server.ts\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.6.Add ORDERS_URL,ORDER_CREATE_URL to urls.ts in frontend(constants folder)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.Create Order Service\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.1.Add HttpClient in constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.2.Make create(order:Order) function\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.3.Add an auth interceptor and put it in auth folder\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.4.Add UserService to constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.5.Get current user and if(user.token) request=request.clone()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.6.Add interceptor to app.module providers\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.7.Connect order service to createOrder() in checkout-page\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.8.Add validation for order address\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.9.Add OrderService and Router in checkout-page constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.4.7.10.Call create() function and subscribe to it\
&emsp;&emsp;&emsp;&emsp;6.19.5.Create Order Page\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.1.Create Order Component\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.2.Add Component to app-routing\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.3.Get new saved order from the current user, user router.get (order router)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.4.Add ORDER_NEW_FOR_CURRENT_USER_URL in urls.ts file\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.5.Add getNewOrderForCurrentUser():Observable< Order > method(order.service)\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.6.Add OrderService and Router to order-page constructor\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.7.Subscribe to orderService.getNewOrderForCurrentUser()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.8.Add HTML\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.9.Make readonly input for the map\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.10.Create get addressLatLng\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.11.Change OnInit with OnChanges\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.12.Create showLocationOnReadOnlyMode() method\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.13.If (readonly and addressLatLng) then call showLocationOnReadOnlyMode()\
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;6.19.5.13.Add readonly=true to map tag in order-page html\






