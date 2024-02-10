import { Component } from '@angular/core';
import { IconsListComponent } from '../../components/icons-list/icons-list.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [SearchComponent, IconsListComponent],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {}
