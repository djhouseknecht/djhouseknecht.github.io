import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-saw',
  templateUrl: './saw.component.html',
  styleUrls: ['./saw.component.scss']
})
export class SawComponent implements OnInit {

  links$: Observable<any> = this.scully.available$;

  constructor (private scully: ScullyRoutesService) { }

  ngOnInit () {
    // debug current pages
    this.links$.subscribe(links => {
      console.log(links);
    });
  }

}
