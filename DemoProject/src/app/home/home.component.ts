import { Component, OnInit } from '@angular/core';
import { DashboradServiceService } from '../dashborad-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(private _dashServ:DashboradServiceService){}

 ngOnInit(): void {
   console.log(this._dashServ.commonNew);
 }
}
