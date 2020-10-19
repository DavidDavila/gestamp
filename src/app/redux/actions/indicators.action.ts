import { Injectable } from "@angular/core";
import { AnyAction } from "redux";
import { INDICATORS } from "../../models/indicators";
import { PAGINATION } from "../../models/pagination.dto";

@Injectable()
export class IndicatorsActions {
  static SET_INDICATORS = "SET_INDICATORS";
  static RESET_INDICATORS = "RESET_INDICATORS";

  setIndicators(data: [PAGINATION, INDICATORS[]]): AnyAction {
    return { type: IndicatorsActions.SET_INDICATORS, payload: data };
  }
  reset(): AnyAction {
    return { type: IndicatorsActions.RESET_INDICATORS };
  }
}
