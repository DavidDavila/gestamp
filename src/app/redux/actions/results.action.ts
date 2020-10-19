import { Injectable } from "@angular/core";
import { AnyAction } from "redux";
import { PAGINATION_RESULT, RESULT } from "../../models/result";

@Injectable()
export class ResultsActions {
  static SET_RESULTS = "SET_RESULTS";
  static RESET_RESULTS = "RESET_RESULTS";

  setResults(data: [PAGINATION_RESULT, RESULT[]]): AnyAction {
    return { type: ResultsActions.SET_RESULTS, payload: data };
  }
  reset(): AnyAction {
    return { type: ResultsActions.RESET_RESULTS };
  }
}
