import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WORLDBANK_API } from "../../../environments/environment.prod";
import { PAGINATION_RESULT, RESULT } from "../../models/result";
import { ResultsActions } from "../../redux/actions/results.action";
import { IAppState } from "../../redux/store";

@Injectable({
  providedIn: "root",
})
export class ResultsService {
  constructor(
    private _http: HttpClient,
    private _ngRedux: NgRedux<IAppState>,
    private _resultssActions: ResultsActions
  ) {}
  async getResults(countryIso2: string, indicator: string) {
    const indicators = await this.callApi(countryIso2, indicator); //falta meter los datos
    this._ngRedux.dispatch(this._resultssActions.setResults(indicators));
  }
  async callApi(
    countryIso2: string,
    indicator: string,
    itemsPerPage: number = 50,
    page: number = 1
  ) {
    const indicators: [PAGINATION_RESULT, RESULT[]] = (await this._http
      .get(
        `${WORLDBANK_API}${
          this._ngRedux.getState().lang
        }/country/${countryIso2}/indicator/${indicator}?per_page=${itemsPerPage}&format=json`
      )
      .toPromise()) as [PAGINATION_RESULT, RESULT[]];
    return indicators;
  }
  reset() {
    this._ngRedux.dispatch(this._resultssActions.reset());
  }
}
