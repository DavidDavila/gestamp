import { Injectable } from "@angular/core";
import { AnyAction } from "redux";
import { COUNTRIES } from "../../models/countries";
import { PAGINATION } from "../../models/pagination.dto";

@Injectable()
export class CountriesActions {
  static SET_COUNTRIES = "SET_COUNTRIES";
  static RESET_COUNTRIES = "RESET_COUNTRIES";

  setCountries(data: [PAGINATION, COUNTRIES[]]): AnyAction {
    return { type: CountriesActions.SET_COUNTRIES, payload: data };
  }
  reset(): AnyAction {
    return { type: CountriesActions.RESET_COUNTRIES };
  }
}
