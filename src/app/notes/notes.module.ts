import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import * as fromNotes from './reducers/notes.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule,

    SharedModule,
    NotesRoutingModule,
    StoreModule.forFeature('notes', fromNotes.reducer)
  ],
  declarations: [NotesComponent, NoteCardComponent, NoteCreatorComponent]
})
export class NotesModule {}
