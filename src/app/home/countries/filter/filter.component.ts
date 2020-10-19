import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Input("filter") filter: { key: string; value: string; show: boolean };
  @Output("onFilter") filterTrigger = new EventEmitter();
  @Output("onClose") closeTrigger = new EventEmitter();
  public showSpinner = false;
  constructor() {}
  prevEvent(ev: Event) {
    console.log(!(ev.target as HTMLElement).classList.contains(".canClose"));
    if (!(ev.target as HTMLElement).classList.contains(".canClose"))
      ev.stopPropagation();
  }
  ngOnInit(): void {}
}
