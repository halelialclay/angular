import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Statistic } from '../dto/ststisitc';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: []
})
export class StatisticsComponent implements OnInit {
Bday:boolean=true;
Bmonth:boolean=false;
Bweek:boolean=false;
data: any;
dayData:any;
monthData:any;
weekData:any;
dayOptions:any;
date:Date=new Date;
options:any;
basicOptions;
todayDate = this.convertDate(new Date().toISOString().slice(0, 10));
 a = this.convertDate(new Date().toISOString().slice(0, 10));
constructor(private statistics:StatisticsService) { }

ngOnInit(): void {

    this.options = {
        title: {
            display: true,
            text: 'My Title',
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        }
    };
    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
        }
    };



    
this.dayData = 
    
   this.statistics.getList().subscribe(d=>{
    this.convertDate(d[0].date)
    
    
      this.dayData = {
          
        labels:d.filter(f=>{
          
            
         
           return this.convertDate(f.date)==this.todayDate;
        }
      
        )
        .map(x=> {

            return x.userId.firstName}
        ),


        datasets: [
            {
                label: 'תכנון חלוקה',
                backgroundColor:'#b8e3a9',
                data: d.filter(f=>
                    this.convertDate(f.date)==this.todayDate).map(t=>
                        {return t.addressesBit.length})

            },
            {
                label: 'ביצוע',
                backgroundColor: '#a4a5a7',
                data:  d.filter(f=>this.convertDate(f.date)==this.todayDate
                ).map(t=>
                {
                    return t.addressesBit.
                    filter(x=>
                    {
                         return x==1
                    }).length
                }
                    )
                    
            }
        ]
    };



    this.weekData = {
        labels:d.filter(element=>
           this.getWeek(this.convertDate(element.date))
        ).map(element1=>element1.settId.name).filter((x,i,a)=>a.indexOf(x)===i),
        datasets: [
            {
                data:this.aa(
                    d.filter(element=>
                {   
                    return this.getWeek(this.convertDate(element.date))
                    
                }).map(x=> {return{
                    "name":x.settId.name,"addressesBit":x.addressesBit.reduce((x,y)=>y==1?x+1:x)
                }})
   

                ),
                
                backgroundColor: [
                    "#a5bdeb",
                    '#ebd3a5',
                    "#a5e0eb",
                    "#e0eba5",
                    "#d3a5eb",
                    "#a5ebd3",
                    '#ebb0a5'
                    
                ],
                hoverBackgroundColor: [
                    "#a5bdeb",
                    '#ebd3a5',
                    "#a5e0eb",
                    "#e0eba5",
                    "#d3a5eb",
                    "#a5ebd3",
                    '#ebb0a5'
                    
                ]
            }
        ]
    }


    this.monthData = {
        labels:d.filter(element=>
           this.getMonth(this.convertDate(element.date))
        ).map(element1=>element1.settId.name).filter((x,i,a)=>a.indexOf(x)===i),
        datasets: [
            {
                data:this.aa(
                    d.filter(element=>
                {   
                    return this.getMonth(this.convertDate(element.date))
                    
                }).map(x=> {return{
                    "name":x.settId.name,"addressesBit":x.addressesBit.reduce((x,y)=>y==1?x+1:x)
                }})
   

                ),
                
                backgroundColor: [
                    "#a5bdeb",
                    '#ebd3a5',
                    "#a5e0eb",
                    "#e0eba5",
                    "#d3a5eb",
                    "#b0a5eb",
                    '#ebb0a5',
                    "#a5ebb0",
                    "#eba5e0",
                    "#b0a5eb",
                    '#b8e3a9',
                    '#a4a5a7'
                ],
                hoverBackgroundColor: [
                    "#a5bdeb",
                    '#ebd3a5',
                    "#a5e0eb",
                    "#e0eba5",
                    "#d3a5eb",
                    "#a5ebd3",
                    '#ebb0a5',
                    "#a5ebb0",
                    "#eba5e0",
                    "#b0a5eb",
                    '#b8e3a9',
                    '#a4a5a7'
                ]
            }
        ]
    }
  

   

    })
  
    this.updateChartOptions()

    this.dayOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
        }
    };

  
    





  }


  updateChartOptions(){
    
     


  }
aa(d:{"name":string,"addressesBit":number}[]){
    let flag=false
    let vector:{"name":string,"sum":number}[]=[]
    d.forEach(element => {
        if(vector.length>0){
           for(var i=0;i<vector.length;i++)
           {
              
               if(vector[i].name==element.name){
              
                vector[i].sum=(vector[i].sum.valueOf()+element.addressesBit.valueOf())
                flag=true

               }

           }
           if(flag==false){
            vector.push({"name":element.name,"sum":element.addressesBit})
           }
           flag=false

        }
        else{

                vector.push({"name":element.name,"sum":element.addressesBit})
            
        }

        
    });

  
return vector.map(x=>x.sum)
   
  }

day(){
this.Bday=true;
this.Bweek=false;
this.Bmonth=false;


}
week(){
  this.Bday=false;
  this.Bweek=true;
  this.Bmonth=false;

}
 month(){
  this.Bday=false;
  this.Bweek=false;
  this.Bmonth=true;

 }
 

  getToday():Date{
    let d = new Date()
   d.setMonth(d.getMonth()+1)
return d;
   

  }
   getDaysInMonth(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month

   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };

  getMonth(x:number){

    var curr = new Date; // get current date
    var first =1; // First day is the day of the month - the day of the week

    var last = this.getDaysInMonth(curr.getMonth(),curr.getFullYear()); // last day is the first day + 6
    var firstday = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    var lastday = new Date(curr.setDate(last)).toISOString().slice(0, 10);


   
    if(this.convertDate(firstday)<=x && this.convertDate(lastday)>=x)
  {  return true}
    return false
 

  }
 

  getWeek(x:number){

      var curr = new Date; // get current date
      var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last = first + 6; // last day is the first day + 6
      
      var firstday = new Date(curr.setDate(first)).toISOString().slice(0, 10);
      var lastday = new Date(curr.setDate(last)).toISOString().slice(0, 10);
     
      if(this.convertDate(firstday)<=x && this.convertDate(lastday)>=x)
    {  return true}
      return false
   
   
   
   

  }


  convertDate(x:any){
      let d:any[]=x.toString().split(/[-,T]/)
      let a= Date.UTC(d[0],d[1],d[2]);
      return a;

  }
  
  

}
