import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {

  parts = [
    {
      title: 'Une partie',
      text: 'Des détails de cette partie, afin d\'expliquer mieux la partie',
    },
    {
      title: 'Une autre partie',
      text: 'Des détails de cette partie, afin d\'expliquer mieux la partie',
    },
    {
      title: 'Une troisième partie',
      text: 'Des détails de cette partie, afin d\'expliquer mieux la partie',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
