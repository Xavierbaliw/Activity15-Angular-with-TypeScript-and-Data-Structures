import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  contacts: { name: string; phone: string }[] = [
    { name: 'Xavier', phone: '09933214858' },
    { name: 'Renzlyn', phone: '09488619358' },
    { name: 'Ohmar', phone: '09666307584' }
  ];

  newContact: { name: string; phone: string } = { name: '', phone: '' };


  addContact() {
    if (this.newContact.name && this.newContact.phone) {
      this.contacts.push({ ...this.newContact });
      this.newContact.name = '';
      this.newContact.phone = '';
    } else {
      alert('Both fields are required!');
    }
  }
}
