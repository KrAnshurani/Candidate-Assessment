import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  time: string = '';

  onFocus() {
    if (this.time === '') {
      this.time = 'HH:MM:SS';
    }
  }

  onBlur() {
    if (this.time === 'HH:MM:SS') {
      this.time = '';
    }
  }
  isVisible: boolean = false;

  showPopup(): void {
    this.isVisible = true;
  }

  hidePopup(): void {
    this.isVisible = false;
  }

}
