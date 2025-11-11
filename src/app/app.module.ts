import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotModalComponent } from './components/chatbot-modal/chatbot-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeAltComponent } from './pages/home-alt/home-alt.component';
import { PricingComponent } from './pages/pricing/pricing.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    IconComponent,
    HeaderComponent,
    FooterComponent,
    ChatbotModalComponent,
    HomeComponent,
    DemoComponent,
    ServicesComponent
  ],
  providers: [],
  declarations: [
    HomeAltComponent,
    PricingComponent
  ]
})
export class AppModule { }
