import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes:Note[] = [];
  @Input() isDisplayGrid:boolean = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notes = this.noteService.getNotes();
  }

  saveNote(content:string , index:number){
    const date = new Date();
    const dmy = date.toLocaleString().split(',')[0]
    const hour = `0${date.getHours()}`.slice(-2).toString();
    const minute =  `0${date.getMinutes()}`.slice(-2).toString();

    const newNote = {content: content.trim(), disable: true, dmy, hour, minute}
    this.noteService.saveNote(newNote, index)
  }

  editNote(index:number){
    this.noteService.editNote(index)
  }

  removeNote(index:number){
    const isRight = confirm('Bạn có muốn xóa hemmmm !!!')
    if(!isRight)return
    this.noteService.removeNote(index)
  }
}
