import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from '@sicoob/security';


export interface State {
  router: fromRouter.RouterReducerState;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  auth: fromAuth.reducer,
};

export const metaReducers: Array<MetaReducer<any, any>> = [fromAuth.localStorageSyncReducer];
