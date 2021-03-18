import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  setLanguage = new BehaviorSubject<number>(1);
  constructor() {
  }

  loadLanguage(languageId: number): void {
    this.setLanguage.next(languageId);
  }

  getLanguage(): Observable<number> {
    return this.setLanguage.asObservable();
  }
}
