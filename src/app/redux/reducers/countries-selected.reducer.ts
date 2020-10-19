import { AnyAction, Reducer } from "redux";
import { CountriesSelectedActions } from "../actions/countries-selected.action";

export const CountriesSelectedReducer: Reducer<any> = (
  lastState: any[] = [],
  action: AnyAction
): any => {
  switch (action.type) {
    case CountriesSelectedActions.SET_COUNTRIES_SELECTED:
      if (!lastState.find((val) => val.code == action.payload.code)) {
        return [...lastState, action.payload];
      } else {
        return lastState.filter((val) => val.code != action.payload.code);
      }
  }
  return lastState;
};
