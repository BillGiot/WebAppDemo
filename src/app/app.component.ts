import { Component } from '@angular/core';
import{Person} from "./models/Person"
import{DataInitializer} from "./models/DataInitializer"
class DemoItem{
location:string; 
price: number; 
imageSrc:string;


}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons:Array<Person>; 

  title:string = 'app'; 

  items: DemoItem[] = [{
  location: "yolo", 
  price: 45,
  imageSrc:"http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-fitzroy_3374108a.jpg"
  }, 
  {
    location: "yolo2", 
    price: 85,
    imageSrc:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg"
    }]; 

    constructor(){

     this.persons = new Array<Person>(); 
     this.makePersons(); 
    }

    makePersons(){
      let person:Person=new Person("sounds", "sounds", 10); 
      let data: DataInitializer = new DataInitializer(); 
      person.buttons = data.makeButtonPerson(); 
      this.persons.push(person);     
     // for(let i=1; i<4;i++){
      //let iString = i.toString(); 
      //let person:Person=new Person("Yolo" + iString, "yolo" + iString + "@gmail.com", 20 + i); 
      //person.makeButtons(); 
     // this.persons.push(person); 
       
   
      }

      
     
    }

