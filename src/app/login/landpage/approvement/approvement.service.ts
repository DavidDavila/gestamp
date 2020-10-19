import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { IAppState } from "../../../redux/store";

@Injectable({
  providedIn: "root",
})
export class ApprovementService {
  constructor(
    private _http: HttpClient,
    private _ngRedux: NgRedux<IAppState>
  ) {}
  getTopics() {
    try {
      return this._http
        .get(
          `${environment.WORLDBANK_API}/${
            this._ngRedux.getState().lang
          }/topic?format=json`
        )
        .toPromise();
    } catch (error) {
      throw error;
    }
  }
}
