import { Component, OnInit } from '@angular/core';
import { DashboradServiceService } from '../dashborad-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit{
  constructor(private _serv:DashboradServiceService,private _route:Router){
    console.log('hell inside conso')
  }
  public message:string='hello user'
  // messgae='hello';
  public showDiv:boolean=true
  public records=[
    {id:1,name:'zahid'},
    {id:1,name:'zahid'},
    {id:1,name:'zahid'},
    {id:1,name:'zahid'},
    {id:1,name:'zahid'},
    {id:1,name:'zahid'},
    {id:1,name:'zahid'},
    {id:1,name:'zahid'}
  ]

  showDate=new Date();
  apiResp:any;
  ngOnInit(){
    console.log('hello inside hook');
    this._serv.getProducts().subscribe(res=>{
      console.log(res);
      this.apiResp=res;
    })
  }

  public testMessage(name:any){
    this.message=`i hv chnaged this message ${name} `
  }

  public show(){
    this.showDiv=true
  }

  public hide(){
    this.showDiv=false

  }
  edit(data:any){
    console.log(data.id)
    this._route.navigate(['home',data.id])
  }




}
