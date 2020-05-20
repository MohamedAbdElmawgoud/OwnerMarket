import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ApiService } from '../apiService/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  loginForm = new FormGroup({
    
        "email": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required),
      });
  constructor(private apiService : ApiService ,
    private storage : Storage,
    private router : Router,
  ) {}

  ngOnInit() {
  }
  async submit(){
    if(this.loginForm.valid){ 
    
    let params = {...this.loginForm.value };
  console.log('parameters',params);
     let res = await this.apiService.login(params).then((e: any)=>
     { 
       if(e){ 

      this.storage.set('user',e.token);
      //console.log('response',e)
     }
      
  
     })
  
 
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      })
      this.router.navigate([''])
    }
    else{
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "please enter valid data"
      })
      
    }
  
    }
    forgetPassword(){
      this.router.navigate(['forget-password'])
    }
}
