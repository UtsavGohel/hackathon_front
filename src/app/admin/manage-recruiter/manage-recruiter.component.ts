import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-manage-recruiter',
  templateUrl: './manage-recruiter.component.html',
  styleUrls: ['./manage-recruiter.component.css']
})
export class ManageRecruiterComponent implements OnInit {

  constructor(public adminService:AdminServiceService,private service:AdminServiceService) { }
  CollegeList: any;
  StreamList: any;
  recData: any;
  
  ngOnInit(): void {
    this.service.getRecruiterData().subscribe((data)=>{
      this.recData = data;
  })
  }
}
