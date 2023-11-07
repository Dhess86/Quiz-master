import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() pageToShow = new EventEmitter<string>();


  onSelect(page: string) {
    this.pageToShow.emit(page)
  }
}
