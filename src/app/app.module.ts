import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RecruiterDashboardComponent } from './Recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { CandidateDashboardComponent } from './candidate/candidate-dashboard/candidate-dashboard.component';
import { CollegeProfileComponent } from './Recruiter/college-profile/college-profile.component';
import { PostJobComponent } from './Recruiter/post-job/post-job.component';
import { ManageJobComponent } from './Recruiter/manage-job/manage-job.component';
import { AppliedCandidateComponent } from './Recruiter/applied-candidate/applied-candidate.component';
import { ProfileComponent } from './Recruiter/profile/profile.component';
import { ChangePasswordComponent } from './Recruiter/change-password/change-password.component';
import { DeleteProfileComponent } from './Recruiter/delete-profile/delete-profile.component';
import { LogoutComponent } from './Recruiter/logout/logout.component';
import { MessageComponent } from './Recruiter/message/message.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminDashboardComponent,
    RecruiterDashboardComponent,
    CandidateDashboardComponent,
    CollegeProfileComponent,
    PostJobComponent,
    ManageJobComponent,
    AppliedCandidateComponent,
    ProfileComponent,
    ChangePasswordComponent,
    DeleteProfileComponent,
    LogoutComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgToastModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
