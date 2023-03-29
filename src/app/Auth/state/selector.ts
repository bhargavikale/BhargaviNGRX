import {  createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from "./state";

const getAuthState = createFeatureSelector<AuthState>('Auth');
