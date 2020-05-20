import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../apiService/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  selectedFile: any;
  file: any;
  productForm = new FormGroup({
    
        "name": new FormControl('', Validators.required),
        // "photo": new FormControl('', Validators.required),
        "price": new FormControl('', Validators.required),
        "category": new FormControl('', Validators.required),
        // "description": new FormControl('', Validators.required),
      });
  constructor(private apiService : ApiService,
     private router : Router
  ) { }

  ngOnInit() {

  }
  AddProduct(){
  if(this.productForm.valid){ 
  let Body ={
    ...this.productForm.value,
      image: this.file
   }

   console.log('product is',Body)
  this.apiService.addProduct(Body).then(res=>{
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

 uploadFile($event) {
  // console.log("image is",$event.target.files[0])
   const reader = new FileReader();
   reader.addEventListener('load', (event: any) => {
    
          this.selectedFile = new ImageSnippet(event.target.result, $event.target.files[0]);
    
         
       //     console.log('selectedFile',this.selectedFile.src.split(',')[1]);
            this.file = this.selectedFile.src.split(',')[1]
           
           
        });
    
        reader.readAsDataURL($event.target.files[0]);
      
      
}
addCategory(){
 this.router.navigate(['add-category'])
}
}
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}