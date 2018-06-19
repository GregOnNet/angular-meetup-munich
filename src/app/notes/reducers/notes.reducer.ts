import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Note } from '../models/note';

export interface State {
  all: { [guid: string]: Note };
}

export const initialState: State = {
  all: {}
};

export function reducer(state = initialState, action: NotesActions): State {
  switch (action.type) {
    case NotesActionTypes.LoadNotes:
      return state;

    case NotesActionTypes.CreateNote:
      return {
        ...state,
        all: { ...state.all, [action.payload.guid]: action.payload }
      };

    default:
      return state;
  }
}
