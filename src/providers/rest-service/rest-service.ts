import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let apiUrl = 'http://109.228.50.32:8080/ords/fluidapex/fb/';

@Injectable()
export class RestServiceProvider {

  constructor(public http: HttpClient) {}

  getClasses() {
      return this.http.get(apiUrl+'classes/');
  }

}
