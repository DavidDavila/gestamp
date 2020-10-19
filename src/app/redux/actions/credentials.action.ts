import { Injectable } from "@angular/core";
import { AnyAction } from "redux";

@Injectable()
export class CredentialsActions {
  static SET_CREDENTIALS = "SET_CREDENTIALS";
  static DELETE_CREDENTIALS = "DELETE_CREDENTIALS";

  setCredentials(data: any): AnyAction {
    return { type: CredentialsActions.SET_CREDENTIALS, payload: data };
  }
  deleteCredentials(): AnyAction {
    return { type: CredentialsActions.DELETE_CREDENTIALS };
  }
}
