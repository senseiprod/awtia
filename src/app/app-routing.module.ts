import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeAltComponent } from './pages/home-alt/home-alt.component';

export const routes: Routes = [{
    path: "",
    component: HomeComponent,
  },
  {
    path: "services",
    component: ServicesComponent,
  },
    {
    path: "alt",
    component: HomeAltComponent,
  },
  {
    path: "demo",
    component: DemoComponent,
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
