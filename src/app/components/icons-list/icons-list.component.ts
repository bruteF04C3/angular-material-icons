import { Component, OnInit } from '@angular/core';
import { Icon } from '../../icon.interface';
import { Icons } from '../../constants';
import { IconCardComponent } from '../icon-card/icon-card.component';

@Component({
  selector: 'app-icons-list',
  standalone: true,
  imports: [IconCardComponent],
  templateUrl: './icons-list.component.html',
  styleUrl: './icons-list.component.sass',
})
export class IconsListComponent {
  icons: Icon[] = Icons;
}
