import { Component } from '@angular/core';
import { IconsListComponent } from './components/icons-list/icons-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-material-icons';
}
