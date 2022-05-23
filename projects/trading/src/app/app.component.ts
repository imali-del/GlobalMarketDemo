import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ITradingViewWidget, Themes } from 'tradingview-widget'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  widgetConfig: ITradingViewWidget = {
    symbol: 'MSFT',
    widgetType: 'widget',
    allow_symbol_change: true,
    height: 540,
    width: 980,
    hideideas: true,
    hide_legend: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    theme: Themes.LIGHT,
  };
  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  title = 'GlobalMarket';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
