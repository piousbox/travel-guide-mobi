import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pages-about',
  templateUrl: './pages-about.component.html',
  styleUrls: ['./pages-about.component.sass']
})
export class PagesAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hello Pages About');
  }

}
