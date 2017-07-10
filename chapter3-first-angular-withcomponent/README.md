# Create a new component to represent the individual submitted articles.

1)  let’s use the ng tool to generate a new component
```
>ng g component article
```
# We have three parts to defining this new component:
1. Define the ArticleComponent view in the template
```
<div class="four wide column center aligned votes">
  <div class="ui statistic">
    <div class="value">
      {{ votes }}
    </div>
    <div class="label">
      Points
    </div>
  </div>
</div>
<div class="twelve wide column">
  <a class="ui large header" href="{{ link }}">
{{ title }}
</a>
  <ul class="ui big horizontal list voters">
    16
    <li class="item">
      <a href (click)="voteUp()">
<i class="arrow up icon"></i>
upvote
</a>
    </li>
    <li class="item">
      <a href (click)="voteDown()">
<i class="arrow down icon"></i>
downvote
</a>
    </li>
  </ul>
</div>
```
2. Define the ArticleComponent properties by annotating the class with @Component
```
@Component({
  selector: 'app-article', 
  templateUrl: './article.component.html', 
  styleUrls: ['./article.component.css']
})
```
3. Define a component-definition class (ArticleComponent) which houses our component logic
```
export class ArticleComponent implements OnInit {
  votes : number;
  title : string;
  link : string;
  constructor() {

    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }
  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  ngOnInit() {}

}

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


