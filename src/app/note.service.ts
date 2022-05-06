import { Injectable } from '@angular/core';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  notes:Note[] = JSON.parse(localStorage.getItem('notes') || '[]')

  constructor() { }

  saveLocal(){
    const notesHasContent = this.notes.filter(note => note.content !== '')
    localStorage.setItem('notes', JSON.stringify(notesHasContent))
  }

  getNotes(){
    return this.notes;
  }

  createNote(newNote: Note){
    this.notes.push(newNote)
    console.log(this.notes);

    this.saveLocal();
  }

  saveNote(newNote: object, index:number){
    this.notes[index] = {...this.notes[index],...newNote}
    this.saveLocal();
  }

  editNote(index:number){
    this.notes[index] = {...this.notes[index] , disable:false}
    this.saveLocal();
  }

  removeNote(index:number){
    const notesRemove = this.notes;
    notesRemove.splice(index, 1)
    this.notes = notesRemove;
    this.saveLocal();
  }
}
