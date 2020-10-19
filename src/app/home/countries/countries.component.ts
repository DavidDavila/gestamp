import { select } from "@angular-redux/store";
import { Component, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { CountriesService } from "./countries.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.scss"],
})
export class CountriesComponent implements OnDestroy {
  private itemsPerPage = 100;
  public countries;
  public searchString = "";
  public sortOrder = "name";
  public filter: { key: string; value: string; show: boolean } = {
    key: "all", //TODO  Poner un enum a todos los tipos de filtro
    value: "",
    show: false,
  };
  public showModal = false;
  private subLang: any;

  @select(["countries", "data"])
  readonly countryData$: Observable<any>;
  @select(["lang"])
  readonly lang$: Observable<any>;
  constructor(private _countriesService: CountriesService) {
    this.subLang = this.lang$.subscribe((val) => {
      if (val) {
        this._countriesService.reset();
        this.getCountries();
      }
    });
  }
  ngOnDestroy(): void {
    this.subLang && this.subLang.unsubscribe();
  }
  async getCountries() {
    this.countries = await this._countriesService.getCountries(
      this.itemsPerPage
    );
  }
  async onFilterEvent($event) {
    this.filter = $event;
    this._countriesService.reset();
    if (this.filter.key !== "all") {
      try {
        this.countries = await this._countriesService.filterCountries(
          this.filter
        );
        this.filter.show = false;
      } catch (error) {
        this.showModal = true;
        this.filter.show = false;
      }
    } else {
      this.filter.value = "";
      this.countries = await this._countriesService.getCountries(
        this.itemsPerPage
      );
      this.filter.show = false;
    }
  }
  select(country: any, ev: Event) {
    const target = ev.currentTarget as HTMLElement;
    const prevSib = target.previousSibling as any;
    prevSib.checked = !prevSib.checked;
    this._countriesService.select(country);
    ev.preventDefault();
  }
}
