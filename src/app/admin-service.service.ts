import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private router: Router,private http:HttpClient) { }

  onDashboard(){
    this.router.navigate(['admin-dashboard'])
  }
  ManageRecruiter(){
    this.router.navigate(['manage-recruiter'])
  }
  GenrateCredential(){
  this.router.navigate(['generate-credential'])
}
onLogout(){
  this.router.navigate([''])
}
getRecruiterData(){
  return this.http.get('http://localhost:3000/recruiter_details')
}
AddCollegeData(){
    this.router.navigate(['add-college'])
  }
}
