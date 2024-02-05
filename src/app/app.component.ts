import { Component } from '@angular/core';
import { IconsListComponent } from './components/icons-list/icons-list.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconsListComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-material-icons';
}
