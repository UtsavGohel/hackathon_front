import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-applyfor-job',
  templateUrl: './applyfor-job.component.html',
  styleUrls: ['./applyfor-job.component.css']
})
export class ApplyforJobComponent implements OnInit {

  constructor(public userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
