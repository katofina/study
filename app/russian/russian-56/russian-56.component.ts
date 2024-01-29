import { Component } from "@angular/core";

@Component({
    selector: 'russian56',
    templateUrl: './russian-56.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian56 {
    select1 = false;
    select2 = false;
    select3 = false;
    select4 = false;
    select5 = false;

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

    viewDiv13() {
        document.getElementById("div12")!.style.display = "none";
        document.getElementById("div13")!.style.display = "block";
    };

    viewDiv14() {
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "block";
    };

    viewDiv15() {
        document.getElementById("div14")!.style.display = "none";
        document.getElementById("div15")!.style.display = "block";
    };

    viewDiv16() {
        document.getElementById("div15")!.style.display = "none";
        document.getElementById("div16")!.style.display = "block";
    };

    viewDiv17() {
        document.getElementById("div16")!.style.display = "none";
        document.getElementById("div17")!.style.display = "block";
    };

    viewDiv18() {
        document.getElementById("div17")!.style.display = "none";
        document.getElementById("div18")!.style.display = "block";
    };

    viewDiv19() {
        document.getElementById("div18")!.style.display = "none";
        document.getElementById("div19")!.style.display = "block";
    };

    viewDiv20() {
        document.getElementById("div19")!.style.display = "none";
        document.getElementById("div20")!.style.display = "block";
    };

    viewDiv21() {
        document.getElementById("div20")!.style.display = "none";
        document.getElementById("div21")!.style.display = "block";
    };

    viewDiv22() {
        document.getElementById("div21")!.style.display = "none";
        document.getElementById("div22")!.style.display = "block";
    };

    viewDiv23() {
        document.getElementById("div22")!.style.display = "none";
        document.getElementById("div23")!.style.display = "block";
    };

    viewDiv24() {
        document.getElementById("div23")!.style.display = "none";
        document.getElementById("div24")!.style.display = "block";
    };

    viewDiv25() {
        document.getElementById("div24")!.style.display = "none";
        document.getElementById("div25")!.style.display = "block";
    };

    viewDiv26() {
        document.getElementById("div25")!.style.display = "none";
        document.getElementById("div26")!.style.display = "block";
    };

    viewDiv27() {
        document.getElementById("div26")!.style.display = "none";
        document.getElementById("div27")!.style.display = "block";
    };

    viewDiv28() {
        document.getElementById("div27")!.style.display = "none";
        document.getElementById("div28")!.style.display = "block";
    };

    viewDiv29() {
        document.getElementById("div28")!.style.display = "none";
        document.getElementById("div29")!.style.display = "block";
    };

    viewDiv30() {
        document.getElementById("div29")!.style.display = "none";
        document.getElementById("div30")!.style.display = "block";
    };

    viewDiv31() {
        document.getElementById("div30")!.style.display = "none";
        document.getElementById("div31")!.style.display = "block";
    };

    viewDiv32() {
        document.getElementById("div31")!.style.display = "none";
        document.getElementById("div32")!.style.display = "block";
    };

    viewDiv33() {
        document.getElementById("div32")!.style.display = "none";
        document.getElementById("div33")!.style.display = "block";
    };

    viewDiv34() {
        document.getElementById("div33")!.style.display = "none";
        document.getElementById("div34")!.style.display = "block";
    };

    viewDiv35() {
        document.getElementById("div34")!.style.display = "none";
        document.getElementById("div35")!.style.display = "block";
    };

    viewDiv36() {
        document.getElementById("div35")!.style.display = "none";
        document.getElementById("div36")!.style.display = "block";
    };

    viewDiv37() {
        document.getElementById("div36")!.style.display = "none";
        document.getElementById("div37")!.style.display = "block";
    };

    viewDiv38() {
        document.getElementById("div37")!.style.display = "none";
        document.getElementById("div38")!.style.display = "block";
    };

    addEvent1() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['yo','ya','e','i','yu'];
        const arrAlts = ['o' ,'a', 'ei','eiy','u'];

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

    addEvent2() {
        const divs = document.getElementById('div3')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div3')!.querySelectorAll('imgText')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['g', 'b', 'v', 'yo', 'd', 'a', 'e'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 === index2) {
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

    showUl1() {
        const styleUl = document.getElementById('ul1')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer1() {
        document.getElementById('button1')!.innerHTML = 'д';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer2() {
        document.getElementById('button1')!.innerHTML = 'к';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    rightAnswer1() {
        document.getElementById('button1')!.innerHTML = 'т';
        this.select1 = true;
        document.getElementById('ul1')!.style.display = 'none';
    };

    checkSelect1() {
        if (this.select1 == true) {
            document.getElementById('button1')!.style.backgroundColor = 'green';
            alert('Правильно!');
            setTimeout(() => this.viewDiv6(), 500);
        } else if (this.select1 == false) {
            document.getElementById('button1')!.style.backgroundColor = 'red';
            alert('Неправильно!');
        };
    };

    showUl2() {
        const styleUl = document.getElementById('ul2')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer12() {
        document.getElementById('button2')!.innerHTML = 'г';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    rightAnswer2() {
        document.getElementById('button2')!.innerHTML = 'к';
        this.select2 = true;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer22() {
        document.getElementById('button2')!.innerHTML = 'т';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    checkSelect2() {
        if (this.select2 == true) {
            document.getElementById('button2')!.style.backgroundColor = 'green';
            alert('Правильно!');
            setTimeout(() => this.viewDiv7(), 500);
        } else if (this.select2 == false) {
            document.getElementById('button2')!.style.backgroundColor = 'red';
            alert('Неправильно!');
        };
    };

    showUl3() {
        const styleUl = document.getElementById('ul3')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    rightAnswer3() {
        document.getElementById('button3')!.innerHTML = 'д';
        this.select3 = true;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer13() {
        document.getElementById('button3')!.innerHTML = 'к';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer23() {
        document.getElementById('button3')!.innerHTML = 'т';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    checkSelect3() {
        if (this.select3 == true) {
            document.getElementById('button3')!.style.backgroundColor = 'green';
            alert('Правильно!');
            setTimeout(() => this.viewDiv8(), 500);
        } else if (this.select3 == false) {
            document.getElementById('button3')!.style.backgroundColor = 'red';
            alert('Неправильно!');
        };
    };

    showUl4() {
        const styleUl = document.getElementById('ul4')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer14() {
        document.getElementById('button4')!.innerHTML = 'г';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    rightAnswer4() {
        document.getElementById('button4')!.innerHTML = 'к';
        this.select4 = true;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer24() {
        document.getElementById('button4')!.innerHTML = 'т';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    checkSelect4() {
        if (this.select4 == true) {
            document.getElementById('button4')!.style.backgroundColor = 'green';
            alert('Правильно!');
            setTimeout(() => this.viewDiv9(), 500);
        } else if (this.select4 == false) {
            document.getElementById('button4')!.style.backgroundColor = 'red';
            alert('Неправильно!');
        };
    };

    showUl5() {
        const styleUl = document.getElementById('ul5')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    rightAnswer5() {
        document.getElementById('button5')!.innerHTML = 'г';
        this.select5 = true;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer15() {
        document.getElementById('button5')!.innerHTML = 'к';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer25() {
        document.getElementById('button5')!.innerHTML = 'т';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    checkSelect5() {
        if (this.select5 == true) {
            document.getElementById('button5')!.style.backgroundColor = 'green';
            alert('Правильно!');
            setTimeout(() => this.viewDiv10(), 500);
        } else if (this.select5 == false) {
            document.getElementById('button5')!.style.backgroundColor = 'red';
            alert('Неправильно!');
        };
    };

    clickWrong() {
        alert('Неправильно!');
    };

    addEvent3() {
        const divs = document.getElementById('div4')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div4')!.querySelectorAll('imgInDiv')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['a', 'b', 'v', 'g', 'd', 'e', 'yo'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 === index2) {
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

    addEvent4() {
        const divs = document.getElementById('div11')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div11')!.querySelectorAll('imgInDiv')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['j', 'u', 'r', 'a', 'v', 'l', 'y'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
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

    addEvent5() {
        const divs = document.getElementById('div13')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div13')!.querySelectorAll('imgInDiv')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['g', 'u', 's', 'yo', 'n', 'o', 'k'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
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

    addEvent6() {
        const divs = document.getElementById('div15')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div15')!.querySelectorAll('imgInDiv')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['o', 'v', 'o2', 'sh', 'i'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 0) && (index2 == 2)) || ((index1 == 2) && (index2 == 0))) {
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

    addEvent7() {
        const divs = document.getElementById('div17')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div17')!.querySelectorAll('imgInDiv')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['a', 'y', 'b', 'o', 'l', 'i', 't'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
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
    
    addEvent8() {
        const divs = document.getElementById('div19')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div19')!.querySelectorAll('imgInDiv')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['z', 'ya', 'b', 'l', 'i', 'k'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
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

    checkInp1() {
        let check = 0;
        const arr1 = ['гвоздь', 'сад', 'зоосад', 'сон', 'слон', 'салон', 'кот', 'крот', 'скот', 'зуб', 'зубр', 'ноль'];
        const arr2 = document.getElementById('div20')!.querySelectorAll('input');
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
            this.viewDiv21();
        } else alert('Исправьте ошибки!')})
    };
}