import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	public collapsed: boolean = true;

	/* handles to hamburger and dropdown-menu options */
	@ViewChild('dropdownOptions') dropdownOptions: ElementRef;
	@ViewChild('dropdownHamburger') dropdownHamburger: ElementRef;

	/* event listener to close the dropdown-menu if clicked out of it */
  @HostListener('document:click', ['$event'])
  private clickout(event) {
		if (this.dropdownHamburger.nativeElement.contains(event.target)) {
			return;
		}
    if (!this.dropdownOptions.nativeElement.contains(event.target)) {
      this.collapsed = true;
    }
  }

  constructor() { }

  ngOnInit() {
	}

}
