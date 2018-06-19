import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { RouterState } from '../lib/router/router-state';

export interface State {
  router: RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer as any
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
