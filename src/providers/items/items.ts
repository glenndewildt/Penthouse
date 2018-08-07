import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import {Item} from "../../models/item";

@Injectable()
export class Items {
    items: Item[] = [];

  constructor(public api: Api) { }

  query(params?: any) {

      //const t: any[] = Array.of(this.api.get('userTasks', params));

      // let t = this.api.get('userTasks').share();
      //
      // t.subscribe( data => {
      //         let s = JSON.stringify(data);
      //         alert(s);
      //         return  data;
      //     },
      //     error => console.log(error),
      //     () => console.log("done")
      // );
      return this.api.get('userTasks')

  }


  add(item: Item) {
  }

  delete(item: Item) {
  }

}
