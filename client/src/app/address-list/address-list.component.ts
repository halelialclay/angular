import { Component, OnInit } from '@angular/core';
import { SettInIsraelListService } from '../services/sett-in-israel-list.service';
import { ToastModule } from 'primeng/toast';
import { Address } from '../dto/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: []
})
export class AddressListComponent implements OnInit {
  sett:any[]
  selectedsett:any;
  addresses:Address[]
  newAdd:boolean=false
  newAddAndSett:Address

  searchQuery:string;
  searchResults:{name, latitude, longitude}[];
  

  constructor(private SettInIsrael: SettInIsraelListService) { }

  ngOnInit(): void {
    this.SettInIsrael.getSettInList()
      .subscribe(d=>this.sett=d)
  }

  openNew(){
   this.newAdd=true

  }
  getAddressList(){
   
this.SettInIsrael.getAddresses(this.selectedsett._id)
      .subscribe(add=>this.addresses=add)
  }

 addAddress(newAdd){

 }

 searchLocation() {
  this.SettInIsrael.searchLocations(this.searchQuery + " " + this.selectedsett.name)
  .subscribe(add=>{
    this.searchResults = [];

    if (add.resourceSets.length > 0){

      add.resourceSets.forEach(e=>{

          let r={
            name:e.resources[0].name,
            latitude : e.resources[0].point.coordinates[0],
            longitude : e.resources[0].point.coordinates[1]          
          }

          this.searchResults.push(r)
        }
      )
   }  

   
  })
}


  saveAddress(add:any){
    this.newAddAndSett={_id:null,settId:this.selectedsett._id,address:add.name, latitude:add.latitude,longitude:add.longitude   }
    this.SettInIsrael.newAddress(this.newAddAndSett).subscribe(d=>{this.getAddressList()});
    this.newAdd = false;
  }

  deleteAdd(addr){
  this.SettInIsrael.deleteAdd(addr._id).subscribe(d=>{this.addresses=d})
  }




}
