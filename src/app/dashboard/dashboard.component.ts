import { Component , Renderer2} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private renderer: Renderer2) {}

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
    this.renderer.addClass(document.body, 'popup-open');
  }

  hidePopup(): void {
    this.isVisible = false;
    this.renderer.removeClass(document.body, 'popup-open');
  }
  isSidenavOpen = false;
   
}
