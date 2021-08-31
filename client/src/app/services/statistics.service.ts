import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistic } from '../dto/ststisitc';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }
  getList()
  {
    
    return this.http.get<Statistic[]>("/api/statistic/")  
  }

}
