import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WORLDBANK_API } from "../../../environments/environment.prod";
import { INDICATORS } from "../../models/indicators";
import { PAGINATION } from "../../models/pagination.dto";
import { IndicatorsSelectedActions } from "../../redux/actions/indicators-selected.action";
import { IndicatorsActions } from "../../redux/actions/Indicators.action";
import { IAppState } from "../../redux/store";

@Injectable({
  providedIn: "root",
})
export class IndicatorsService {
  constructor(
    private _http: HttpClient,
    private _indicatorsActions: IndicatorsActions,
    private _indicatorSelectedsActions: IndicatorsSelectedActions,
    private _ngRedux: NgRedux<IAppState>
  ) {}
  async getAllIndicators(itemsPerPage: number = 20, page: number = 1) {
    return await new Promise(async (res, rej) => {
      const indicators: [PAGINATION, INDICATORS[]] = (await this._http
        .get(
          `${WORLDBANK_API}/${
            this._ngRedux.getState().lang
          }/indicator/all?per_page=${itemsPerPage}&page=${
            this._ngRedux.getState().indicators
              ? this._ngRedux.getState().indicators.pagination.page + 1
              : page
          }&format=json`
        )
        .toPromise()) as [PAGINATION, INDICATORS[]];
      this._ngRedux.dispatch(this._indicatorsActions.setIndicators(indicators));
      res();
    });
  }
  reset() {
    this._ngRedux.dispatch(this._indicatorsActions.reset());
  }
  select(indicator: string) {
    this._ngRedux.dispatch(
      this._indicatorSelectedsActions.setIndicatorsSelected(indicator)
    );
  }
}
