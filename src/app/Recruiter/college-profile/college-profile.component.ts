import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-college-profile',
  templateUrl: './college-profile.component.html',
  styleUrls: ['./college-profile.component.css']
})
export class CollegeProfileComponent implements OnInit {

  constructor(private router:Router, public service:AppService) { }

  ngOnInit(): void {
  }


}
