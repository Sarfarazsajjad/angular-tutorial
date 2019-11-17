import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.notes;
  }
  deleteNote(note){
    this.noteService.removeNote(note);
  }
}
