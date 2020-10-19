import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';

@Injectable()
export class LangActions {
  static SET_LANG = 'SET_LANG';

  setLang(data: string): AnyAction {
    return { type: LangActions.SET_LANG, payload: data };
  }
}
