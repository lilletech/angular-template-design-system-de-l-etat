import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {


  @Input() title?: string;
  @Input() desc?: string;
  @Input() url?: string;

  @Input() img = false;


  constructor() { }

  ngOnInit(): void {
  }

}
