import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TradingviewWidgetModule } from 'tradingview-widget'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TradingviewWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
