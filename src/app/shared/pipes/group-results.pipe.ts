import { NgRedux } from "@angular-redux/store";
import { Pipe, PipeTransform } from "@angular/core";
import { IAppState } from "../../redux/store";

@Pipe({
  name: "groupResults",
})
export class GroupResultsPipe implements PipeTransform {
  constructor(private _ngRedux: NgRedux<IAppState>) {}
  transform(value: any[], ...args: unknown[]): unknown {
    const resJson = value.reduce((acc, el) => {
      acc[el.country.value] = acc[el.country.value] || {};
      const ind = this._ngRedux
        .getState()
        .indicators.data.find((v) => el.indicator.id == v.id);
      acc[el.country.value][ind.name] = acc[el.country.value][ind.name] || [];
      acc[el.country.value][ind.name].push({
        date: el.date,
        value: el.value,
      });
      return acc;
    }, {});
    return Object.keys(resJson).map((val) => {
      return { name: val, indicators: resJson[val] };
    });
  }
}
