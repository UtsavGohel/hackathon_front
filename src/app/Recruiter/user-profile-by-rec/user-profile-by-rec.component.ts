import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-profile-by-rec',
  templateUrl: './user-profile-by-rec.component.html',
  styleUrls: ['./user-profile-by-rec.component.css']
})
export class UserProfileByRecComponent implements OnInit {
  CandidateId:any;
  CandidateInfo:any;
  constructor(public service:AppService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.CandidateId = this.route.snapshot.paramMap.get('candidateId');
    this.service.getUserData(this.CandidateId).subscribe((data)=>{
      this.CandidateInfo=data;
      console.log(data);
    },(err)=>{
      console.log(err);
      
    })
  }

}
