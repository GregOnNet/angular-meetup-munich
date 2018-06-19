import { Component } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Note } from '../models/note';
import * as fromNotes from '../reducers/notes.reducer';

@Component({
  selector: 'nt-note-details',
  template: `
    <section class="heading">
      <h1 class="mat-h1">Details</h1>
    </section>
    <nt-note-card [note]="note$ | async"></nt-note-card>
  `,
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
  note$: Observable<Note>;

  constructor(private store: State<fromNotes.State>) {
    this.note$ = this.store.pipe(select(fromNotes.currentDetails));
  }
}
