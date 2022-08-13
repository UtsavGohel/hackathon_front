import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  public postJobForm:FormGroup;
  streamList: any;
  stateList: any;
  jobTypeList: any;
  
  
  constructor(private router:Router, public service:AppService, private httpservice:ServiceService, private toast:NgToastService) { }
  
  ngOnInit(): void {
    this.httpservice.getStreamData().subscribe((data:any)=>{
      this.streamList = data;
    }),
    this.httpservice.getStateData().subscribe((data:any)=>{
      this.stateList = data;
    }),
    this.httpservice.getJobTypeData().subscribe((data:any)=>{
      this.jobTypeList = data;
    }),
    this.postJobForm = new FormGroup({
      recruiterId: new FormControl(localStorage.getItem('rec_id')),
      jobTitle: new FormControl(''),
      jobDescription: new FormControl(''),
      noOfOpening: new FormControl(''),
      jobTypeId: new FormControl(''),
      streamId: new FormControl(''),
      experience: new FormControl(''),
      qualification: new FormControl(''),
      stateId: new FormControl(''),
      city: new FormControl('')
    })
  }

  applyJob(){
    this.httpservice.postJob(this.postJobForm.getRawValue()).subscribe((data:any)=>{
      this.toast.success({detail:"Added Job Successfully",summary:"",duration:5000})
      setTimeout(() => {      
        this.service.onManagejob()        
      }, 300);
    },(err=>{
      this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
    }))
  }
}
