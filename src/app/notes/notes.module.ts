import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { NoteCardComponent } from './note-card/note-card.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [CommonModule, MatCardModule, NotesRoutingModule],
  declarations: [NotesComponent, NoteCardComponent]
})
export class NotesModule {}
