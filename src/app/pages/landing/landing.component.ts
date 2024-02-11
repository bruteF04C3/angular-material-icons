import { Component } from '@angular/core';
import { SHOW_ENTIRE_LIST, WELCOME_MESSAGE } from '../../constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  welcomeMessage: string = WELCOME_MESSAGE;
  entireListMessage: string = SHOW_ENTIRE_LIST;
}
