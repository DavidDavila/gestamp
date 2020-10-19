import { select } from "@angular-redux/store";
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Observable } from "rxjs";
import { ResultsService } from "./result.sservice";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit, OnDestroy {
  @Output("quickSearch") quickSearch = new EventEmitter();
  @select(["countriesSelected"])
  readonly countriesSelected$: Observable<any>;
  @select(["indicatorsSelected"])
  readonly indicatorsSelected$: Observable<any>;
  @select(["results"])
  readonly results$: Observable<any>;
  public countries = [];
  public indicators = [];
  sub1: any;
  sub2: any;
  public result = [];
  constructor(private _resultsService: ResultsService) {}
  getResults() {
    this.indicators.forEach((indicator) => {
      this._resultsService.reset();
      this._resultsService.getResults(
        this.countries.map((country) => country.code).join(";"),
        indicator
      );
    });
  }
  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
    this.sub2 && this.sub2.unsubscribe();
  }

  ngOnInit(): void {
    this.sub1 = this.countriesSelected$.subscribe((val) => {
      if (val) {
        this.countries = val;
        if (this.countries.length > 0 && this.indicators.length > 0) {
          this._resultsService.reset();
          this.getResults();
        }
      }
    });
    this.sub2 = this.indicatorsSelected$.subscribe((val) => {
      if (val) {
        this.indicators = val;
        if (this.countries.length > 0 && this.indicators.length > 0) {
          this.getResults();
        }
      }
    });
  }
}
