import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AriaCurrentPageDirective } from '../_directives/aria-current-page.directive';
import { CardComponent } from './components/card/card.component';
import { DarkModeModaleComponent } from './components/dark-mode-modale/dark-mode-modale.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { ArianeComponent } from './components/ariane/ariane.component';
import { DarkModeSwitchComponent } from './components/dark-mode-switch/dark-mode-switch.component';
import { ContrastCardComponent } from './components/contrast-card/contrast-card.component';
import { ColorCardComponent } from './components/color-card/color-card.component';
import { TileComponent } from './components/tile/tile.component';

const shared = [
  HeaderComponent,
  AriaCurrentPageDirective,
  FooterComponent,
  DarkModeModaleComponent,
  CardComponent,
  SectionComponent,
  AccordionItemComponent,
  ArianeComponent,
  DarkModeSwitchComponent,
  ContrastCardComponent,
  ColorCardComponent,
  TileComponent
];

@NgModule({
  declarations: [
    ...shared,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...shared
  ]
})
export class SharedModule { }
