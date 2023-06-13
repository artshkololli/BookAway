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
&emsp;&emsp;5.4.Add Search Feature\
