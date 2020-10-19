import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";
import { ApprovementComponent } from "./landpage/approvement/approvement.component";
import { LandpageComponent } from "./landpage/landpage.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [LoginComponent, LandpageComponent, ApprovementComponent],
  imports: [TranslateModule, SharedModule, CommonModule, LoginRoutingModule],
})
export class LoginModule {}
