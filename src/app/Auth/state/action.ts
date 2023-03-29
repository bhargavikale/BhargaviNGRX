import { createAction, props } from "@ngrx/store";

const LOGIN_START = '[auth page] login start';
const LOGIN_SUCCESS = '[auth page] login success';
const LOGIN_FAILED = '[auth page] login failed';

export const login_start = createAction(LOGIN_START, props<{email:string;password:string}>());
export const login_success = createAction(LOGIN_SUCCESS);
export const login_failed = createAction(LOGIN_FAILED);
