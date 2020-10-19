import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private _http: HttpClient, private authService: AuthService) {}
  async login(userData) {
    try {
      /* FAKING LOGIN
      const user = await this._http
        .post(`${environment.API_URL}/login`, userData)
        .toPromise();
      */
      this.authService.login(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  }
}
