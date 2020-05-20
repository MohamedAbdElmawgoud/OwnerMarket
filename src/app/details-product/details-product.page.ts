import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "src/app/apiService/api.service";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.page.html',
  styleUrls: ['./details-product.page.scss'],
})
export class DetailsProductPage implements OnInit {
  [x: string]: any;
  data: any;

  constructor(private route: ActivatedRoute,
    private apiService : ApiService,
  ) { }

  ngOnInit() {
    this.data = this.route
    .queryParamMap
    .subscribe(v => {
      this.image = v.get('img');
     
      this.title = v.get('title')
      this.id = v.get('id')
     

    });
  }
editProduct(){

}
deleteProduct(id){
//console.log('sa',id)
this.apiService.deleteProduct(id).then(res=>{
  console.log(res)
})
}
}
