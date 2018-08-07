import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Items } from '../../providers/items/items';



import { ListMasterPage } from './list-master';

@NgModule({
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),



  ],
    providers: [ Items ]
,

    exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
