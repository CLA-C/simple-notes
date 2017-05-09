import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { NotesService } from '../shared/notes.service';
import { Note } from '../shared/models/note';

/**
 * This component handles the edit for a single Notes
 */

@Component({
  selector: 'single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {

  public note: Note;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
    
  ) {}

  ngOnInit() {
    //get id from route
    let id = this.route.snapshot.params.id

    //get note from service
    this.note = this.notesService.getNote(id)
  }

  saveNote() {
    let savedNote = this.notesService.update(this.note)

    //refresh note just to be sure
    this.note = savedNote
    //go to main list
    this.router.navigate([''])
  }

  //ignore changes not saved and go to list
  goToList() {
    this.router.navigate([''])
  }

}