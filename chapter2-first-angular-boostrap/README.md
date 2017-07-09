# Parent child component behavior
# Passing value to the child component
Angular provides a way to pass data into the child component by using the @Input annotation.

# In child component we need to and capability to accept the input like below

```
import { Component, OnInit ,
  Input //Add this to get input from parent component
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

@Input() name:string; // Add this to inherite the from the parent
  constructor() { }

  ngOnInit() {
  }

}
```
# Pass an Input to child from parent
Passing an Input values to a component we use the bracket [] syntax in our template - let’s take a look at
our updated template:
```
<ul>
  <app-user-item 
  *ngFor="let name of names" [name]="name">
  </app-user-item>
</ul>
```
Notice that we’ve added a new attribute on our app-user-item tag: [name]="name" – in Angular
when we add an attribute in brackets like [foo] we’re saying we want to pass a value to the input
named foo on that component.

# Commonly used styling framework.
According to current web requirement and standard practices, a good website needs following thingies…
1.Need a flat design or near flat design
2.Should have near material design and UX
3.Should follow new specifications (ES6, Flexbox)
4.Must have angular.js support
5.Must be able to customize theme, color pallet etc. very easily
6.Should be responsive or adaptable to various screen sizes and devices
7.Should give app like experience in mobile and tab
8.Should be able to export to a hybrid app (No external dependencies)
9.Must be stable and have all components needed for web, mobile and 
•Open-sourced full (HTML, CSS, and JavaScript) front-end framework
•CSS preprocessor: Sass (support for the Less preprocessor ended with Bootstrap 3)
•12-column grid system
•“Mobile-first” responsive design
•Optional Flexible Box (or, flexbox) support, a CSS3 mode that arranges elements on a page dynamically so they stack or expand when viewed on different screen sizes
•ES6 JavaScript components and plugins
•Support for IE9+ (support for IE8 ended with Bootstrap 3)
•Pre-styled, ready-to-use UI components





1) Semantic-UI (http://semantic-ui.com/)

It’s stable and provides very good API to almost all components. It is so perfect that you won’t even need to write your own css. This is well documented and did better job at this than any framework ever lived.

Upsides
1.Almost no need to write your own css
2.Tons of components with API.
3.Flexbox grid support.
4.Well documented.

Downsides
1.No angular support
2.No material design support

Bootstrap aren’t as strong as Semantic UI’s, Bootstrap doesn’t require JS skills. On the other hand, Semantic UI looks more modern, but you definitely need to know JS. If you’re a junior front-end developer, you’ll like Bootstrap; if you’re an advanced developer, you’ll most likely prefer Semantic UI.

•Very well documented
•Seems to be easier to learn/use
•Has a Grid layout
•Uses LESS, now has SASS port
•A very nice implementation of buttons, modals, & progress bars
•Uses an Icon font for many of it's features
•Has some very useful extras such as the inverted class
•Open to community contribution
Easy to use and looks elegant 
Variety of components
Themes
Has out-of-the-box widgets i would actually use 
Semantic, duh 
Its the future
Open source
Very active development 
Gulp
Far less complicated structure 




some of the cons

•No image slider
•No thumbnail classes
•No visibility classes


2) Zurb Foundation (http://foundation.zurb.com)
Foundation began as an internal style guide built by the ZURB design agency whose clients include Facebook, eBay, and the NYSE. Foundation’s goal is to provide you the foundation upon which you’ll design your website.
As of Bootstrap 4, both Bootstrap and Foundation are firmly invested into the Sass camp (support for Less ended with Bootstrap 3).

Foundation’s minimalist approach to its pre-built UI components gives designers more room to create their own unique designs. There are also more built-in features that assist in customizability such as the grid system, which we’ll cover in-depth later in this article.

Foundation 6 offer excellent browser support for the latest versions of all the major browsers, both desktop and mobile (where applicable): Chrome, Firefox, Safari, Opera, Internet Explorer (IE), and Microsoft Edge. However, if you require support for IE8, you can use any of the stable releases of Foundation support this older browser.

 Foundation was the first of the two frameworks to go for the “mobile-first” approach, pioneering responsive design and a fully fleshed out grid system.

Responsive grid
Mobile first
Open source
Semantic
Customizable
Quick to prototype
Simple ui 
Fast 
Best practices
Easy setup 

3) Twitter Bootstrap (http://getbootstrap.com)
bootstrap 3 changed the way we look at mobile now. Everyone is obsessed with mobile first philosophy.
But as the saying goes, nobody is perfect, twitter bootstrap is really doesn’t solve the problems and needs of today’s demand.

As of Bootstrap 4, both Bootstrap and Foundation are firmly invested into the Sass camp (support for Less ended with Bootstrap 3).
Bootstrap’s components by contrast are more polished out of the box because the framework’s goal is to get you up and running as quickly as possible. The downside to this is that you may find yourself fighting the pre-existing design more often if you’re trying to create a more unique look and feel.

Bootstrap 4 offer excellent browser support for the latest versions of all the major browsers, both desktop and mobile (where applicable): Chrome, Firefox, Safari, Opera, Internet Explorer (IE), and Microsoft Edge. However, if you require support for IE8, you’ll have to settle for Bootstrap v3.3.6


UI components 
Consistent
Great docs 
Flexible
HTML, CSS, and JS framework 
Open source
Customizable 
Widely used
HTML framework

Downsides
1.I personally feel the UI is not even close to what I can call usable for a good website. You need to manually customize most of the things according to your specification.
2.Flexbox grid is missing in current stable version. Flexbox a way better approach to responsive and adaptive layout than traditionally block or table approach.
3.No material design support.

Upsides
1.It has full angular support.
2.Strong community.
3.Very stable.
4.Bootstrap 4 is coming with all missing links.

# How can we attach the events to controls?
In angular we can attach to the events by surrounding the event name in parenthesis (). For instance, to add a function call to the 'button' onClick event, we can pass it through like so:
```
<button (click)="addArticle()" class="ui positive right floated button">
 Submit link
</button>
```
It will call a function called addArticle(), which we defined on the AppComponent class.
```
export class AppComponent {
addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
console.log(`Adding article title: ${title.value} and link: ${link.value}`);
return false;
 }
 }
```
the addArticle() function can accept two arguments: the title and the link arguments. We need to change our template button to pass those into the call to the addArticle(). We do this by populating a template variable by adding a special syntax to the input elements on our form.

```
<form class="ui large form segment">
  <h3 class="ui header">Add a Link</h3>

  <div class="field">
    <label for="title">Title:</label>
    <input name="title" #newtitle>
    <!-- changed -->
  </div>
  <div class="field">
    <label for="link">Link:</label>
    <input name="link" #newlink>
    <!-- changed -->
  </div>

  <!-- added this button -->
  <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
Submit link
</button> </form>

```

# How can we assigned html element/input controls values local variables/Binding inputs to values /What is resolve?
the # (hash) to tell Angular to assign those tags to a local variable. By adding the #title and #link to the appropriate 'input' elements, we can pass them as variables into
```
<input name="title" #newtitle>
```
This markup tells Angular to bind this 'input' to the variable newtitle. The #newtitle syntax is called a resolve.

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


