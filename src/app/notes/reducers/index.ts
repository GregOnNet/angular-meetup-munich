import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RouterState } from '../../lib/router/router-state';
import { State } from './notes.slice';

import * as fromNotes from './notes.reducer';

const notesFeature = createFeatureSelector<State>('notes');
const routerState = createFeatureSelector<RouterState>('router');

export { State } from './notes.slice';

export const all = createSelector(notesFeature, fromNotes.all);

export const currentDetails = createSelector(
  notesFeature,
  routerState,
  (notes, router) => notes.entities[router.state.params.guid]
);
