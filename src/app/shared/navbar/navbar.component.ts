import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';
import { TaskService } from '../../todo-list/shared/task.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public taskService: TaskService, ) {

  }

  ngOnInit() {
  }

  // onsubmit(e) {
  //   e.preventDefault();
  // }

  onLogout() {
    this.authService.logout(
      () => {
        this.router.navigate(['auth/login']);
      }
    );
  }

}
