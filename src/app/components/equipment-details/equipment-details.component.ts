import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/equipment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {
  data! : Equipment
  itemId!: string

  constructor(private service : ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
    });
    this.service.getEquipmentById(this.itemId).subscribe((equipment)=> {
      this.data = equipment;
    });
  }
}
