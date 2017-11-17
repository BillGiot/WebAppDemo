import { Component, OnInit, Input } from '@angular/core';
import {Button} from '../models/Button'
@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
@Input() button:Button; 
playing:boolean= false; 
audiofile:any; 

  constructor() { 
  }

  ngOnInit() {
  }

  clicked(){
   this.playAudio();
  }

  playAudio(){
    if(this.audiofile === null || this.audiofile === undefined){
      this.audiofile = new Audio(); 
      this.audiofile.src = this.button.link; 
let audio = new Audio(); 

    }
    if(this.playing == false){
   
      this.audiofile.load();
      this.audiofile.play();
      this.playing = true; 
    }else if(this.audiofile.ended){ 
      this.audiofile.load();
      this.audiofile.play();
      this.playing = true; 
    }else {
      console.log("yolo"); 
      this.audiofile.pause(); 
      this.playing = false; 
    }
  }

}
