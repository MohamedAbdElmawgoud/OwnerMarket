import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from "@angular/router";
import { ApiService } from "src/app/apiService/api.service";
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash= true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private storage : Storage,
    private router : Router,
    private apiService : ApiService,
  ) {
    this.initializeApp();
    this.storage.get('user').then(user=>{
      if(!user){
        this.router.navigate(['log-in'])
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(5000).subscribe(() => this.showSplash = false)
    });
  }
  async logout() {
    this.menu.close();
    this.apiService.logout().then(res=>{
      console.log(res)
    })
    await this.storage.clear();
  
     this.router.navigate(['log-in'])
  }
}
