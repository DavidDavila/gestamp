export interface COUNTRIES {
  id: string;
  iso2Code: string;
  name: string;
  region: RegionOrAdminregionOrIncomeLevelOrLendingType;
  adminregion: RegionOrAdminregionOrIncomeLevelOrLendingType;
  incomeLevel: RegionOrAdminregionOrIncomeLevelOrLendingType;
  lendingType: RegionOrAdminregionOrIncomeLevelOrLendingType;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
export interface RegionOrAdminregionOrIncomeLevelOrLendingType {
  id: string;
  iso2code: string;
  value: string;
}
