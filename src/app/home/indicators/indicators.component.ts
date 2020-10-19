import { select } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IndicatorsService } from "./indicators.service";

@Component({
  selector: "app-indicators",
  templateUrl: "./indicators.component.html",
  styleUrls: ["./indicators.component.scss"],
})
export class IndicatorsComponent implements OnInit {
  @select(["indicators", "data"])
  readonly indicators$: Observable<any>;
  @select(["lang"])
  readonly lang$: Observable<any>;
  subLang: any;
  loading: boolean = false;
  constructor(private _indicatorsService: IndicatorsService) {
    this.subLang = this.lang$.subscribe((val) => {
      if (val) {
        this._indicatorsService.reset();
        this.getIndicators();
      }
    });
  }
  ngOnDestroy(): void {
    this.subLang && this.subLang.unsubscribe();
  }

  ngOnInit(): void {
    this.getIndicators();
  }
  async getIndicators() {
    this.loading = true;
    await this._indicatorsService.getAllIndicators();
    this.loading = false;
  }
  select(id: string, ev: Event) {
    const target = ev.currentTarget as HTMLElement;
    const prevSib = target.previousSibling as any;
    prevSib.checked = !prevSib.checked;
    this._indicatorsService.select(id);
    ev.preventDefault();
  }
  scrollHandler(e) {
    !this.loading && this.getIndicators();
  }
}
