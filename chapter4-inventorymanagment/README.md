# Create a new component to represent the individual submitted articles.
Right now we only have one article on the page and there’s no way to render more, unless we paste
another 'app-article' tag.
# Rendering Multiple Rows.
To do this, let’s create a data structure that represents a single article. this is a plain class and not an Angular component. In the Model-View-Controller pattern this would be the Model.

```
export class Article {
    title : string;
    link : string;
    votes : number;
    constructor(title : string, link : string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() : boolean {
        this.votes += 1;
        return false;
    }

    voteDown() : boolean {
        this.votes -= 1;
        return false;
    }
    domain() : string {

        try {
            const link : string = this
                .link
                .split('//')[1];
            return link.split('/')[0];
        } catch (error) {
            return null;
        }
    }
}

```

# Why do we have a voteUp function in both the model and the component?
The reason we have a voteUp() and a voteDown() on both classes is because each function does a slightly different thing. The idea is that the voteUp() on the ArticleComponent relates to the component view, whereas the Article model voteUp() defines what mutations happen in the model. That is, it allows the Article class to encapsulate what functionality should happen to a model when voting happens. In a “real” app, the internals of the Article model would probably be more complicated, e.g. make an API request to a webserver, and you wouldn’t want to have that sort of model-specific code in your component controller.

# Configuring the ArticleComponent with inputs
e.g
```
<app-article [article]="article1"></app-article>

<app-article [article]="article2"></app-article>

```
Angular allows us to do this by using the Input annotation on a property of a Component:
```
 class ArticleComponent {
@Input() article: Article;
....
.....
```
# Rendering a List of Articles
Now let’s configure AppComponent to render all the articles. To do so, instead of having the 'app-article' tag alone, we are going to use the NgFor directive to iterate over the list of articles and render a app-article for each one:

```
<!-- start adding here -->
<div class="ui grid posts">
<app-article
*ngFor="let article of articles"
[article]="article">
</app-article>
 </div>
<!-- end adding here -->

```
The *ngFor="let article of articles" syntax will iterate through the list of articles and create the local variable article (for each item in the list). To specify the article input on a component, we are using the [inputName]="inputValue" expression. In this case, we’re saying that we want to set the article input to the value of the local variable article set by ngFor.

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


