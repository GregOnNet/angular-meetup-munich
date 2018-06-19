import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import * as fromNotes from './reducers/notes.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    NotesRoutingModule,
    StoreModule.forFeature('notes', fromNotes.reducer)
  ],
  declarations: [NotesComponent, NoteCardComponent]
})
export class NotesModule {}
