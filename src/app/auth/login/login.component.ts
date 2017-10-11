import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
  }

  onLogin(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          console.log(success);
          // this.router.navigate(['/members']);
        }).catch(
        (err) => {
          console.log(err);
          // this.error = err;
        });
    }
  }

  onLoginFacebook(formData) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider).then(
      (resp) => {
        console.log(resp);
        // this.router.navigate(['/members']);
      }).catch(
      (err) => {
        console.log(err);
        // this.error = err;
      });
  }


  onLoginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(
      (resp) => {
        console.log(resp);
        // this.router.navigate(['/members']);
      }).catch(
      (err) => {
        console.log(err);
        // this.error = err;
      });
  }


  onSignup(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          console.log(success);
          // this.router.navigate(['/members']);
        }).catch(
        (err) => {
          console.log(err);
          // this.error = err;
        });
    }
  }

}
