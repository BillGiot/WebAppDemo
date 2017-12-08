import {Button} from "./Button"

export class DataInitializer{
    
    constructor(){
   
    }

     makeButtonPerson():Array<Button> {
        let buttons:Array<Button> = new Array<Button>();  
        buttons.push(new Button("don't fall asleep", "sound", "assets/audio/dontfallasleep.wav")); 
        buttons.push(new Button("penny thoughts", "sound", "assets/audio/penny.wav")); 
        buttons.push(new Button("doit", "sound", "assets/audio/doit.wav")); 
        buttons.push(new Button("doh", "sound", "assets/audio/doh.mp3")); 
        buttons.push(new Button("Le Bron James", "sound", "assets/audio/lebronjames.mp3")); 
        buttons.push(new Button("The ting go skrrra pap pap ka ka ka", "sound", "assets/audio/skrrra.mp3")); 
        buttons.push(new Button("Dramatic Squirrel", "sound", "assets/audio/dramaticSquirrel.mp3")); 
        buttons.push(new Button("Goat Yelling", "sound", "assets/audio/goatYelling.wav")); 
        
        return buttons; 
    }


    
    
    }