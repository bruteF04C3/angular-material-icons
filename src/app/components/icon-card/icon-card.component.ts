import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { Icon } from '../../icon.interface';
@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.sass'
})
export class IconCardComponent {
  @Input() icon!: Icon; 
}
