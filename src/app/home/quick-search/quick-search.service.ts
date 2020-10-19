import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { REST_COUNTRIES_API } from "../../../environments/environment.prod";
import { ResultsService } from "../results/result.sservice";

@Injectable({
  providedIn: "root",
})
export class QuickSearchService {
  constructor(
    private _http: HttpClient,
    private _resultService: ResultsService
  ) {}
  searchTyping(text: string) {
    return this._http.get(`${REST_COUNTRIES_API}/${text}`).toPromise();
  }
  search(iso2: string, indicator: string) {
    return this._resultService.callApi(iso2, indicator);
  }
}
