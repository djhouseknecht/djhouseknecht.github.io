import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-image',
  templateUrl: './nav-image.component.html',
  styleUrls: ['./nav-image.component.scss']
})
export class NavImageComponent implements OnInit {

@Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
