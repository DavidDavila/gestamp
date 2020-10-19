import { AnyAction, Reducer } from "redux";
import { INDICATORS } from "../../models/indicators";
import { PAGINATION } from "../../models/pagination.dto";
import { IndicatorsActions } from "../actions/Indicators.action";

export const IndicatorsReducer: Reducer<any> = (
  lastState: { pagination: PAGINATION; data: INDICATORS[] } = null,
  action: AnyAction
): any => {
  switch (action.type) {
    case IndicatorsActions.SET_INDICATORS:
      return {
        pagination: action.payload[0],
        data: lastState
          ? [...lastState.data, ...action.payload[1]]
          : action.payload[1],
      };
    case IndicatorsActions.RESET_INDICATORS:
      return null;
  }
  return lastState;
};
