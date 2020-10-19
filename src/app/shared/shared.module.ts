import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ChartComponent } from "./components/chart/chart.component";
import { GoogleLoginButtonComponent } from "./components/google-login-button/google-login-button.component";
import { InfiniteScrollDirective } from "./directives/infinite-scroll.directive";
import { FilterCountriesByPipe } from "./pipes/filter-countries-by.pipe";
import { GroupResultsPipe } from "./pipes/group-results.pipe";
import { OnlyCountriesPipe } from "./pipes/only-countries.pipe";
import { ProfileNamePipe } from "./pipes/profile-name.pipe";
import { SortCountriesByPipe } from "./pipes/sort-countries-by.pipe";

@NgModule({
  exports: [
    GoogleLoginButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    ProfileNamePipe,
    TranslateModule,
    OnlyCountriesPipe,
    SortCountriesByPipe,
    FilterCountriesByPipe,
    GroupResultsPipe,
    ChartComponent,
    InfiniteScrollDirective,
  ],
  declarations: [
    GoogleLoginButtonComponent,
    ProfileNamePipe,
    OnlyCountriesPipe,
    OnlyCountriesPipe,
    SortCountriesByPipe,
    FilterCountriesByPipe,
    GroupResultsPipe,
    ChartComponent,
    InfiniteScrollDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
})
export class SharedModule {}
