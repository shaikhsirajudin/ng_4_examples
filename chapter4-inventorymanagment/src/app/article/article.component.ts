import {Component, OnInit, HostBinding,Input} from '@angular/core';
import {Article} from './article.model';

@Component({selector: 'app-article', templateUrl: './article.component.html', styleUrls: ['./article.component.css']})
export class ArticleComponent implements OnInit {
 @Input() article : Article;
  @HostBinding('class')class = 'red';
 constructor() {
    this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  voteUp() {

    return this
      .article
      .voteUp();
  }

  voteDown() {

    return this
      .article
      .voteDown();
  }

  ngOnInit() {}

}
