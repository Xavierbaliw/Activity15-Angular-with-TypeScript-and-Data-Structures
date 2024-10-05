import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: string[] = ['JavaScript', 'Python', 'Java', 'C#'];
  newLanguage: string = '';

  addLanguage() {
    if (this.newLanguage) {
      this.languages.push(this.newLanguage);
      this.newLanguage = '';
    }
  }
  removeItem(index: number) {
    this.languages.splice(index, 1);
  }
}
