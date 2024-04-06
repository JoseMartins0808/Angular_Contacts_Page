import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  name = new FormControl("");
  email = new FormControl("");
  message = new FormControl("");

  formSubmit(event: Event) {
    event.preventDefault();

    console.log({
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    });

    this.name.setValue("");
    this.email.setValue("");
    this.message.setValue("");
  }

}
