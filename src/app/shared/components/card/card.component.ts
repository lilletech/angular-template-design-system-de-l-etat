import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() title?: string;
  @Input() description?: string;
  @Input() url?: string;
  @Input() img?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
