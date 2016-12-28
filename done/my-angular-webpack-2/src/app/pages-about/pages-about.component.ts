import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pages-about',
  // styleUrls: ['./pages-about.component.sass']
  templateUrl: './pages-about.component.html',
})
export class PagesAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hello Pages About');
  }

}
