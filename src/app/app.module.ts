import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SliderComponent } from './pages/slider/slider.component';
import { MainComponent } from './pages/main/main.component';
import { LproComponent } from './pages/lpro/lpro.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MainComponent,
    LproComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent  //components , pipes , directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //modules
    HttpClientModule
  ],
  providers: [],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
