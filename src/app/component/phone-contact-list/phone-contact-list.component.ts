import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  contacts: string[] = ['09933214343 -Xav'];
  contactName: string = '';


  addContact() {
    if (this.contactName.trim() !== '') {
      this.contacts.push(this.contactName.trim());
      this.contactName = '';
    }
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
