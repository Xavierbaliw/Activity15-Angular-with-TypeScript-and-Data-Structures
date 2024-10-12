import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  private languages: string[] = ['JavaScript', 'Python', 'Java', 'C#'];

  addLanguage(language: string) {
    this.languages.push(language);
  }

  getLanguages(): string[] {
    return this.languages;
  }

  removeLanguage(index: number) {
    if (index > -1) {
      this.languages.splice(index, 1);
    }
  }
}
