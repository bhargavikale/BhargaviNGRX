import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap,map, mergeMap } from "rxjs";
import { login_start, login_success } from "./action";
import { AuthService } from "../../services/Auth.service";

@Injectable()
export class AuthEffects{
    constructor(private Actions$:Actions, private authService:AuthService){}

    login$ = createEffect(() => {
        return this.Actions$.pipe(
          ofType(login_start),
          exhaustMap((action) => {
            return this.authService.login(action.email,action.password).pipe(
              map((data) => {
                return login_success();
              }),
            );
          })
        );
    });
}