import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  title = 'mapApp';
  
  flag=false;
  @Input() 
  n=this.router.url;
  public currentUrl: string = undefined;

  constructor(public router:Router, private userService: UserService, 
     private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone){
    // this.userService.sayHello().subscribe(res  =>console.log('==========res',res))
    this.router.navigate(['./app-open'])
    this.currentUrl=this.router.url;
     
  } 




ngOnInit() {
 
}

changeFlag(){
  this.flag=true;
  }


}





