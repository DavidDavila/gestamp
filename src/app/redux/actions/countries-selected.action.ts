import { Injectable } from "@angular/core";
import { AnyAction } from "redux";

@Injectable()
export class CountriesSelectedActions {
  static SET_COUNTRIES_SELECTED = "SET_COUNTRIES_SELECTED";

  setCountriesSelected(data: string): AnyAction {
    return {
      type: CountriesSelectedActions.SET_COUNTRIES_SELECTED,
      payload: data,
    };
  }
}
