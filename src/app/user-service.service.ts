import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userid:any;
  // userName:any;
  userdata:any;

  public userName:any = localStorage.getItem('user_name');

  constructor(private router: Router,private http:HttpClient) { }
 
  onDashboard() {
    this.router.navigate(['candidate-dashboard']).then(() => {
      window.location.reload()
    })
  }

  getUserData(userId:any){
    return this.http.get('http://localhost:3000/user_details/'+userId)
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
  userProfile(){
    this.router.navigate(['user-profile']).then(() => {
      window.location.reload()
    })
  }
  changePassword() {
    this.router.navigate(['user-change-password']).then(() => {
      window.location.reload()
    })
  }
  onLogout(){
    this.router.navigate(['']).then(() => {
      window.location.reload()
    })
  }

  editUserData(data:any){
    return this.http.put('http://localhost:3000/editUser_register', data);
  }
}
