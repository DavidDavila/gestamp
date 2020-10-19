import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CountriesSelectedActions } from "../redux/actions/countries-selected.action";
import { CountriesActions } from "../redux/actions/countries.action";
import { IndicatorsSelectedActions } from "../redux/actions/indicators-selected.action";
import { IndicatorsActions } from "../redux/actions/Indicators.action";
import { ResultsActions } from "../redux/actions/results.action";
import { OnlyCountriesPipe } from "../shared/pipes/only-countries.pipe";
import { SharedModule } from "../shared/shared.module";
import { CountriesComponent } from "./countries/countries.component";
import { CountriesService } from "./countries/countries.service";
import { FilterComponent } from "./countries/filter/filter.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { IndicatorsComponent } from "./indicators/indicators.component";
import { IndicatorsService } from "./indicators/indicators.service";
import { MapsComponent } from "./maps/maps.component";
import { QuickSearchComponent } from "./quick-search/quick-search.component";
import { QuickSearchService } from "./quick-search/quick-search.service";
import { ResultsService } from "./results/result.sservice";
import { ResultsComponent } from "./results/results.component";
import { LegendComponent } from './countries/legend/legend.component';
import { CountryItemComponent } from './countries/country-item/country-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    MapsComponent,
    CountriesComponent,
    IndicatorsComponent,
    FilterComponent,
    ResultsComponent,
    QuickSearchComponent,
    LegendComponent,
    CountryItemComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [
    CountriesActions,
    CountriesSelectedActions,
    CountriesService,
    OnlyCountriesPipe,
    IndicatorsActions,
    IndicatorsService,
    IndicatorsSelectedActions,
    ResultsService,
    ResultsActions,
    QuickSearchService,
  ],
})
export class HomeModule {}
