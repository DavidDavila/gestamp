export interface PAGINATION_RESULT {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
}
export interface RESULT {
  indicator: IndicatorOrCountry;
  country: IndicatorOrCountry;
  countryiso3code: string;
  date: string;
  value?: number | null;
  unit: string;
  obs_status: string;
  decimal: number;
}
export interface IndicatorOrCountry {
  id: string;
  value: string;
}
