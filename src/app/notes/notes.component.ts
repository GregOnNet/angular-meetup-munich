import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CreateNote } from './actions/notes.actions';
import { Note } from './models/note';
import * as fromNotes from './reducers/notes.reducer';

@Component({
  selector: 'nt-notes',
  template: `
    <router-outlet></router-outlet>
  `
})
export class NotesComponent {}
