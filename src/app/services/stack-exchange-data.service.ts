import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class StackExchangeDataService {

  constructor(public http: Http) {

    console.log('Data Service Connected');

  }

  getTopContributers(tag, site) {
    return this.http.get('http://api.stackexchange.com/2.2/tags/' + tag + '/top-answerers/all_time?site='+ site +'&key=IbAtMbxh9bGLVnrNZ*76Gg((').map(res => res.json());
  }

}
