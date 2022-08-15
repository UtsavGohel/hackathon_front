import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getCollegeData(){
    return this.http.get('http://localhost:3000/getCollege')
  }

  getStreamData(){
    return this.http.get('http://localhost:3000/getStream')
  }

  getStateData(){
    return this.http.get('http://localhost:3000/getState')
  }
  
  getJobTypeData(){
    return this.http.get('http://localhost:3000/getJobType')
  }
  
  postJob(data: any){
    return this.http.post('http://localhost:3000/jobDetails', data);
  }

  updateJob(data: any){
    return this.http.put('http://localhost:3000/jobDetails', data);
  }
  
  deleteJob(jobId:any){
    return this.http.delete('http://localhost:3000/deleteJob/'+jobId);
  }

  getJobList(recId: any){
    return this.http.get('http://localhost:3000/get_jobs/'+ recId);
  }
  
  getNumberOfApplicant(jobId:any){    
    return this.http.get('http://localhost:3000/getNumberOfApplicant/'+ jobId);
  }

  getStreamNameById(streamId:any){    
    return this.http.get('http://localhost:3000/getStreamName/'+ streamId);
  }

  getJobTypeById(typeId:any){    
    return this.http.get('http://localhost:3000/getJobType/'+ typeId);
  }

  getStatusById(statusId:any){    
    return this.http.get('http://localhost:3000/getStatusName/'+ statusId);
  }
  
  getCandidateList(recId:any){
    return this.http.get('http://localhost:3000/getCandidateList/'+ recId);
  }
  getJobDetails(jobId:any){
    return this.http.get('http://localhost:3000/job_details/'+ jobId);
  }
  getJobApplicationById(jobId:any){
    return this.http.get('http://localhost:3000/getApplications/'+ jobId);
  }
  addClgData(data:any){
    return this.http.post('http://localhost:3000/clgData', data);
  }
  getClgData(clgId:any){
    return this.http.get('http://localhost:3000/clgData/'+ clgId);
  }
  editClgData(data:any){
    return this.http.put('http://localhost:3000/clgData', data);
  }
  getRecruiterById(recId:any){
    return this.http.get('http://localhost:3000/recruiter_details/'+recId)
  }
  updateRecruiter(data:any){
    return this.http.patch('http://localhost:3000/recruiterUpdate', data)
  }
}
