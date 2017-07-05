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
