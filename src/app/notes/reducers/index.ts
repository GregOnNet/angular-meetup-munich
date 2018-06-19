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

export const all = createSelector(getNoteCollection, fromNotes.all);

export const currentDetails = createSelector(
  getNoteCollection,
  routerState,
  (notes, router) => notes.entities[router.state.params.guid]
);
