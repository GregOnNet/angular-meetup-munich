import { Component, Input, OnInit } from '@angular/core';

import { Note } from '../models/note';
import { Guid } from '../../shared/lib/guid.service';

@Component({
  selector: 'nt-note-card',
  template: `
    <mat-card>
      <mat-card-title>{{ note.title }}</mat-card-title>
      <mat-card-content>
        {{ note.text }}
        <nt-color-tag
          [color]="note.category.color"
          [text]="note.category.name">
        </nt-color-tag>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note: Note;

  constructor(guid: Guid) {
    this.note = new Note(guid.generate());
  }
}
