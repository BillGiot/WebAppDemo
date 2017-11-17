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
        buttons.push(new Button("bushesoflove", "sound", "assets/audio/bushesoflove.wav")); 
        buttons.push(new Button("kyle's mom", "sound", "assets/audio/kylesmom.mp3")); 
        buttons.push(new Button("doh", "sound", "assets/audio/doh.mp3")); 
        buttons.push(new Button("Ha GAY", "sound", "assets/audio/Ha GAY.mp3")); 
        buttons.push(new Button("Le Bron James", "sound", "assets/audio/lebronjames.mp3")); 
        buttons.push(new Button("The ting go skrrra pap pap ka ka ka", "sound", "assets/audio/skrrra.mp3")); 
        buttons.push(new Button("Rampage!", "sound", "assets/audio/rampage.mp3")); 
        buttons.push(new Button("Dramatic Squirrel", "sound", "assets/audio/dramaticSquirrel.mp3")); 
        buttons.push(new Button("Goat Yelling", "sound", "assets/audio/goatYelling.wav")); 
        buttons.push(new Button("Buurman wat doet u nu?", "sound", "assets/audio/buurman.wav")); 
        
        return buttons; 
    }


    
    
    }