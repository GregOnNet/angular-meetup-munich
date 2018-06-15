import { Component, Input, OnInit } from '@angular/core';

import { Note } from '../models/note';

@Component({
  selector: 'nt-note-card',
  template: `
    <mat-card>
      <mat-card-title>{{ note.title }}</mat-card-title>
      <mat-card-content>{{ note.text }}</mat-card-content>
    </mat-card>
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
  `,
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note = new Note();

  constructor() {}

  ngOnInit() {}
}
