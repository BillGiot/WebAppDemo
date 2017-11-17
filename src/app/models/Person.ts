import {Button} from "./Button"

export class Person {
name:string; 
email:string; 
age:number; 
buttons:Array<Button>; 




constructor(name:string, email:string, age:number){
this.name=name; 
this.email=email; 
this.age=age; 
this.buttons=new Array<Button>(); 
}

/*makeButtons(){
for(let i=1; i<3;i++){
let iString = i.toString(); 
this.buttons.push(new Button("Name: " + iString, "Sound: " + iString));       
} */ 
}




