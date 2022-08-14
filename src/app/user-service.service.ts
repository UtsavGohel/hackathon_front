import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userid:any;
  userName:any;
  userdata:any;

  constructor(private router: Router) { }
 
  onDashboard() {
    this.router.navigate(['candidate-dashboard']).then(() => {
      window.location.reload()
    })
  }
  ListOfJobs() {
    this.router.navigate(['ListOfJobs']).then(() => {
      window.location.reload()
    })
  }
  appliedJob() {
    this.router.navigate(['appliedJob']).then(() => {
      window.location.reload()
    })
  }
  onLogout(){
    this.router.navigate(['']).then(() => {
      window.location.reload()
    })
  }
}
