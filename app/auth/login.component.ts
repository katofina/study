import { Component } from "@angular/core";

export class User {
    constructor(
        public email: string,
        public password: string) { }
}

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent { 
    user: User = new User('', '');
    addUser() {
        console.log(this.user);
    }
    // кнопка на верхней панели регистрация + текст
}