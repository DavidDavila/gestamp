import { select } from "@angular-redux/store";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [AppService],
})
export class AppComponent {
  @select(["credentials"])
  readonly credentials$: Observable<any>;
  constructor(private appService: AppService) {
    this.appService.checkLogin();
  }
}
