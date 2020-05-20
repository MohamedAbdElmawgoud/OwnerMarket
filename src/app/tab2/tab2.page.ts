import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "src/app/admin/product.service";
import { ApiService } from "src/app/apiService/api.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  product: any;

  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  
  constructor(private router: Router, private cartService: ProductService,
  private apiService : ApiService,
)
  { }
  ngOnInit() {
    this.getProduct()
    // this.items = this.cartService.getProducts();
    // this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }



  // slideOpts = {
  //   initialSlide: 1,
  //   slidesPerView: 1,
  //   // loop: true,
  //   centeredSlides: true,
  //   spaceBetween: 40
  //   };

  products = [{ img: 'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Set%20For%20Life%202.jpg', title: 'product name' },
  { img: 'https://www.creativeparamita.com/wp-content/uploads/2019/01/the-way-in-the-forest.jpg', title: 'product name' },
  { img: 'https://images-na.ssl-images-amazon.com/images/I/51dgClan2tL.jpg', title: 'product name' }
  ,
  // { img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549241208l/43798285.jpg', title: 'product' }
]
viewDetails(data){
  console.log(data)
  this.router.navigate(['details-product'] ,{ queryParams: { img: data.image , title : data.name , id: data._id } });
}
addProduct(){
  this.router.navigate(['add-product'])
}
async getProduct(){
  this.product =  await this.apiService.getAllProduct()
 // console.log( this.product)
}
}
