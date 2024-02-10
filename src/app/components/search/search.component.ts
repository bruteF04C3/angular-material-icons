import { Component, Signal, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormField, MatInput, MatIcon],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {

  constructor(
    private dataService: DataService
  ){}

  onSearchUpdated(sq: string) {
    this.dataService.onSearchUpdated(sq);
  }
}
