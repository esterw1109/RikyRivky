import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isLoggedIn: boolean;
  user: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.loggedIn;
    this.user = this.userService.getCurrentUser();
    this.userService.isLoggedIn().subscribe((isLogged) => {
      this.user = this.userService.getCurrentUser();
      this.isLoggedIn = isLogged;
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('app-form');
  }
}
