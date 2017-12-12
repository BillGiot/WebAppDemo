import {Button} from "./Button"

export class DataInitializer{
    
    constructor(){
   
    }

     makeButtonPerson():Array<Button> {
        let buttons:Array<Button> = new Array<Button>();  
        buttons.push(new Button("truckhorn", "sound", "assets/audio/truckhorn.mp3")); 
        buttons.push(new Button("airhorn", "sound", "assets/audio/airhorn.mp3"));                 
        buttons.push(new Button("doh", "sound", "assets/audio/doh.mp3")); 
        
        return buttons; 
    }


    
    
    }