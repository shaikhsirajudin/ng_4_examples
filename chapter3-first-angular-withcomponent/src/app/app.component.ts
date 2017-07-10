import { Component } from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {ArticleComponent} from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean
  {
    console.log(`Adding article title: ${title.value} and value: ${link.value}`)
return false;
  }
}
