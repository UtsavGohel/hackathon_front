import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './candidate/candidate-dashboard/candidate-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppliedCandidateComponent } from './Recruiter/applied-candidate/applied-candidate.component';
import { ChangePasswordComponent } from './Recruiter/change-password/change-password.component';
import { CollegeProfileComponent } from './Recruiter/college-profile/college-profile.component';
import { DeleteProfileComponent } from './Recruiter/delete-profile/delete-profile.component';
import { LogoutComponent } from './Recruiter/logout/logout.component';
import { ManageJobComponent } from './Recruiter/manage-job/manage-job.component';
import { MessageComponent } from './Recruiter/message/message.component';
import { PostJobComponent } from './Recruiter/post-job/post-job.component';
import { ProfileComponent } from './Recruiter/profile/profile.component';
import { RecruiterDashboardComponent } from './Recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { ProfessorDataComponent } from './Recruiter/professor-data/professor-data.component';


const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'homepage',component:HomePageComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'recruiter-dashboard',component:RecruiterDashboardComponent},
  {path:'candidate-dashboard',component:CandidateDashboardComponent},
  {path:'applied-candidate',component:AppliedCandidateComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'college-profile',component:CollegeProfileComponent},
  {path:'delete-profile',component:DeleteProfileComponent},
  {path:'logout',component:LogoutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'manage-job',component:ManageJobComponent},
  {path:'post-job',component:PostJobComponent},
  {path:'message',component:MessageComponent},
  {path:'professor-data',component:ProfessorDataComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
