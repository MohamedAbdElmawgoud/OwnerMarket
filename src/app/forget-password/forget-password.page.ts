import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../apiService/api.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  forgetPasswordForm = new FormGroup({
    
        "email": new FormControl('', Validators.required),
        // // "photo": new FormControl('', Validators.required),
        
      });
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }
  resetPassword(){
    if(this.forgetPasswordForm.valid){ 
    let Body ={
      ...this.forgetPasswordForm.value,
       
     }
  
     console.log(Body)
    this.apiService.forgetpassword(Body).then(res=>{
      console.log(res)
    })
     Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    })
   }
  
  else{
    Swal.fire({
      icon: 'error',
      showConfirmButton: false,
      timer: 1500,
      title: "please enter valid email"
    })
    
  } 
   }
  }
  