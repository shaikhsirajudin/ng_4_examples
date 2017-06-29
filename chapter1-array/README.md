# Chapter1Array

#    1. create new empty project
```
ng new chapter1-array
```
#    2. Create component user-list
```
ng generate component user-list
```
#   3. delcare the array inside the user-list component
```
export class UserListComponent implements OnInit {

names :string[];
  constructor() { 
   this.names=['siraj','taqui','shafiq','abba']
  }

  ngOnInit() {
  }

}
```
The template with one ul and one li with a new *ngFor="let name of names" attribute. The * character and let syntax can be a little overwhelming at first, so let’s break it down: The *ngFor syntax says we want to use the NgFor directive on this attribute. You can think of NgFor akin to a for loop; the idea is that we’re creating a new DOM element for every item in a collection. The value states: "let name of names". names is our array of names as specified on the HelloWorld
object. let name is called a reference. When we say "let name of names" we’re saying loop over each element in names and assign each one to a local variable called name.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

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


