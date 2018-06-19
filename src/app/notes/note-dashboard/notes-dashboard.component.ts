import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CreateNote, LoadAllNotes } from '../actions/notes.actions';
import { Note } from '../models/note';
import * as fromNotes from '../reducers';

@Component({
  selector: 'nt-notes-dashboard',
  template: `
    <nt-note-creator (create)="dispatchNewNote($event)"></nt-note-creator>
    <nt-note-card
      [note]="note"
      *ngFor="let note of notes$ | async">
      <a
        mat-button
        [routerLink]="['note', note.guid]">
        DETAILS
      </a>
    </nt-note-card>
  `,
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private store: Store<fromNotes.NotesState>) {
    this.notes$ = this.store.pipe(select(fromNotes.all));
  }

  dispatchNewNote(note: Note) {
    this.store.dispatch(new CreateNote(note));
  }
}
