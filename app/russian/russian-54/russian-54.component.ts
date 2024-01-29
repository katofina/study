import { Component } from "@angular/core";

@Component({
    selector: 'russian54',
    templateUrl: './russian-54.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian54 {
    select1 = false;
    select2 = false;
    select3 = false;
    select4 = false;
    select5 = false;
    select6 = false;
    a = 0;
    b = 0;

    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "block";
    };

    viewDiv3() {
        document.getElementById("div2")!.style.display = "none";
        document.getElementById("div3")!.style.display = "block";
    };

    viewDiv4() {
        document.getElementById("div3")!.style.display = "none";
        document.getElementById("div4")!.style.display = "block";
    };

    viewDiv5() {
        document.getElementById("div4")!.style.display = "none";
        document.getElementById("div5")!.style.display = "block";
    }

    viewDiv6() {
        document.getElementById("div5")!.style.display = "none";
        document.getElementById("div6")!.style.display = "block";
    };

    viewDiv7() {
        document.getElementById("div6")!.style.display = "none";
        document.getElementById("div7")!.style.display = "block";
    };

    viewDiv8() {
        document.getElementById("div7")!.style.display = "none";
        document.getElementById("div8")!.style.display = "block";
    };

    viewDiv9() {
        document.getElementById("div8")!.style.display = "none";
        document.getElementById("div9")!.style.display = "block";
    };

    viewDiv10() {
        document.getElementById("div9")!.style.display = "none";
        document.getElementById("div10")!.style.display = "block";
    };

    viewDiv11() {
        document.getElementById("div10")!.style.display = "none";
        document.getElementById("div11")!.style.display = "block";
    };

    viewDiv12() {
        document.getElementById("div11")!.style.display = "none";
        document.getElementById("div12")!.style.display = "block";
    };

    addEvent1() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['ryol','li','cve','vaty','vo','mis'];
        const arrAlts = ['o' ,'sa', 'tok','kro','da','ka'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if (index == index2) {
                    target2.style.border = '3px solid green';
                    setTimeout(() => target2.style.border = '1px solid black', 200)
                    target.remove();
                };
        })});

        imgs2.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    wrongAnswer1() {
        document.getElementById('button1')!.innerHTML = 'ё';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    rightgAnswer1() {
        document.getElementById('button1')!.innerHTML = 'к';
        this.select1 = true;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer2() {
        document.getElementById('button1')!.innerHTML = 'о';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer3() {
        document.getElementById('button1')!.innerHTML = 'с';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer4() {
        document.getElementById('button1')!.innerHTML = 'т';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    showUl1() {
        const styleUl = document.getElementById('ul1')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    showUl2() {
        const styleUl = document.getElementById('ul2')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer32() {
        document.getElementById('button2')!.innerHTML = 'ё';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer12() {
        document.getElementById('button2')!.innerHTML = 'к';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer22() {
        document.getElementById('button2')!.innerHTML = 'о';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    rightAnswer2() {
        document.getElementById('button2')!.innerHTML = 'с';
        this.select2 = true;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer42() {
        document.getElementById('button2')!.innerHTML = 'т';
        this.select2 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    showUl3() {
        const styleUl = document.getElementById('ul3')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer33() {
        document.getElementById('button3')!.innerHTML = 'ё';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer13() {
        document.getElementById('button3')!.innerHTML = 'к';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer23() {
        document.getElementById('button3')!.innerHTML = 'о';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    rightAnswer3() {
        document.getElementById('button3')!.innerHTML = 'с';
        this.select3 = true;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer43() {
        document.getElementById('button3')!.innerHTML = 'т';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    showUl4() {
        const styleUl = document.getElementById('ul4')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    rightAnswer4() {
        document.getElementById('button4')!.innerHTML = 'ё';
        this.select4 = true;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer14() {
        document.getElementById('button4')!.innerHTML = 'к';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer24() {
        document.getElementById('button4')!.innerHTML = 'о';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer34() {
        document.getElementById('button4')!.innerHTML = 'с';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer44() {
        document.getElementById('button4')!.innerHTML = 'т';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    showUl5() {
        const styleUl = document.getElementById('ul5')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer25() {
        document.getElementById('button5')!.innerHTML = 'ё';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer15() {
        document.getElementById('button5')!.innerHTML = 'к';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    rightAnswer5() {
        document.getElementById('button5')!.innerHTML = 'о';
        this.select5 = true;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer35() {
        document.getElementById('button5')!.innerHTML = 'с';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer45() {
        document.getElementById('button5')!.innerHTML = 'т';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    showUl6() {
        const styleUl = document.getElementById('ul6')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer46() {
        document.getElementById('button6')!.innerHTML = 'ё';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer16() {
        document.getElementById('button6')!.innerHTML = 'к';
        this.select6 = true;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer26() {
        document.getElementById('button6')!.innerHTML = 'о';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer36() {
        document.getElementById('button6')!.innerHTML = 'с';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    rightAnswer6() {
        document.getElementById('button6')!.innerHTML = 'т';
        this.select6 = true;
        document.getElementById('ul6')!.style.display = 'none';
    };

    checkSelect1() {
        let a = 0;

        if (this.select1 == true) {
            document.getElementById('button1')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select1 == false) {
            document.getElementById('button1')!.style.backgroundColor = 'red';
        };

        if (this.select2 == true) {
            document.getElementById('button2')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select2 == false) {
            document.getElementById('button2')!.style.backgroundColor = 'red';
        };

        if (this.select3 == true) {
            document.getElementById('button3')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select3 == false) {
            document.getElementById('button3')!.style.backgroundColor = 'red';
        };

        if (this.select4 == true) {
            document.getElementById('button4')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select4 == false) {
            document.getElementById('button4')!.style.backgroundColor = 'red';
        };

        if (this.select5 == true) {
            document.getElementById('button5')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select5 == false) {
            document.getElementById('button5')!.style.backgroundColor = 'red';
        };

        if (this.select6 == true) {
            document.getElementById('button6')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select6 == false) {
            document.getElementById('button6')!.style.backgroundColor = 'red';
        };

        if (a == 6) {
            alert('Правильно!');
            setTimeout(() => this.viewDiv4(), 500);
        } else if (a != 6) alert('Неправильно!');
    };

    addEvent2() {
        const divs = document.getElementById('div4')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div4')!.querySelectorAll('imgText')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['rabbit', 'tiger', 'moose', 'tigers', 'rabbits', 'mooses', 'rabbiter', 'tigerer', 'calf', 'animals', 'lark', 'car'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 2)) || ((index1 == 1) && ((index2 >= 3) && (index2 <= 5)))
                || ((index1 == 2) && ((index2 >= 6) && (index2 <= 8))) || ((index1 == 3) && (index2 >= 9))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent3() {
        const divs = document.getElementById('div5')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div5')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['t', 'sh', 'p', 'f', 'k', 's', 'd', 'g', 'j', 'v', 'b', 'z'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 8)) || ((index1 == 1) && (index2 >= 9))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    clickWrong() {
        alert('Неправильно!');
    };

    clickWrongLetter(){
        this.a = this.a + 1;
    };

    clickRightLetter(){
        this.b = this.b + 1;
    };

    checkSpan1() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 0;
        }
        else if ((this.a == 0) && (this.b == 5)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv9(), 500);
        } else if ((this.a == 0) && (this.b != 5)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 0;
        };
    };

    checkSpan2() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 5;
        }
        else if ((this.a == 0) && (this.b == 9)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv11(), 500);
        } else if ((this.a == 0) && (this.b != 9)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 5;
        };
    };

    checkInp1() {
        let check = 0;
        const arr1 = ['слушать', 'услышать', 'прослушать', 'думать', 'придумать', 'подумать', 'играть', 'поиграть', 'сыграть', 'делать', 'переделать', 'сделать'];
        const arr2 = document.getElementById('div11')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        
        setTimeout(() => {if (check == 12) {
            this.viewDiv12();
        } else alert('Исправьте ошибки!')})
    };
}