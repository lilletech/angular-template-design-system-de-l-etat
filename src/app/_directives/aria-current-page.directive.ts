import { Directive, Host, HostBinding } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Directive({
  selector: '[routerLinkActive]'
})
export class AriaCurrentPageDirective {
  constructor(@Host() private rla: RouterLinkActive) {}

  get isActive():boolean {
    return this.rla.isActive;
  }

  @HostBinding('attr.aria-current') get ariaCurrent(): string | undefined {
    return this.isActive ? 'page' : undefined;
  }
}
