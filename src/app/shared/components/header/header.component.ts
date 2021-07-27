import { Component, OnInit } from '@angular/core';
import { name, version, description } from '../../../../../package.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName = name + ' ' + version;
  appDescription = description;

  constructor() { }

  ngOnInit(): void {
  }

}
