import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-legend",
  templateUrl: "./legend.component.html",
  styleUrls: ["./legend.component.scss"],
})
export class LegendComponent implements OnInit {
  @Input("sortOrder") sortOrder: string;
  @Output("sortBy") sortBy = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
