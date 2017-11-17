import {Button} from "./Button"

export class DataInitializer{
    
    constructor(){
   
    }

     makeButtonPerson():Array<Button> {
        let buttons:Array<Button> = new Array<Button>();  
        buttons.push(new Button("don't fall asleep", "sound", "assets/audio/dontfallasleep.wav")); 
        buttons.push(new Button("penny thoughts", "sound", "assets/audio/penny.wav")); 
        buttons.push(new Button("treet", "sound", "assets/audio/treet.wav")); 
        buttons.push(new Button("Seagulls", "sound", "assets/audio/song.mp3")); 
        buttons.push(new Button("doit", "sound", "assets/audio/doit.wav")); 
        buttons.push(new Button("shrekislove", "sound", "assets/audio/shrekislove.wav")); 
        buttons.push(new Button("bushesoflove", "sound", "assets/audio/bushesoflove.mp3")); 
        buttons.push(new Button("kyle's mom", "sound", "assets/audio/kylesmom.mp3")); 
        
        return buttons; 
    }


    
    
    }