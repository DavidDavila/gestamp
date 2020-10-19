import { select } from "@angular-redux/store";
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Observable } from "rxjs";
import { GET_ISO } from "../../models/get-iso2";
import { IndicatorsService } from "../indicators/indicators.service";
import { QuickSearchService } from "./quick-search.service";

@Component({
  selector: "app-quick-search",
  templateUrl: "./quick-search.component.html",
  styleUrls: ["./quick-search.component.scss"],
})
export class QuickSearchComponent implements OnInit {
  public search = {
    country: "",
    indicator: undefined,
  };
  @ViewChild("indicatorList") indicatorList: ElementRef;
  @Output("close") close = new EventEmitter();
  @select(["indicators", "data"])
  readonly indicators$: Observable<any>;

  @select(["lang"])
  readonly lang$: Observable<any>;
  public posibilities: GET_ISO[] = [];
  public showAutocomplete: boolean;
  public results: any;
  chartData: any;
  capital: string;
  constructor(
    private _quickSearchService: QuickSearchService,
    private _indicatorsService: IndicatorsService
  ) {}

  ngOnInit(): void {}
  select(indicator, $event) {
    const prevSelected = this.indicatorList.nativeElement.querySelector(
      ".selected"
    );
    prevSelected ? prevSelected.classList.remove("selected") : "";
    $event.currentTarget.classList.add("selected");
    this.search.indicator = indicator;
  }
  async searchTyping() {
    if (this.search.country.length > 2) {
      !this.showAutocomplete ? (this.showAutocomplete = true) : "";
      try {
        const res = (await this._quickSearchService.searchTyping(
          this.search.country
        )) as GET_ISO[];
        this.posibilities = res.filter(
          (country) =>
            country.name
              .toLowerCase()
              .includes(this.search.country.toLowerCase()) ||
            Object.values(country.translations).find((v) =>
              v.toLowerCase().includes(this.search.country.toLowerCase())
            )
        );
      } catch (error) {}
    } else {
      this.showAutocomplete = false;
    }
  }
  async selectCountry(posibility) {
    this.search.country = posibility.name;
    this.showAutocomplete = false;
  }
  async searchResults() {
    let iso2;
    try {
      const country = this.posibilities.find(
        (p) => p.name === this.search.country
      );
      iso2 = country.alpha2Code;
      this.capital = country.capital;
    } catch (e) {
      iso2 = this.search.country;
    }

    this.results = await this._quickSearchService.search(
      iso2,
      this.search.indicator
    );
    if (this.results && this.results[1]) {
      this.chartData = this.results[1].map((d) => {
        return { date: d.date, value: d.value };
      });
    }
  }
  scrollHandler(e) {
    this._indicatorsService.getAllIndicators();
  }
}
