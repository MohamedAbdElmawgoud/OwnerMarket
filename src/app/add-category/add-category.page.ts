import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../apiService/api.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  categoryForm = new FormGroup({
    
        "name": new FormControl('', Validators.required),
        // // "photo": new FormControl('', Validators.required),
        
      });
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }
  AddCategory(){
  if(this.categoryForm.valid){ 
  let Body ={
    ...this.categoryForm.value,
     
   }

   console.log('category is',Body)
  this.apiService.addCategory(Body).then(res=>{
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
    title: "please enter valid data"
  })
  
} 
 }
}
