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


