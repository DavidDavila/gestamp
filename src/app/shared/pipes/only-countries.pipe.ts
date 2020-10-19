import { Pipe, PipeTransform } from "@angular/core";
import { COUNTRIES } from "../../models/countries";

@Pipe({
  name: "onlyCountries",
})
export class OnlyCountriesPipe implements PipeTransform {
  transform(value: COUNTRIES[], ...args: unknown[]): unknown {
    return value && value.filter((val) => !!val.adminregion.value);
  }
}
