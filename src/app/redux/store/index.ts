import { combineReducers } from "redux";
import { COUNTRIES } from "../../models/countries";
import { CREDENTIALS } from "../../models/credentials";
import { INDICATORS } from "../../models/indicators";
import { PAGINATION } from "../../models/pagination.dto";
import { PAGINATION_RESULT, RESULT } from "../../models/result";
import { CountriesSelectedReducer } from "../reducers/countries-selected.reducer";
import { CountriesReducer } from "../reducers/countries.reducer";
import { CredentialsReducer } from "../reducers/credentials.reducer";
import { IndicatorsSelectedReducer } from "../reducers/indicators-selected.reducer";
import { IndicatorsReducer } from "../reducers/indicators.reducer";
import { LangReducer } from "../reducers/lang.reducer";
import { ResultsReducer } from "../reducers/results.reducer";

export interface IAppState {
  lang: string;
  credentials: CREDENTIALS;
  countries: { pagination: PAGINATION; data: COUNTRIES[] };
  indicators: { pagination: PAGINATION; data: INDICATORS[] };
  results: { pagination: PAGINATION_RESULT; data: RESULT[] };
  countriesSelected: string[];
  indicatorsSelected: string[];
}

export const INITIAL_STATE: IAppState = {
  lang: "es",
  credentials: null,
  countriesSelected: [],
  indicatorsSelected: [],
  countries: null,
  indicators: null,
  results: null,
};

export const rootReducer = combineReducers<IAppState>({
  lang: LangReducer,
  indicators: IndicatorsReducer,
  countries: CountriesReducer,
  credentials: CredentialsReducer,
  countriesSelected: CountriesSelectedReducer,
  indicatorsSelected: IndicatorsSelectedReducer,
  results: ResultsReducer,
});
