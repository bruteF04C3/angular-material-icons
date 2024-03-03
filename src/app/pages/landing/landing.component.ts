import { Component, OnDestroy } from '@angular/core';
import { SHOW_ENTIRE_LIST, WELCOME_MESSAGE } from '../../constants';
import { RouterModule } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, MatIconModule, ButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnDestroy {
  welcomeMessage: string = WELCOME_MESSAGE;
  entireListMessage: string = SHOW_ENTIRE_LIST;
  icons: any[] = ['search', 'home', 'account_circle', 'settings', 'done'];
  interval: any;

  constructor() {
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.shuffleIcons();
    }, 1500);
  }

  shuffleIcons() {
    const shuffledIcons = this.icons
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    this.icons = shuffledIcons;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
