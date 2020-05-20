import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Token: string;
  // const options = {
  //   headers: new HttpHeaders({
  //     "Authorization":"Bearer token"
  //   })
  // }
  constructor(private httpClient: HttpClient,
    private storage: Storage
  )
  { }
  async login(data) {
    let body = {

      "email": data.email,
      "password": data.password

    }
    return (await this.httpClient.post('https://marketapp-api.herokuapp.com/owner/login', data).toPromise());
  }
  async addProduct(data) {
    this.storage.get('user').then(async token => {

      this.Token = 'Bearer ' + token
      let headers = {
        Authorization: this.Token
      }
      // console.log(headers)
      return (await this.httpClient.post('https://marketapp-api.herokuapp.com/addproduct', data, { headers }).toPromise());
    })

  }
  async addCategory(data) {
    this.storage.get('user').then(async token => {

      this.Token = 'Bearer ' + token
      let headers = {
        Authorization: this.Token
      }
      // console.log(headers)
      return (await this.httpClient.post('https://marketapp-api.herokuapp.com/addcategory', data, { headers }).toPromise());
    })

  }

  async getAllProduct() {
    let token = await this.storage.get('user')
   
      
            this.Token = 'Bearer ' + token
            let headers = {
              Authorization: this.Token
            }
            // console.log(headers) <any>

    return (await this.httpClient.get('https://marketapp-api.herokuapp.com/owner/product', { headers }).toPromise());
 
  }
  async getProduct(type) {
    return (await this.httpClient.get('https://marketapp-api.herokuapp.com/owner/category/' + type).toPromise());
  }

  async getAllCategory() {
    return (await this.httpClient.get('https://marketapp-api.herokuapp.com/owner/categories').toPromise());
  }
  async forgetpassword(emeil) {
    return (await this.httpClient.post('https://marketapp-api.herokuapp.com/owner/forgetpassword', emeil).toPromise());
  }

  async logout() {
    let token = await this.storage.get('user')
    
       
             this.Token = 'Bearer ' + token
             let headers = {
               Authorization: this.Token
             }
             // console.log(headers) <any>
      return (await this.httpClient.post('https://marketapp-api.herokuapp.com/owner/logout', { headers }).toPromise());
    

  }
 async deleteProduct(id){
  let token = await this.storage.get('user')
  
     
           this.Token = 'Bearer ' + token
           let headers = {
             Authorization: this.Token
           }
           // console.log(id) //<any>
  return (await this.httpClient.delete('https://marketapp-api.herokuapp.com/product/'+id , {headers}).toPromise());
  }
  async updateProduct(id , body){
    let token = await this.storage.get('user')
    
       
             this.Token = 'Bearer ' + token
             let headers = {
               Authorization: this.Token
             }
             // console.log(id) //<any>
    return (await this.httpClient.patch('https://marketapp-api.herokuapp.com/product/'+id ,body, {headers}).toPromise());
    }
}
