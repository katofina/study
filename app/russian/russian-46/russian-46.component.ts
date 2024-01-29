import { Component } from "@angular/core";

@Component({
    selector: 'russian46',
    templateUrl: './russian-46.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian46 {
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

    viewDivSV2() {
        document.getElementById("divSV1")!.style.display = "none";
        document.getElementById("divSV2")!.style.display = "block";
    };

    viewDivSV3() {
        document.getElementById("divSV2")!.style.display = "none";
        document.getElementById("divSV3")!.style.display = "block";
    };

    viewDivSV4() {
        document.getElementById("divSV3")!.style.display = "none";
        document.getElementById("divSV4")!.style.display = "block";
    };

    viewDivSV5() {
        document.getElementById("divSV4")!.style.display = "none";
        document.getElementById("divSV5")!.style.display = "block";
    }

    viewDivSV6() {
        document.getElementById("divSV5")!.style.display = "none";
        document.getElementById("divSV6")!.style.display = "block";
    };

    viewDivSV7() {
        document.getElementById("divSV6")!.style.display = "none";
        document.getElementById("divSV7")!.style.display = "block";
    };

    viewDivSV8() {
        document.getElementById("divSV7")!.style.display = "none";
        document.getElementById("divSV8")!.style.display = "block";
    };

    viewDivSV9() {
        document.getElementById("divSV8")!.style.display = "none";
        document.getElementById("divSV9")!.style.display = "block";
    };

    viewDivSV10() {
        document.getElementById("divSV9")!.style.display = "none";
        document.getElementById("divSV10")!.style.display = "block";
    };

    viewDivSV11() {
        document.getElementById("divSV10")!.style.display = "none";
        document.getElementById("divSV11")!.style.display = "block";
    };

    viewDivSV12() {
        document.getElementById("divSV11")!.style.display = "none";
        document.getElementById("divSV12")!.style.display = "block";
    };

    viewDivSV13() {
        document.getElementById("divSV12")!.style.display = "none";
        document.getElementById("divSV13")!.style.display = "block";
    };

    viewDivPW2() {
        document.getElementById("divPW1")!.style.display = "none";
        document.getElementById("divPW2")!.style.display = "block";
    };

    viewDivPW3() {
        document.getElementById("divPW2")!.style.display = "none";
        document.getElementById("divPW3")!.style.display = "block";
    };

    viewDivPW4() {
        document.getElementById("divPW3")!.style.display = "none";
        document.getElementById("divPW4")!.style.display = "block";
    };

    viewDivPW5() {
        document.getElementById("divPW4")!.style.display = "none";
        document.getElementById("divPW5")!.style.display = "block";
    }

    viewDivPW6() {
        document.getElementById("divPW5")!.style.display = "none";
        document.getElementById("divPW6")!.style.display = "block";
    };

    viewDivPW7() {
        document.getElementById("divPW6")!.style.display = "none";
        document.getElementById("divPW7")!.style.display = "block";
    };

    viewDivPW8() {
        document.getElementById("divPW7")!.style.display = "none";
        document.getElementById("divPW8")!.style.display = "block";
    };

    viewDivPW9() {
        document.getElementById("divPW8")!.style.display = "none";
        document.getElementById("divPW9")!.style.display = "block";
    };

    viewDivPW10() {
        document.getElementById("divPW9")!.style.display = "none";
        document.getElementById("divPW10")!.style.display = "block";
    };

    viewDivPW11() {
        document.getElementById("divPW10")!.style.display = "none";
        document.getElementById("divPW11")!.style.display = "block";
    };

    viewDivPW12() {
        document.getElementById("divPW11")!.style.display = "none";
        document.getElementById("divPW12")!.style.display = "block";
    };

    viewDivPW13() {
        document.getElementById("divPW12")!.style.display = "none";
        document.getElementById("divPW13")!.style.display = "block";
    };

    addEvent2() {
        const divs = document.getElementById('div8')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div8')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['bus', 'crow', 'crane', 'iguana', 'crocodile', 'lion', 'ant', 'donkey', 'tiger'];

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

    addEvent3() {
        const divs = document.getElementById('div9')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div9')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['nose', 'dwarf', 'mouth', 'stack', 'desk', 'blade', 'house', 'lodge', 'table', 'knife', 'spout', 'stozhok', 'rotik', 'gnome'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 6)) || ((index1 == 1) && (index2 >= 7))) {
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
        const divs = document.getElementById('div10')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div10')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['d', 'j', 'v', 'k', 'g', 'y', 'l', 'b', 'z', 'm', 'ei', 'ya', 'eiy', 'i', 'o', 'yo', 'a', 'yu', 'e'];

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

    addEvent5() {
        const divs = document.getElementById('div11')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div11')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['jaguar', 'penguin', 'bear', 'lion', 'giraffe', 'wolf', 'ram'];

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
        const arr1 = ['волк', 'волчица', 'волчёнок', 'лев', 'львица', 'львёнок', 'лис', 'лиса', 'лисёнок', 'бык', 'корова', 'телёнок'];
        const arr2 = document.getElementById('div12')!.querySelectorAll('input');
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
            this.viewDiv13();
        } else alert('Исправьте ошибки!')})
    };

    addEvent6() {
        const divs = document.getElementById('div14')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div14')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['l', 'ya', 'g', 'u', 'sh', 'a', 't'];

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

    clickWrong() {
        alert('Неправильно!');
    };

    addEvent7() {
        const divs = document.getElementById('div16')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div16')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['b', 'r', 'o', 's', 'i', 't', 'iy', 's2', 'ya'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 3) && (index2 == 7)) || ((index1 == 7) && (index2 == 3))) {
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
        const divs = document.getElementById('div18')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div18')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['c', 'a', 'p', 'l', 'i'];

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

    addEvent9() {
        const divs = document.getElementById('div20')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div20')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['s', 'm', 'e', 'sh', 'a', 't'];

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

    addEvent10() {
        const divs = document.getElementById('div22')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div22')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['e', 't', 'o', 'y'];

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

    addEvent11() {
        const divs = document.getElementById('div24')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div24')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['b', 'o', 'yu', 's', 'y'];

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

    checkInp2() {
        let check = 0;
        const arr1 = ['туча', 'тучка', 'ковёр', 'коврик', 'кровать', 'кроватка', 'подушка', 'подушечка', 'корзина', 'корзиночка', 'ягода', 'ягодка'];
        const arr2 = document.getElementById('div25')!.querySelectorAll('input');
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
            this.viewDiv26();
        } else alert('Исправьте ошибки!')})
    };

    addEvent12() {
        const divs = document.getElementById('div27')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div27')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['bus', 'crow', 'crane', 'iguana', 'crocodile', 'lion', 'ant', 'donkey', 'tiger'];

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
}