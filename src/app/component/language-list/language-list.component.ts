import { Component } from '@angular/core';
import { LanguageListService} from "../../services/language-list.service";

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  newLanguage: string = '';

  constructor(private languageListService: LanguageListService) {}

  addLanguage() {
    if (this.newLanguage.trim()) {
      this.languageListService.addLanguage(this.newLanguage.trim());
      this.newLanguage = '';
    }
  }

  getLanguages(): string[] {
    return this.languageListService.getLanguages();
  }

  removeItem(index: number) {
    this.languageListService.removeLanguage(index);
  }
}
