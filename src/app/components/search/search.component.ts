import { Component, Signal, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormField, MatInput, MatIcon],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  $searchQuery = signal('');

  onSearchUpdated(sq: string) {
    console.log(sq);
  }
}
