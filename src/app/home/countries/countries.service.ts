import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WORLDBANK_API } from "../../../environments/environment.prod";
import { COUNTRIES } from "../../models/countries";
import { PAGINATION } from "../../models/pagination.dto";
import { CountriesSelectedActions } from "../../redux/actions/countries-selected.action";
import { CountriesActions } from "../../redux/actions/countries.action";
import { IAppState } from "../../redux/store";
import { OnlyCountriesPipe } from "../../shared/pipes/only-countries.pipe";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  public onlyCountries: COUNTRIES[];
  public sortOrder = "country";
  constructor(
    private _http: HttpClient,
    private _countryActions: CountriesActions,
    private _countriesSelectedActions: CountriesSelectedActions,
    private _ngRedux: NgRedux<IAppState>,
    private _onlyCountriesPipe: OnlyCountriesPipe
  ) {}
  async getCountries(itemsPerPage: number = 50, page: number = 1) {
    const countries: [PAGINATION, COUNTRIES[]] = (await this._http
      .get(
        `${WORLDBANK_API}/${
          this._ngRedux.getState().lang
        }/country/all?per_page=${itemsPerPage}&page=${
          this._ngRedux.getState().countries
            ? this._ngRedux.getState().countries.pagination.page + 1
            : page
        }&format=json`
      )
      .toPromise()) as [PAGINATION, COUNTRIES[]];
    if (!countries[0].page) {
      throw "Error";
    }
    this.onlyCountries = this.findOnlyCountries(countries, itemsPerPage);
    this._ngRedux.dispatch(this._countryActions.setCountries(countries));

    if (itemsPerPage && this.onlyCountries.length < itemsPerPage) {
      return this.getCountries(itemsPerPage);
    }
    return this.onlyCountries;
  }
  findOnlyCountries(
    countries: [PAGINATION, COUNTRIES[]],
    itemsPerPage: number
  ) {
    const inRedux = this._ngRedux.getState().countries
      ? this._ngRedux.getState().countries.data
      : [];
    return this._onlyCountriesPipe.transform(
      [...inRedux, ...countries[1]],
      "onlyCountries"
    ) as COUNTRIES[];
  }
  reset() {
    this._ngRedux.dispatch(this._countryActions.reset());
  }
  select(country: any) {
    this._ngRedux.dispatch(
      this._countriesSelectedActions.setCountriesSelected(country)
    );
  }
  async filterCountries(
    filter: { key: string; value: string; show: boolean },
    itemsPerPage: number = 50,
    page: number = 1
  ) {
    try {
      const countries: [PAGINATION, COUNTRIES[]] = (await this._http
        .get(
          `${WORLDBANK_API}/${this._ngRedux.getState().lang}/country?${
            filter.key
          }=${filter.value}&per_page=${itemsPerPage}&page=${
            this._ngRedux.getState().countries
              ? this._ngRedux.getState().countries.pagination.page + 1
              : page
          }&format=json`
        )
        .toPromise()) as [PAGINATION, COUNTRIES[]];
      if (!countries[0].page) {
        throw "Error";
      }
      this.onlyCountries = this.findOnlyCountries(countries, itemsPerPage);

      this._ngRedux.dispatch(this._countryActions.setCountries(countries));

      if (itemsPerPage && this.onlyCountries.length < itemsPerPage) {
        return this.getCountries(itemsPerPage);
      }
      return this.onlyCountries;
    } catch (error) {
      throw error;
    }
  }
}
