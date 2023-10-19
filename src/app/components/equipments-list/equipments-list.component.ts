import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/equipment';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['./equipments-list.component.css']
})
export class EquipmentsListComponent implements OnInit {
  constructor(private service : ApiService){}
  dados! : Observable<Equipment[]>

  ngOnInit(): void {
    this.dados = this.service.getAllEquipments()
  }
}
