import { NgRedux } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../../environments/environment";
import { CredentialsActions } from "../../redux/actions/credentials.action";
import { IAppState } from "../../redux/store";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private router: Router,
    private socialAuth: SocialAuthService,
    private cookieService: CookieService,
    private _ngRedux: NgRedux<IAppState>,
    private _credentialsActions: CredentialsActions
  ) {}
  hasCookie() {
    try {
      const cookie = JSON.parse(
        this.cookieService.get(environment.COOKIE_NAME)
      );
      this._ngRedux.dispatch(this._credentialsActions.setCredentials(cookie));
    } catch (error) {
      return false;
    }
  }

  signInWithGoogle() {
    return this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut() {
    return new Promise(async (res, rej) => {
      let isLogged;
      try {
        isLogged = await this.socialAuth.signOut();
      } catch (error) {}
      this.cookieService.deleteAll();
      this._ngRedux.dispatch(this._credentialsActions.deleteCredentials());
      res();
    });
  }
  isLogged() {
    try {
      const cookie = JSON.parse(
        this.cookieService.get(environment.COOKIE_NAME)
      );
      return true;
    } catch (error) {
      return this.router.navigate(["login"]);
    }
  }
  login(user) {
    delete user.password;
    this._ngRedux.dispatch(this._credentialsActions.setCredentials(user));
    this.cookieService.set(environment.COOKIE_NAME, JSON.stringify(user));
  }
  isInitGoogle() {
    return this.socialAuth.initState.toPromise();
  }
}
