import {Component} from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {ArticleComponent} from './article/article.component';
import {Article} from './article/article.model';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'app works!';
  articles : Article[];
  constructor() {
    this.articles = [
      new Article('First Application', 'http://firstapplication.com', 1),
      new Article('Second Application', 'http://secondapplication.com', 2),
      new Article('Third Application', 'http://thirdapplication.com', 3)
    ]
  }
  addArticle(title : HTMLInputElement, link : HTMLInputElement) : boolean
  {
    console.log(`Adding article title: ${title.value} and value: ${link.value}`)
    this
      .articles
      .push(new Article(title.value, link.value, 0))
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles():Article[]
  {
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}
