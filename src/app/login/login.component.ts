import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { SocialAuthService } from "angularx-social-login";
import { AuthService } from "../shared/services/auth.service";
import { LOGIN_FORM } from "./form/form-login";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm = LOGIN_FORM;
  @ViewChild("login") login;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router
  ) {}
  async ngOnInit(): Promise<void> {
    await this.authService.logOut();
  }
  formControlSubmit() {
    this.loginAPI(this.loginForm.value);
  }
  async loginAPI(user) {
    try {
      await this.loginService.login(user);
      this.router.navigate(["/home"]);
    } catch (error) {
      //TODO: Catch error login when not be fake
    }
  }
  onSubmit() {
    console.log(this.loginForm);
  }
}
