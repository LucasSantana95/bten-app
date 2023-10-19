import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsListComponent } from './components/equipments-list/equipments-list.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';

const routes: Routes = [
  {
    path: '', component: EquipmentsListComponent,
  },
  {
    path: 'details/:id', component: EquipmentDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
