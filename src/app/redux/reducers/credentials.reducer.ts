import { AnyAction, Reducer } from "redux";
import { CredentialsActions } from "../actions/credentials.action";

export const CredentialsReducer: Reducer<any> = (
  lastState: any = null,
  action: AnyAction
): any => {
  switch (action.type) {
    case CredentialsActions.SET_CREDENTIALS:
      return action.payload;
    case CredentialsActions.DELETE_CREDENTIALS:
      return null;
  }
  return lastState;
};
