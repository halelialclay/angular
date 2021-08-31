import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Address } from '../dto/address';
import { DivByDate } from '../dto/divByDate';
import { SettAndDate } from '../dto/settDate';
import { User } from '../dto/user';
import { DividerService } from '../services/divider.service';
import { SettInIsraelListService } from '../services/sett-in-israel-list.service';

@Component({
  selector: 'app-sett-in-israel',
  templateUrl: './sett-in-israel.component.html',
  styleUrls: []
})
export class SettInIsraelComponent implements OnInit {
  selectedsett:any;
  sett:any[];
  selectedDate:string  = this.getToday();
  saveButton:boolean=false;
  data: SettAndDate;
  addresses:Address[];
  dividers:User[];
  checkAdd:Address[];
  checkDiv:User[];
  isSaveAddress:boolean=false;
  saveAddressInDb:{"firstName":string,"addressName":string[]}[]=[];

  constructor(private SettInIsrael: SettInIsraelListService, private divider:DividerService, private messageService: MessageService) { }

  getToday(){
    let d = new Date()
    return `${d.getFullYear()}-${this.getDateParam(d.getMonth()+1)}-${this.getDateParam(d.getDate())}`;
  }

  getDateParam(n:number):string{
    return (n<10)?'0' + n: n.toString();
  }

  ngOnInit(): void {
    this.SettInIsrael.getSettInList()
      .subscribe(d=>this.sett=d)

    this.getDataForDate(this.selectedDate) 

    this.divider.getDividersList().
    subscribe(div=>this.dividers=div)
  }

  getDataForDate(date:string){
    this.SettInIsrael.getSettFromeDate(date)
      .subscribe(d=>{
        if(d._id==null){
          this.data = {
            _id: null,
            date: this.selectedDate,
            settId:null
          } 
          this.selectedsett = null;
        }
        else{
         
          this.data = d;
          this.selectedsett = this.data.settId;
          this.setChanged();        
        }
      })
  }

  dateSelected(){
    this.setChanged()    
    this.getDataForDate(this.selectedDate)

  }

  save(){
    

    let dataToSave: SettAndDate = {
      _id:this.data._id,
      settId:this.selectedsett,
      date:this.selectedDate
    }

    this.saveButton=true;

    if(dataToSave.settId!=null && dataToSave.date!=null){
      this.SettInIsrael.saveSettDate(dataToSave)
      .subscribe(d=>{this.data=d;
        this.SettInIsrael.getAddresses(dataToSave.settId)
        .subscribe(addr=>{this.addresses=addr;
          this.messageService.add({severity:'success', summary:'נשמר בהצלחה', detail:'בתאריך:'+this.selectedDate+
          '   בישוב:'+this.selectedsett})
       
        })
});
    }
  }

  saveDivByDate(){
   let divByDate:DivByDate={
    _id:null,
    date:this.data,
    addresses:this.checkAdd,
    users:this.checkDiv
  }
    this.SettInIsrael.saveDivByDate(divByDate) .subscribe(t=>{
    if(t.length==0){
      this.messageService.add({severity:'error', summary:'ERROR', detail:'לא ניתן לשבץ יותר מחלקים מכתובות'})

    }
    else{
      this.saveAddressInDb=t;
      this.isSaveAddress=true
      this.messageService.add({severity:'success', summary:'נשמר בהצלחה', detail:'לכל המחלקים נשמרו הכתובות'})
    }

    })
  }

  setChanged(){
    this.isSaveAddress=false;
    this.SettInIsrael.getAddresses(this.selectedsett)
    .subscribe(addr=>this.addresses=addr)    
  }
}
