import { Pipe, PipeTransform } from "@angular/core";
import { COUNTRIES } from "../../models/countries";

@Pipe({
  name: "filterCountriesBy",
})
export class FilterCountriesByPipe implements PipeTransform {
  transform(value: COUNTRIES[], ...args: unknown[]): unknown {
    if (value && args[0]) {
      const search: string = (args[0] as string).toLowerCase();
      return (
        value &&
        value.filter(
          (val) =>
            val.name.toLowerCase().includes(search) ||
            val.capitalCity.toLowerCase().includes(search) ||
            val.latitude.toLowerCase().includes(search) ||
            val.longitude.toLowerCase().includes(search)
        )
      );
    }
    return value;
  }
}
