import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-template-design-system-etat';

  private script1? : HTMLScriptElement;

  private script2? : HTMLScriptElement;

  constructor(router:Router){
    router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd) {
        this.launchJs();
      }
  });
  }

  private launchJs(){
    console.log('js gouv')
    if(this.script1)
    this.script1.remove();

    if(this.script2)
    this.script2.remove();

    let s = document.createElement('script');
    s.type = 'module';
    s.src = '/@gouvfr/js/dsfr.module.min.js';
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(s);
    this.script1 = s;

    s = document.createElement('script');
    s.type = 'text/javascript';
    s.noModule = true;
    s.src = '/@gouvfr/js/dsfr.nomodule.min.js';
    head = document.getElementsByTagName('head')[0];
    head.appendChild(s);
    this.script2 = s;
  }
}
