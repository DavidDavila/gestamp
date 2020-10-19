import { AnyAction, Reducer } from "redux";
import { COUNTRIES } from "../../models/countries";
import { PAGINATION } from "../../models/pagination.dto";
import { CountriesActions } from "../actions/countries.action";

export const CountriesReducer: Reducer<any> = (
  lastState: { pagination: PAGINATION; data: COUNTRIES[] } = null,
  action: AnyAction
): any => {
  switch (action.type) {
    case CountriesActions.SET_COUNTRIES:
      return {
        pagination: action.payload[0],
        data: lastState
          ? [...lastState.data, ...action.payload[1]]
          : action.payload[1],
      };
    case CountriesActions.RESET_COUNTRIES:
      return null;
  }
  return lastState;
};
