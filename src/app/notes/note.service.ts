import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notes = [];

  constructor() { 
    this.notes.push({title:'defualt note', description:'this is a defualt note for test'});
  }

  public addNote(note){
    this.notes.push(note);
    console.log('added new note',this.notes);
  }
}
