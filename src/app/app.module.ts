import { NgReduxRouter, NgReduxRouterModule } from "@angular-redux/router";
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from "@angular-redux/store";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
} from "angularx-social-login";
import { CookieService } from "ngx-cookie-service";
import { CLIENT_ID } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { CredentialsActions } from "./redux/actions/credentials.action";
import { LangActions } from "./redux/actions/lang.action";
import { IAppState, INITIAL_STATE, rootReducer } from "./redux/store/";
import { LanguageComponent } from "./shared/components/language/language.component";
import { HttpLoaderFactory } from "./shared/factories/httpLoader.factory";
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    NgReduxModule,
    HttpClientModule,
    AppRoutingModule,
    NgReduxRouterModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AuthService,
    CookieService,
    CredentialsActions,
    LangActions,
    SocialAuthService,
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(CLIENT_ID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    _ngRedux: NgRedux<IAppState>,
    ngReduxRouter: NgReduxRouter,
    devTools: DevToolsExtension
  ) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    _ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
