import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../dto/user';
import { DividerService } from '../services/divider.service';

@Component({
  selector: 'app-update-divider',
  templateUrl: './update-divider.component.html',
  styleUrls: []
})
export class UpdateDividerComponent implements OnInit ,OnChanges {
  @Input() userId:string;
  curUser:User;
  submitted:boolean = false;

  constructor(private divider:DividerService ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.loadDivider();
    

  }

  ngOnInit(): void {
  

  
  }
  clikc1(){
    this.loadDivider();
  }

  loadDivider(){
    this.divider.getDivider(this.userId).subscribe(
      d=>{
        this.curUser=d
      }
      )  
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = false;
      this.divider.updateDivider(this.curUser)
        .subscribe(d=>{
        
        })

    }
    else
      this.submitted = true;
}

}
