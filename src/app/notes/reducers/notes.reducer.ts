import { NotesActions, NotesActionTypes } from '../actions/notes.actions';
import { Note } from '../models/note';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from '../../lib/router/router-state-url';
import { RouterState } from '../../lib/router/router-state';

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

const notesFeature = createFeatureSelector<State>('notes');
const routerState = createFeatureSelector<RouterState>('router');

export const all = createSelector(notesFeature, state =>
  Object.keys(state.all).map(guid => state.all[guid])
);

export const currentDetails = createSelector(
  notesFeature,
  routerState,
  (notes, router) => notes.all[router.state.params.guid]
);
