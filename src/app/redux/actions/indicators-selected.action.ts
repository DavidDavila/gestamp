import { Injectable } from "@angular/core";
import { AnyAction } from "redux";

@Injectable()
export class IndicatorsSelectedActions {
  static SET_INDICATORS_SELECTED = "SET_INDICATORS_SELECTED";

  setIndicatorsSelected(data: string): AnyAction {
    return {
      type: IndicatorsSelectedActions.SET_INDICATORS_SELECTED,
      payload: data,
    };
  }
}
