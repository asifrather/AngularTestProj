import { Component, OnInit } from '@angular/core';
import { DashboradServiceService } from '../dashborad-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(private _dashServ:DashboradServiceService,private _param:ActivatedRoute){
 }

 public registrationForm:any;
public localData :any;

 ngOnInit(): void {
   //console.log(this._dashServ.commonNew);
  //  this._param.paramMap.subscribe((res:any)=>{
  //   let resp=res
  //   console.log(resp.params.id)
  //  });

  this.registrationForm=new FormGroup({ 
    name:new FormControl(),
    password:new FormControl(null),
    address:new FormControl(null),
    contact:new FormControl(null)
   }) 

   //console.log(this._param.snapshot.paramMap.get('id')); 

   this._dashServ.getProducts().subscribe(res=>{    
    this.localData=res;
    console.log(this.localData[0].category)
    this.registrationForm.controls['name'].setValue(this.localData[0].category);
    this.registrationForm.controls['name'].setValue(this.localData[0].category);
    this.registrationForm.controls['name'].setValue(this.localData[0].category);
    this.registrationForm.controls['name'].setValue(this.localData[0].category);
    this.registrationForm.controls['name'].setValue(this.localData[0].category);
    this.registrationForm.controls['name'].setValue(this.localData[0].category);

  })

   console.log(this.localData)

   
   
 }
 
 postData(){
  console.log(this.registrationForm.value)
 }
}
