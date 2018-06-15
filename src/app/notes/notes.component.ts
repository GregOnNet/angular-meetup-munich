import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-notes',
  template: `
    <nt-note-card></nt-note-card>
  `,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
