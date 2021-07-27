import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './pages/colors/colors.component';
import { ComponentsComponent } from './pages/components/components.component';
import { FormComponent } from './pages/form/form.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RessourcesComponent } from './pages/ressources/ressources.component';
import { TypographyComponent } from './pages/typography/typography.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: LandingComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'formulaire',
    component: FormComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'ressources',
    component: RessourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
