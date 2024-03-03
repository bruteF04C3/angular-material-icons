import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { Icon } from '../../icon.interface';
import {ClipboardModule} from '@angular/cdk/clipboard';
@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, ClipboardModule],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.sass'
})
export class IconCardComponent {
  @Input() icon!: Icon; 
  isCopied: boolean = false;
  copyStatusIcon: string = "content_copy";

  copyIcon() {
    this.isCopied = !this.isCopied;

    if(this.isCopied) {
      this.copyStatusIcon = "done"
      setTimeout(() => {
        this.copyStatusIcon = "content_copy"
      }, 2000)
    } else {
      this.copyStatusIcon = "content_copy"
    }
  }
}
