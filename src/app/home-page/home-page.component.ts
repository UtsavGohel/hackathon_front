import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';
import { ServiceService } from '../service.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;
  formLoginAdmin: FormGroup;
  formLoginCandidate: FormGroup;
  formLoginRecruiter: FormGroup;
  CollegeList: any;
  StreamList: any;
  
  constructor(private location: LocationStrategy, private http:HttpClient,private router:Router,private toast:NgToastService,private service:ServiceService) {
    // preventing back button in browser implemented by "Samba Siva"  
    history.pushState(null, "null", window.location.href);  
      this.location.onPopState(() => {
        history.pushState(null, "null", window.location.href);
        });
    }

  ngOnInit(): void {
    this.service.getCollegeData().subscribe((data:any)=>{
      this.CollegeList = data;      
    }),
    this.service.getStreamData().subscribe((data:any)=>{
      this.StreamList = data;
    })
    this.form =new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      address:new FormControl(''),
      contact:new FormControl(''),
      experience:new FormControl(''),
      collegeId:new FormControl(''),
      streamId:new FormControl(''),
      subjects:new FormControl(''),
      resume:new FormControl(''),
      notice_period:new FormControl(''),
      DOB:new FormControl(Date.now)
      
    })
    this.formLoginCandidate = new FormGroup({
      email:new FormControl('user@gmail.com'),
      password:new FormControl('1')
    })
    this.formLoginRecruiter = new FormGroup({
      email:new FormControl('rec@gmail.com'),
      password:new FormControl('1')
    })
    this.formLoginAdmin = new FormGroup({
      email:new FormControl('admin@gmail.com'),
      password:new FormControl('admin')
    })
  }
  contentEditable:Boolean
  checkboxEvent(event:any){
    if ( event.target.checked ) {
      this.contentEditable = true;
 }
  }
  RegisterSubmit(){
    if(this.contentEditable==true){
      this.http.post('http://localhost:3000/user_register',this.form.getRawValue(),{responseType: 'text'})
      .subscribe((res)=>{
        this.toast.success({detail:"Registration Succesfull",summary:"",duration:5000})
        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });    
      },(err)=>{
        this.toast.error({detail:"Fill All The Details",summary:"Try Again",duration:5000})
        console.log(err);
      }) 
    }else{
      this.toast.success({detail:"Please Accept The Terms And Condition",summary:"",duration:5000})
    }

  }
  CandidateLogin(){
    this.http.post('http://localhost:3000/user_login',this.formLoginCandidate.getRawValue(),{
      withCredentials:false
    }).subscribe((res:any)=>{      
      this.toast.success({detail:"Login Succesful",summary:"",duration:5000})
      localStorage.setItem("user_id",res.data.id)
      this.router.navigate(['candidate-dashboard']).then(()=>
      {
        this.toast.success({detail:"Logout Succesful",summary:"",duration:5000})        
        window.location.reload()
      })
    },(err)=>{
      this.toast.error({detail:"Invalid Credential",summary:"Try Again",duration:5000})
      console.log(err);
    })
  }
  AdminLogin(){
    if(this.formLoginAdmin.value.email == 'admin@gmail.com' && this.formLoginAdmin.value.password=='admin'){
      this.router.navigate(['admin-dashboard']).then(()=>
      {
        window.location.reload()
        this.toast.success({detail:"Logout Succesful",summary:"",duration:5000})
      })
    }
  }
  RecruiterLogin(){    
    this.http.post('http://localhost:3000/recruiter_login',
    this.formLoginRecruiter.getRawValue(),{      
      withCredentials:false
    }).subscribe((res:any)=>{
      this.toast.success({detail:"Login Succesful",summary:"",duration:5000})
      localStorage.setItem("rec_id",res.data.id)
      localStorage.setItem("rec_name",res.data.name)
      this.router.navigate(['recruiter-dashboard']).then(()=>
      {        
        window.location.reload()
      })
    },(err)=>{
      this.toast.error({detail:"Invalid Credential",summary:"Try Again",duration:5000})
      console.log(err);
    })
  }
  

}
