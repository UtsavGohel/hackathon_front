import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-profile-by-rec',
  templateUrl: './user-profile-by-rec.component.html',
  styleUrls: ['./user-profile-by-rec.component.css']
})
export class UserProfileByRecComponent implements OnInit {
  CandidateId:any;
  statusName:any;
  CandidateInfo:any;
  constructor(public service:AppService,private route:ActivatedRoute,public http:HttpClient,private recService:ServiceService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/getStatusName').subscribe((data)=>{
      this.statusName = data;
      console.log(data);
      
    })
    this.CandidateId = this.route.snapshot.paramMap.get('candidateId');
    this.service.getUserData(this.CandidateId).subscribe((data)=>{
      this.CandidateInfo=data;
      console.log(data);
    },(err)=>{
      console.log(err);
      
    })
  }
  statusUpdate(id:any){
    console.log(id);
    this.recService.updateStatus(id,this.CandidateId).subscribe((data)=>{
      console.log(data);
    },(err)=>{
      console.log(err);
      
    })
    
    
  }

}
