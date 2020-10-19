import { NgRedux, select } from "@angular-redux/store";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { LangActions } from "../../../redux/actions/lang.action";
import { IAppState } from "../../../redux/store";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
})
export class LanguageComponent implements OnInit, OnDestroy {
  public currentLanguage: { code: string; nativeForm: string };
  public subLang: any;
  public supportedLanguages: { code: string; nativeForm: string }[] = [
    { code: "en", nativeForm: "English" },
    { code: "es", nativeForm: "Español" },
  ];

  @select(["lang"])
  readonly lang$: Observable<any>;
  openDropdown: boolean;

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _langActions: LangActions,
    public _translate: TranslateService
  ) {
    this.getCurrentLang();
    this.subLang = this.lang$.subscribe((val) => {
      if (val) {
        this.getCurrentLang();
        this._translate.use(val);
      }
    });
  }
  getCurrentLang() {
    this.currentLanguage = this.supportedLanguages.find(
      (langData) => langData.code === this._ngRedux.getState().lang
    );
  }
  ngOnInit(): void {}

  changeLang(lang: string) {
    this._ngRedux.dispatch(this._langActions.setLang(lang));
    this.openDropdown = false;
  }

  ngOnDestroy(): void {
    this.subLang && this.subLang.unsubscribe();
  }
}
