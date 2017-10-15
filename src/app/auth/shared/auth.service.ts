import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    redirectUrl = '';
    loginUser: firebase.User = null;

    constructor(public afAuth: AngularFireAuth) {
    }

    initialize(): Promise<firebase.User> {
        const promise = new Promise<firebase.User>((resolve, reject) => {
            this.afAuth.auth.onAuthStateChanged((user) => {
                this.loginUser = user ? user : null;
                resolve(this.loginUser);
            });
        });
        return promise;
    }

    setLoginUser(user) {
        this.loginUser = user;
    }

    isLoggedIn() {
        return this.loginUser != null;
    }
}
