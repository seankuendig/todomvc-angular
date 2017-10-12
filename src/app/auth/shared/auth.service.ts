import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    redirectUrl = '';
    loginUser: any = null;

    setLoginUser(user) {
        this.loginUser = user;
    }

    isLoggedIn() {
        return this.loginUser != null;
    }
}
