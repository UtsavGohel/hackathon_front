import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router: Router,public service:UserServiceService) { }
  onDashboard() {
    this.router.navigate(['recruiter-dashboard']).then(() => {
      window.location.reload()
    })
  }
  ListOfJobs() {
    this.router.navigate(['message']).then(() => {
      window.location.reload()
    })
  }
}
