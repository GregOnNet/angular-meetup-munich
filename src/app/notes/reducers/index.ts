import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { RouterState } from '../../lib/router/router-state';
import * as fromRoot from '../../reducers';
import * as fromNotes from './notes.reducer';

export interface NotesState {
  collection: fromNotes.State;
}

export interface State extends fromRoot.State {
  notes: NotesState;
}

export const reducers: ActionReducerMap<NotesState> = {
  collection: fromNotes.reducer
};

const getNotes = createFeatureSelector<NotesState>('notes');
const routerState = createFeatureSelector<RouterState>('router');

const getNoteCollection = createSelector(getNotes, notes => notes.collection);

export const all = createSelector(getNoteCollection, n => {
  console.log(n);
  return fromNotes.all(n);
});

export const currentDetails = createSelector(
  getNotes,
  routerState,
  (notes, router) => {
    console.log(notes);
    return notes.collection.entities[router.state.params.guid];
  }
);
