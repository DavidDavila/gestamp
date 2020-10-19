import { select } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @select(["credentials"])
  readonly credentials$: Observable<any>;
  constructor() {}

  ngOnInit(): void {}
}
