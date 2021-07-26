import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherProvider {

  apikey = '30f9db1baeaf8e26b233448a00e94302';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city, state) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + '&appid=' + this.apikey + '&units=metric');
  }

}
