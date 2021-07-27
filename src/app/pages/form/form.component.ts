import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  arianeItems = [
    {
      label: 'Accueil',
      url: '/'
    },
    {
      label: 'Un formulaire',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
