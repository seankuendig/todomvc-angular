import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email= '';
  password= '';
  errorMsg= '';
  isLoginLoading = false;
  isSignUpLoading = false;

  constructor(public afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
  }

  onLogin(formData) {
    if (formData.valid) {
      this.isLoginLoading = true;
      this.errorMsg = '';
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (resp) => {
          this.authService.setLoginUser(resp);
          this.router.navigate(['todo-list']);
          this.isLoginLoading = false;
        }).catch(
        (err) => {
          this.errorMsg = err.message;
          this.isLoginLoading = false;
        });
    }
  }

  onLoginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider).then(
      (resp) => {
        this.authService.setLoginUser(resp.user);
        this.router.navigate(['todo-list']);
      }).catch(
      (err) => {
        this.errorMsg = err.message;
      });
  }


  onLoginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(
      (resp) => {
        this.authService.setLoginUser(resp.user);
        this.router.navigate(['todo-list']);
      }).catch(
      (err) => {
        this.errorMsg = err.message;
      });
  }


  onSignup(formData) {
    if (formData.valid) {
      this.isSignUpLoading = true;
      this.errorMsg = '';
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (resp) => {
          this.authService.setLoginUser(resp);
          this.router.navigate(['todo-list']);
          this.isSignUpLoading = false;
        }).catch(
        (err) => {
          this.errorMsg = err.message;
          this.isSignUpLoading = false;
        });
    }
  }

}
