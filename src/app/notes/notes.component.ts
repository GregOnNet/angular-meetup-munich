import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CreateNote } from './actions/notes.actions';
import { Note } from './models/note';
import * as fromNotes from './reducers/notes.reducer';

@Component({
  selector: 'nt-notes',
  template: `
    <nt-note-creator (create)="dispatchNewNote($event)"></nt-note-creator>
    <nt-note-card
      [note]="note"
      *ngFor="let note of notes$ | async">
    </nt-note-card>
  `,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes$: Observable<Note[]>;

  constructor(private store: Store<fromNotes.State>) {
    this.notes$ = this.store.pipe(select(fromNotes.all));
  }

  dispatchNewNote(note: Note) {
    this.store.dispatch(new CreateNote(note));
  }
}
