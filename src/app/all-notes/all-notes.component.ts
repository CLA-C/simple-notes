import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotesService } from '../shared/notes.service';
import { Note } from '../shared/models/note';

@Component({
  selector: 'all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  public notesList: Note[]


  constructor(
    private router: Router,
    private notesService: NotesService,
    
  ) {}

  ngOnInit() {
    //get notes from service
    this.notesList = this.notesService.list()
  }

  goToEdit(noteId: string) {
    //go to edit page
    this.router.navigate(['edit', noteId])
  }

  createNewNote() {
    //create new note
    let newNote = this.notesService.insert()
    //go to edit
    this.router.navigate(['edit', newNote.id])
  }

  deleteNote(noteId: string) {
    //return list after deleting
    let list = this.notesService.delete(noteId)

    //refresh list
    this.notesList = list
  }

}

