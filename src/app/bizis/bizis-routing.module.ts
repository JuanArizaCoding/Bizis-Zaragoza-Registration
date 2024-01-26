import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizisListComponent } from './bizis-list/bizis-list.component';
import { BizisMapComponent } from './bizis-map/bizis-map.component';

const routes: Routes = [
  {
    path: 'list',
    component: BizisListComponent
  },
  {
    path: 'map',
    component: BizisMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BizisRoutingModule { }
