import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadAllNotes } from './actions/notes.actions';
import * as fromNotes from './reducers';

@Component({
  selector: 'nt-notes',
  template: `
    <router-outlet></router-outlet>
  `
})
export class NotesComponent implements OnInit {
  constructor(private store: Store<fromNotes.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadAllNotes());
  }
}
