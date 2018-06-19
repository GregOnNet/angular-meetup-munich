import { Action } from '@ngrx/store';

import { Note } from '../models/note';

export enum NotesActionTypes {
  LoadNotes = '[Notes] Load Notes',
  CreateNote = '[Notes] Create new Note'
}

export class LoadNotes implements Action {
  readonly type = NotesActionTypes.LoadNotes;
}

export class CreateNote implements Action {
  readonly type = NotesActionTypes.CreateNote;

  constructor(public payload: Note) {}
}

export type NotesActions = LoadNotes | CreateNote;
