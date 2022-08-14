import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(public userService:UserServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem('user_id')    
    this.userName = localStorage.getItem('user_name')
    this.http.get('http://localhost:3000/AllJobsList').subscribe((data)=>{
      this.JobData = data
      console.log(data);
      
    },((err)=>{
      console.log(err);
      
    }))
  }
  applyJob(){
    
    
  }

}
