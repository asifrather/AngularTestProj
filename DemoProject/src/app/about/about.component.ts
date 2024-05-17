import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboradServiceService } from '../dashborad-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  public username:string=''
  public password:string=''


  constructor( private _serv:DashboradServiceService,private _route:Router){

  }

  ngOnInit(): void {
    this._serv.commonNew='khalid'
    console.log(this._serv.commonNew)
  }


  public submitForm(form:NgForm){
    console.log(form.value)
    console.log(form.touched)
    console.log(form.valid)
    alert(form.valid)

    this._route.navigate(['home',2])




  }

}
