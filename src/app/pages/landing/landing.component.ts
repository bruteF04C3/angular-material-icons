import { Component } from '@angular/core';
import { WELCOME_MESSAGE } from '../../constants';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  welcomeMessage: string = WELCOME_MESSAGE;
}
