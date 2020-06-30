import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private logservice : LogService , private router : Router  ) {}

  ngOnInit() {
  }

  onLogout(){
    this.logservice.deleteToken();
    this.router.navigate(['/login']);
  }

}
