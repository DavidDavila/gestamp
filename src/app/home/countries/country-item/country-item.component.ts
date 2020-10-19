import { Component, Input, OnInit } from "@angular/core";
import { COUNTRIES } from "../../../models/countries";

@Component({
  selector: "app-country-item",
  templateUrl: "./country-item.component.html",
  styleUrls: ["./country-item.component.scss"],
})
export class CountryItemComponent implements OnInit {
  @Input("country") country: COUNTRIES;
  constructor() {}

  ngOnInit(): void {}
}
