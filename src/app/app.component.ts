import { Component } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '';
  id:number = 0 ;
  isDisplayGrid:boolean = false;

  constructor(private noteService : NoteService){}

  randomColor(){
    let colorRand = {};
    let colors = [
        {bgColor: '#ffdde5' , tagColor: '#ff577f' },
        {bgColor: '#fff1d3' , tagColor: '#e27802' },
        {bgColor: '#dde2fa' , tagColor: '#546de5' },
    ]
    let index = Math.floor(Math.random() * colors.length);
    return colorRand = colors[index];
  }

  createNote(tag:string){
    const {bgColor, tagColor} = this.randomColor();
    const date = new Date();
    const dmy = date.toLocaleString().split(',')[0]
    const hour = `0${date.getHours()}`.slice(-2).toString();
    const minute =  `0${date.getMinutes()}`.slice(-2).toString();
    this.id += 1;
    if(this.title.trim() === '')return
    this.noteService.createNote({
      id: this.id,
      title: this.title,
      tag,
      content: '',
      disable: false,
      dmy,
      hour,
      minute,
      bgColor,
      tagColor,
    })
      this.title = '';
  }
}
