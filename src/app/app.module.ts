import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './pages/components/components.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './pages/form/form.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { RessourcesComponent } from './pages/ressources/ressources.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ComponentsComponent,
    FormComponent,
    TypographyComponent,
    ColorsComponent,
    RessourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
