import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-not-found',
  template: `
    <p>
      Niestety strony nie znaleziono
    </p>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
