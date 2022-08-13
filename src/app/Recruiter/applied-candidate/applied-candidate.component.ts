import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-applied-candidate',
  templateUrl: './applied-candidate.component.html',
  styleUrls: ['./applied-candidate.component.css']
})
export class AppliedCandidateComponent implements OnInit {

  p: number = 1;
  public userId:any = localStorage.getItem('rec_id');
  public candidateList:any =[];

  constructor(private router:Router, public service:AppService, private httpService:ServiceService) { }

  ngOnInit(): void {

    this.httpService.getCandidateList(this.userId).subscribe((res:any)=>{
      this.candidateList = res;
      this.candidateList.forEach((element:any) => {
        this.httpService.getStatusById(element.statusId).subscribe((res:any)=>{          
          element['status'] = res.name;
        })
      });
    })
  }
  
}