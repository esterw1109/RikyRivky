import { Component, OnInit, Output } from '@angular/core';
import { RouteConfigLoadStart, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

  @Output() flag=1;
  constructor(public router:Router) {
   }

  ngOnInit(): void {
    
    setTimeout(()=>
    this.router.navigate(['./']),1000)
    
  }

}
