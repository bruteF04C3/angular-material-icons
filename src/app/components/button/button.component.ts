import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() redirectedTo: string = '';

  constructor(private router: Router) {}
  handleClick() {
    if (this.redirectedTo) {
      this.router.navigate([`/${this.redirectedTo}`]);
    }
  }
}
