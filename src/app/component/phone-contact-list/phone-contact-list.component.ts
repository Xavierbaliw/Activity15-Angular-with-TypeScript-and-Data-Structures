import { Component } from '@angular/core';
import { PhoneContactListService} from "../../services/phone-contact-list.service";

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  newContact: string = '';

  constructor(private contactListService: PhoneContactListService) {}

  addContact() {
    if (this.newContact.trim()) {
      this.contactListService.addContact(this.newContact.trim());
      this.newContact = '';
    }
  }

  getContacts(): string[] {
    return this.contactListService.getContacts();
  }

  removeItem(index: number) {
    this.contactListService.removeContact(index);
  }
}
