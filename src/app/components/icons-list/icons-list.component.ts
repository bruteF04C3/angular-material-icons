import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Icon } from '../../icon.interface';
import { Icons } from '../../constants';
import { IconCardComponent } from '../icon-card/icon-card.component';
import { DataService } from '../../data.service';
import { Util } from '../../util';

@Component({
  selector: 'app-icons-list',
  standalone: true,
  imports: [IconCardComponent],
  templateUrl: './icons-list.component.html',
  styleUrl: './icons-list.component.sass',
})
export class IconsListComponent implements OnInit {
  icons: Icon[] = Icons;
  filteredIcons: Icon[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.searchQuery$.subscribe((value: string) => {
      this.debouncedFilterIcons(value);
    });
  }

  private filterIcons(value: string): Icon[] {
    return this.icons.filter((icon) =>
      icon.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  private debouncedFilterIcons = Util.debounce((value: string) => {
    this.filteredIcons = this.filterIcons(value);
  }, 300);
}
