import {Component, OnInit,HostBinding} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']  
})
export class ArticleComponent implements OnInit {
  votes : number;
  title : string;
  link : string;
  @HostBinding('class') class = 'red';
  constructor() {

    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {}

}
