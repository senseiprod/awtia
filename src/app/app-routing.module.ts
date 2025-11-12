import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeAltComponent } from './pages/home-alt/home-alt.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

export const routes: Routes = [  
  {
    path: "",
    component: HomeAltComponent,
  },
  {
    path: "home-original",
    component: HomeComponent,
  },
    {
    path: "documentation",
    component: DocumentationComponent,
  },
  {
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "demo",
    component: DemoComponent,
  },
  {
    path: "pricing",
    component: PricingComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
