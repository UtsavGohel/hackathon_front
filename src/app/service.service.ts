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
}
