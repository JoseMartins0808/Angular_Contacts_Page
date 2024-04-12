import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    area: new FormControl(""),
    message: new FormControl(null)
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
