import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Note } from '../models/note';

export interface State {
  notes: { [guid: string]: Note };
}

export const initialState: State = {
  notes: {}
};

export function reducer(state = initialState, action: NotesActions): State {
  switch (action.type) {
    case NotesActionTypes.LoadNotess:
      return state;

    default:
      return state;
  }
}
