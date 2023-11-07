import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  @Output() pageToShow = new EventEmitter<string>();

  constructor() { }

  onSelect(page: string) {
    this.pageToShow.emit(page)
  }
}
