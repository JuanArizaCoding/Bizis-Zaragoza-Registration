import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BizisRoutingModule } from './bizis-routing.module';
import { BizisListComponent } from './bizis-list/bizis-list.component';
import { BizisMapComponent } from './bizis-map/bizis-map.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BizisListComponent,
    BizisMapComponent
  ],
  imports: [
    CommonModule,
    BizisRoutingModule,
    NgbPaginationModule
  ]
})
export class BizisModule { }
