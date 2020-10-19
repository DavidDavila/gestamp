import { AnyAction, Reducer } from "redux";
import { IndicatorsSelectedActions } from "../actions/indicators-selected.action";

export const IndicatorsSelectedReducer: Reducer<any> = (
  lastState: any[] = [],
  action: AnyAction
): any => {
  switch (action.type) {
    case IndicatorsSelectedActions.SET_INDICATORS_SELECTED:
      if (!lastState.find((val) => val == action.payload)) {
        return [...lastState, action.payload];
      } else {
        return lastState.filter((val) => val != action.payload);
      }
  }
  return lastState;
};
