import { Action } from '@ngrx/store';

export enum NotesActionTypes {
  LoadNotess = '[Notes] Load Notess'
}

export class LoadNotes implements Action {
  readonly type = NotesActionTypes.LoadNotess;
}

export type NotesActions = LoadNotes;
