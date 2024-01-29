import { Component } from "@angular/core";

@Component({
    selector: 'russian50',
    templateUrl: './russian-50.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian50 {
    a = 1;
    b = 1;

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

    addEvent1() {
        const divs = document.getElementById('div2')!.getElementsByClassName('imgInDivMargin');
        const imgs = document.getElementById('div2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['ch', 'y', 't', 'k', 'm', 'sha', 'l', 'b', 'f', 'p', 'c', 'm', 'p', 'r', 'd', 'k', 'sh', 'g', 't'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 9)) || ((index1 == 1) && (index2 >= 10))) {
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

    addEvent2() {
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

    addEvent3() {
        const divs = document.getElementById('div4')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div4')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['e', 'ya', 'yu', 'i', 'yo', 'ei', 'eiy', 'u', 'a', 'o'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 4)) || ((index1 == 1) && (index2 >= 5))) {
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
        const divs = document.getElementById('div5')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div5')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['stork', 'sparrow', 'pigeon', 'thrush', 'crane', 'turkey', 'cuckoo', 'pelican', 'tit', 'owl'];

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
        const divs = document.getElementById('div6')!.getElementsByClassName('imgText');
        const imgs = document.getElementById('div6')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['thrush', 'stork', 'pigeon', 'owl', 'sparrow', 'owler', 'pigioner', 'pelican', 'cuckoo', 'titmouse', 'sparrower', 'storker'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 1)) || ((index1 == 1) && (index2 == 2)) || ((index1 == 1) && (index2 == 3))
                || ((index1 == 2) && ((index2 >= 4) && (index2 <= 9))) || ((index1 == 3) && (index2 == 10)) || ((index1 == 3)
                && (index2 == 11))) {
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
        const divs = document.getElementById('div7')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div7')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['t', 'sh', 'p', 'f', 'h', 'sha', 's', 'ch', 'k', 'y', 'd', 'g', 'm', 'v', 'b', 'z', 'n', 'r'];

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

    addEvent7() {
        const divs = document.getElementById('div8')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div8')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['electrotrain', 'tank', 'plane', 'rocket', 'sailboat', 'motorcycle', 'airliner', 'helicopter', 'bike', 'bus'];

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
        const arr1 = ['дом', 'домик', 'домище', 'стакан', 'стаканчик', 'стаканище', 'графин', 'графинчик', 'графинище', 'сапог', 'сапожок', 'сапожище'];
        const arr2 = document.getElementById('div9')!.querySelectorAll('input');
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
            this.viewDiv10();
        } else alert('Исправьте ошибки!')})
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
        else if ((this.a == 0) && (this.b == 4)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv12(), 500);
        } else if ((this.a == 0) && (this.b != 4)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 0;
        };
    };

    checkSpan2() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 4;
        }
        else if ((this.a == 0) && (this.b == 9)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv14(), 500);
        } else if ((this.a == 0) && (this.b != 9)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 4;
        };
    };

    checkSpan3() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 9;
        }
        else if ((this.a == 0) && (this.b == 12)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv16(), 500);
        } else if ((this.a == 0) && (this.b != 12)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 9;
        };
    };

    checkSpan4() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 12;
        }
        else if ((this.a == 0) && (this.b == 16)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv18(), 500);
        } else if ((this.a == 0) && (this.b != 16)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 12;
        };
    };

    checkSpan5() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 16;
        }
        else if ((this.a == 0) && (this.b == 18)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv20(), 500);
        } else if ((this.a == 0) && (this.b != 18)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 16;
        };
    };

    checkSpan6() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 18;
        }
        else if ((this.a == 0) && (this.b == 20)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv22(), 500);
        } else if ((this.a == 0) && (this.b != 20)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 18;
        };
    };

    checkSpan7() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 20;
        }
        else if ((this.a == 0) && (this.b == 23)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv24(), 500);
        } else if ((this.a == 0) && (this.b != 23)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 20;
        };
    };

    checkSpan8() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 23;
        }
        else if ((this.a == 0) && (this.b == 25)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv26(), 500);
        } else if ((this.a == 0) && (this.b != 25)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 23;
        };
    };

    checkSpan9() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 25;
        }
        else if ((this.a == 0) && (this.b == 27)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv28(), 500);
        } else if ((this.a == 0) && (this.b != 27)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 25;
        };
    };

    checkSpan10() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 27;
        }
        else if ((this.a == 0) && (this.b == 29)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv30(), 500);
        } else if ((this.a == 0) && (this.b != 29)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 27;
        };
    };

    checkSpan11() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 29;
        }
        else if ((this.a == 0) && (this.b == 32)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv32(), 500);
        } else if ((this.a == 0) && (this.b != 32)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 29;
        };
    };

    checkInp2() {
        let check = 0;
        const arr1 = ['туча', 'тучка', 'ковёр', 'коврик', 'кровать', 'кроватка', 'подушка', 'подушечка', 'корзина', 'корзиночка', 'ягода', 'ягодка'];
        const arr2 = document.getElementById('div34')!.querySelectorAll('input');
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
            this.viewDiv35();
        } else alert('Исправьте ошибки!')})
    };
}