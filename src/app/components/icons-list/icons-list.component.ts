import { Component } from '@angular/core';
import { Icon } from '../../icon.interface';
import { Icons } from '../../constants';

@Component({
  selector: 'app-icons-list',
  standalone: true,
  imports: [],
  templateUrl: './icons-list.component.html',
  styleUrl: './icons-list.component.sass',
})
export class IconsListComponent {
  icons: Icon[] = Icons;
}
