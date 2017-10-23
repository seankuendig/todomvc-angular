import { Component, OnInit } from '@angular/core';
import { NavbarService } from './shared/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
  }


}
