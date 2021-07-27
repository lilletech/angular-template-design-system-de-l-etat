import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss']
})
export class ArianeComponent implements OnInit {

  @Input() items?: Array<{
    label: string
    url?: string
  }>;
  constructor() { }

  ngOnInit(): void {
  }

}
