import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss']
})
export class ColorCardComponent implements OnInit {


  @Input('color_name') colorName?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
