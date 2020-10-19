import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortCountriesBy",
})
export class SortCountriesByPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    const sortBy: string = args[0] as string;
    if (["latitude", "longitude"].includes(sortBy)) {
      return (
        value &&
        value.sort((a, b) =>
          Number(a[sortBy]) > Number(b[sortBy])
            ? 1
            : Number(b[sortBy]) > Number(a[sortBy])
            ? -1
            : 0
        )
      );
    } else {
      return (
        value &&
        value.sort((a, b) =>
          a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
        )
      );
    }
  }
}
