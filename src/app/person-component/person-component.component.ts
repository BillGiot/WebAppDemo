import { Component, OnInit, Input } from '@angular/core';
import{Person} from "../models/Person"
import{Button} from "../models/Button"
@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css']
})
export class PersonComponentComponent implements OnInit {
@Input() person:Person; 
@Input() buttons:Array<Button>; 

constructor() { 

}

  ngOnInit() {
  }

getButtons(){
return this.buttons; 

}

}
