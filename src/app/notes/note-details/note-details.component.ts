import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Note } from '../models/note';
import * as fromNotes from '../reducers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nt-note-details',
  template: `
    <section class="heading">
      <h1 class="mat-h1">Details</h1>
    </section>
    <ng-container *ngIf="note$ | async as note">
      <nt-note-card [note]="note"></nt-note-card>
    </ng-container>
  `,
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
  note$: Observable<Note>;

  constructor(private store: State<fromNotes.NotesState>) {
    this.note$ = this.store.pipe(select(fromNotes.currentDetails));
  }
}
