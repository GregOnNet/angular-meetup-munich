import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreateNote } from './actions/notes.actions';
import { Note } from './models/note';
import * as fromNotes from './reducers/notes.reducer';

@Component({
  selector: 'nt-notes',
  template: `
    <nt-note-creator (create)="dispatchNewNote($event)"></nt-note-creator>
    <nt-note-card></nt-note-card>
  `,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  constructor(private store: Store<fromNotes.State>) {}

  dispatchNewNote(note: Note) {
    this.store.dispatch(new CreateNote(note));
  }
}
