import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactListService {
  private contacts: string[] = ['09933214343 - Xav'];

  addContact(contact: string) {
    this.contacts.push(contact);
  }

  getContacts(): string[] {
    return this.contacts;
  }

  removeContact(index: number) {
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
}
