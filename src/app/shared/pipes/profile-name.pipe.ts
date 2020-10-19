import { Pipe, PipeTransform } from "@angular/core";
import { CREDENTIALS } from "../../models/credentials";

@Pipe({
  name: "profileName",
})
export class ProfileNamePipe implements PipeTransform {
  transform(value: CREDENTIALS, ...args: unknown[]): unknown {
    return value.firstName && value.lastName
      ? `${value.firstName.substring(1, 0)}${value.lastName.substring(1, 0)}`
      : value.email.substring(1, 0);
  }
}
