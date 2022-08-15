import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-manage-recruiter',
  templateUrl: './manage-recruiter.component.html',
  styleUrls: ['./manage-recruiter.component.css']
})
export class ManageRecruiterComponent implements OnInit {

  constructor(public adminService:AdminServiceService,private service:AdminServiceService,private http:HttpClient,private toast:NgToastService) { }
  CollegeList: any;
  StreamList: any;
  recData: any;
  
  ngOnInit(): void {
    this.service.getRecruiterData().subscribe((data)=>{
      this.recData = data;
  })
  }

  
}
