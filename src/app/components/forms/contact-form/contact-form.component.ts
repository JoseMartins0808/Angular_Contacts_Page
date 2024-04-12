import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,
    Validators.minLength(8),
    Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)]),
    stack: new FormControl("", [Validators.required]),
    agree: new FormControl(null)
  })

  get errors() {
    return {
      name: this.contactForm.get("name")?.errors,
      email: this.contactForm.get("email")?.errors,
      password: this.contactForm.get("password")?.errors,
      stack: this.contactForm.get("stack")?.errors,
      agree: this.contactForm.get("agree")?.errors
    }
  }

  onSubmit() {
    console.log({
      name: this.contactForm.controls.name.value,
      email: this.contactForm.get("email")?.errors,
      password: this.contactForm.controls.password.value,
      stack: this.contactForm.get("stack")?.errors,
      stack1: this.contactForm.get("stack")?.value,
      agree: this.contactForm.controls.agree.value
    });

    // if (this.contactForm.status === "VALID") {
    //   if (this.contactForm.controls.agree.value === false) {
    //     alert("Você deve concordar com os termos de uso!");
    //     return;
    //   }
    //   console.log(this.contactForm.value);
    //   this.contactForm.reset({ stack: "" });
    // } else {
    //   alert("Preencha todos os campos!");
    // }

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