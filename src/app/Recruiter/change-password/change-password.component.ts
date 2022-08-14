import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  
  constructor(private router:Router, public service:AppService,private http:HttpClient,private toast:NgToastService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password : new FormControl('')
    })
  }
  recId:any=localStorage.getItem('rec_id');
  submit(value:any){
    this.http.patch('http://localhost:3000/change_password/'+ this.recId,value).subscribe((res)=>{
      console.log('succesfull');
      this.toast.success({detail:"Password change succesfully",summary:"",duration:5000})
      setTimeout(() => {      
        this.service.onLogout()        
      }, 300);
    },(err)=>{
      console.log(err);
      this.toast.error({detail:"Something went wrong",summary:"Try Again",duration:5000})
    })
    
    
  }

  
}
