import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['./equipments-list.component.css']
})
export class EquipmentsListComponent implements OnInit {
  constructor(private service : ApiService){}
  dados : any

  ngOnInit(): void {
      this.dados = this.service.getAllEquipments()
  }
}
