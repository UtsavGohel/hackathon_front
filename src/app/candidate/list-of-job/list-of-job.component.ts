import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-list-of-job',
  templateUrl: './list-of-job.component.html',
  styleUrls: ['./list-of-job.component.css']
})
export class ListOfJobComponent implements OnInit {

  public JobData:any;
  userid:any;
  userName:any;
  userdata:any;
  public job_id:any
  constructor(public userService:UserServiceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    
    this.http.get('http://localhost:3000/AllJobsList').subscribe((data)=>{
      this.JobData = data
      console.log(data);
      
    },((err)=>{
      console.log(err);
      
    }))
  }
  applyJob(jobId:any,recruiterId:any){
    this.router.navigate(['apply-for-job',{jobId: jobId,recruiterId:recruiterId}]).then(()=>{
      window.location.reload()
    })
    // console.log(jobId);
    

    
  }

}
