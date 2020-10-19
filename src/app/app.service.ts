import { Injectable } from "@angular/core";
import { AuthService } from "./shared/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private _authService: AuthService) {}
  checkLogin() {
    this._authService.hasCookie();
  }
}
