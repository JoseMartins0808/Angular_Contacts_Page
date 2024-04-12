import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/forms/contact-form/contact-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
