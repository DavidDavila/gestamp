import { AnyAction, Reducer } from "redux";
import { LangActions } from "../actions/lang.action";

export const LangReducer: Reducer<any> = (
  lastState: string = "es",
  action: AnyAction
): any => {
  switch (action.type) {
    case LangActions.SET_LANG:
      return action.payload;
  }
  return lastState;
};
