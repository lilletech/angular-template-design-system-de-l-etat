import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrast-card',
  templateUrl: './contrast-card.component.html',
  styleUrls: ['./contrast-card.component.scss']
})
export class ContrastCardComponent implements OnInit {

  @Input('card_type') cardType?: string;
  @Input() color?: string;

  @Input('bg_color') bgColor?: string;
  @Input('fg_color') fgColor?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
