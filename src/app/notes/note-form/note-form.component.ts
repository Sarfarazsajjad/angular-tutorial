import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  notesForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  saveNote(){
    console.log('Save Note', this.notesForm.value)
    this.noteService.addNote(this.notesForm.value);
  }

}
