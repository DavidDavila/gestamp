import { Component, EventEmitter, Output } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-google-login-button",
  templateUrl: "./google-login-button.component.html",
  styleUrls: ["./google-login-button.component.scss"],
})
export class GoogleLoginButtonComponent {
  @Output() onLogin = new EventEmitter();
  constructor(private authService: AuthService) {}

  async gLogin() {
    const user = await this.authService.signInWithGoogle();
    const { firstName, lastName, email, photoUrl, provider } = user;
    const userData = {
      firstName,
      lastName,
      email,
      photoUrl,
      provider,
    };
    this.onLogin.emit(userData);
  }
}
