import { Component } from "@angular/core";

export class User {
    constructor(
        public email: string,
        public password: string,
        public passwordRepeat: string) { }
}

@Component({
    selector: 'login',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent { 
    user: User = new User('', '', '');
    addUser() {
        console.log(this.user);
    }

    public CheckPassword() {
        const pass1 = (<HTMLInputElement>document.getElementById('pass1')).value;
        const pass2 = (<HTMLInputElement>document.getElementById('pass2')).value;

        if (pass1 != pass2) {
            alert("Пароли не совпадают, пожалуйста попробуйте еще раз!");
        } else {
            alert("Вы успешно прошли регистрацию! Зайдите на вашу почту и пройдите верификацию!")
        }
    }

    //кнопка на верхне панеле войти + текст
}