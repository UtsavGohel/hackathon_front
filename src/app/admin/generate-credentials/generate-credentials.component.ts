import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AdminServiceService } from 'src/app/admin-service.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-generate-credentials',
  templateUrl: './generate-credentials.component.html',
  styleUrls: ['./generate-credentials.component.css']
})
export class GenerateCredentialsComponent implements OnInit {
  CollegeList: any;
  form: FormGroup
  constructor(private http:HttpClient,private service:ServiceService,
    private router:Router,private toast:NgToastService,public adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.service.getCollegeData().subscribe((data:any)=>{
      this.CollegeList = data;
      console.log(this.CollegeList);
      
    })
    this.form =new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      collegeId:new FormControl(''),
    })
  }
  RegisterSubmit(){
    
    this.http.post('http://localhost:3000/recruiter_register',this.form.getRawValue(),
    {responseType: 'text'})
    .subscribe((res)=>{
      console.log(res);
      this.toast.success({detail:"Recriter Registration Succesfull",
      summary:"",duration:5000})
      this.router.navigate(['admin-dashboard']).then(()=>{
        window.location.reload();
      })
 // this.toast.success({detail:"You Can Login Now ",summary:"",duration:5000})
      }
    )}
}
