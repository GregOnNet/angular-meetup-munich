import { createEntityAdapter } from '@ngrx/entity';

import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Note } from '../models/note';
import { State } from './notes.slice';

const notes = createEntityAdapter<Note>({
  selectId: note => note.guid
});

export const {
  selectAll: all,
  selectEntities: entities,
  selectIds: guids,
  selectTotal: total
} = notes.getSelectors();

export function reducer(
  state = notes.getInitialState(),
  action: NotesActions
): State {
  switch (action.type) {
    case NotesActionTypes.LoadNotes:
      return state;

    case NotesActionTypes.CreateNote:
      return notes.addOne(action.payload, state);
    default:
      return state;
  }
}
