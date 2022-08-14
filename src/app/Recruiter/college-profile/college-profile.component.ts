import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-college-profile',
  templateUrl: './college-profile.component.html',
  styleUrls: ['./college-profile.component.css']
})
export class CollegeProfileComponent implements OnInit {
  public formCollege:FormGroup;
  constructor(private router:Router, public service:AppService) { }

  ngOnInit(): void {
    this.formCollege = new FormGroup({
      recruiterId: new FormControl(localStorage.getItem('rec_id')),
      collegeName: new FormControl(''),
      Address: new FormControl(''),
      contact: new FormControl(''),
      estSince: new FormControl(''),
      description: new FormControl(''),
      fbPage: new FormControl(''),
      twitterPage: new FormControl(''),
      linkdinPage: new FormControl(''),
      instagramPage: new FormControl(''),
      youtubePage:new FormControl('')
    })
  }


}
