import { FormControl, FormGroup, Validators } from "@angular/forms";

export const LOGIN_FORM = new FormGroup({
  email: new FormControl("", [Validators.required]),
  password: new FormControl("", [Validators.required]),
});
