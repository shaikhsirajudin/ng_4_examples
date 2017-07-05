import { Component, OnInit } from '@angular/core';
import { UserItemComponent} from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

names :string[];
  constructor() { 
   this.names=['siraj','taqui','shafiq','abba'];
  }

  ngOnInit() {
  }

}
