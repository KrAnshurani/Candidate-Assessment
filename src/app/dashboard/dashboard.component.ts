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

  isSidenavOpen = false;
   
  isDivHidden: boolean = true;

  toggleDiv() {
    this.isDivHidden = !this.isDivHidden;
  }

  // CREATE
  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }


  // SUB SECTION
  isPopupAvailable = false;

  showSection() {
    this.isPopupAvailable = true;
  }

  hidePopup() {
    this.isPopupAvailable = false;
  }


}
