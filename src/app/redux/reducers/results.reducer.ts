import { AnyAction, Reducer } from "redux";
import { PAGINATION_RESULT, RESULT } from "../../models/result";
import { ResultsActions } from "../actions/results.action";

export const ResultsReducer: Reducer<any> = (
  lastState: { pagination: PAGINATION_RESULT; data: RESULT[] } = null,
  action: AnyAction
): any => {
  switch (action.type) {
    case ResultsActions.SET_RESULTS:
      return {
        pagination: action.payload[0],
        data:
          lastState && lastState.data
            ? [...lastState.data, ...action.payload[1]]
            : action.payload[1],
      };
    case ResultsActions.RESET_RESULTS:
      return null;
  }
  return lastState;
};
