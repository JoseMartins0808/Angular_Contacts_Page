import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.min(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.min(8)]),
    stack: new FormControl(""),
    agree: new FormControl(false)
  })

  onSubmit() {
    console.log({
      name: this.contactForm.controls.name.status,
      email: this.contactForm.controls.email.status,
      password: this.contactForm.controls.password.status,
      stack: this.contactForm.controls.stack.status,
      agree: this.contactForm.controls.agree.status
    });

    if (this.contactForm.status === "VALID") {
      if (this.contactForm.controls.agree.value === false) {
        alert("Você deve concordar com os termos de uso!");
        return;
      }
      console.log(this.contactForm.value);
      this.contactForm.reset({ stack: "" });
    } else {
      alert("Preencha todos os campos!");
    }

    // this.contactForm.controls.email.value;     PARA ACESSAR CADA PROPRIEDADE
  }
}
// export class ContactFormComponent {
//   name = new FormControl("");
//   email = new FormControl("");
//   message = new FormControl("");

//   formSubmit(event: Event) {
//     event.preventDefault();

//     console.log({
//       name: this.name.value,
//       email: this.email.value,
//       message: this.message.value
//     });

//     this.name.setValue("");
//     this.email.setValue("");
//     this.message.setValue("");
//   }
// }