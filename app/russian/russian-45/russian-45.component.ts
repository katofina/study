import { Component } from "@angular/core";

@Component({
    selector: 'russian45',
    templateUrl: './russian-45.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian45 {
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

    addEvent1() {
        const divs = document.getElementById('div2')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['t', 'sh', 'p', 'f', 'h', 'sha', 's', 'ch', 'y', 'd', 'g', 'm', 'v', 'b', 'z', 'l', 'g', 'n'];

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

    addEvent2() {
        const divs = document.getElementById('div6')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div6')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['ya','iy', 'iye', 'ch', 'h', 'f', 'u', 's', 'p', 'o', 'n', 'm', 'l', 'y', 'i', 'z', 'j', 'yo', 'e', 'a'];

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
        const divs = document.getElementById('div9')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div9')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['sh', 'c', 'f', 'l', 'r', 'ch', 't', 's', 'k', 'h', 'm', 'sha'];

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

    addEvent4() {
        const divs = document.getElementById('div9')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div9')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['konik', 'locker', 'highchair', 'elephant', 'balls', 'bug', 'wardrobe', 'house', 'chair', 'bishop', 'beatle', 'ball'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 1) && (index2 >= 6)) || ((index1 == 0) && (index2 <= 5))) {
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
        const divs = document.getElementById('div10')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div10')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['z','d', 'j', 'v', 'k', 'g', 'y', 'l', 'b', 'm', 'e', 'yu', 'a', 'yo', 'o', 'i', 'eiy', 'ya', 'ei'];

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

    addEvent6() {
        const divs = document.getElementById('div11')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div11')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['ya', 'iy', 'iye', 'ch', 'h', 'u', 's', 'p', 'o', 'm', 'y', 'z', 'yo', 'e', 'a'];

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
        const arr1 = ['слон', 'слониха', 'слонёнок', 'заяц', 'зайчиха', 'зайчёнок', 'тигр', 'тигрица', 'тигрёнок', 'медведь', 'медведица', 'медвежёнок'];
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

    addEvent7() {
        const divs = document.getElementById('div13')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div13')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['eiy', 'iy', 'ei', 'yu', 'ya'];

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

    addEvent8() {
        const divs = document.getElementById('div15')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div15')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['v', 'o', 'r', 'o2', 'b', 'e', 'y'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 1) && (index2 == 3)) || ((index1 == 3) && (index2 == 1))) {
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
        const divs = document.getElementById('div17')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div17')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['z', 'o', 'o2', 'p', 'a', 'r', 'k'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 1) && (index2 == 2)) || ((index1 == 2) && (index2 == 1))) {
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
        const divs = document.getElementById('div19')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div19')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['d', 'ya', 't', 'e', 'l'];

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
        const divs = document.getElementById('div21')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div21')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['m', 'e', 'ds', 'v', 'e2', 'dz', 'iy'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 1) && (index2 == 4)) || ((index1 == 4) && (index2 == 1))) {
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

    addEvent12() {
        const divs = document.getElementById('div23')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div23')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['c', 'a', 'p', 'l', 'ya'];

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
        const arr1 = ['шкаф', 'шкафчик', 'стул', 'стульчик', 'замок', 'замочек', 'цветок', 'цветочек', 'мяч', 'мячик', 'ваза', 'вазочка'];
        const arr2 = document.getElementById('div24')!.querySelectorAll('input');
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
            this.viewDiv25();
        } else alert('Исправьте ошибки!')})
    };

    checkInp3() {
        let check = 0;
        const arr1 = ['ослёнок', 'медвежёнок', 'тигрёнок', 'волчёнок', 'зубрёнок', 'лисёнок', 'зайчёнок', 'козлёнок'];
        const arr2 = document.getElementById('div26')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 8) {
            alert('Правильно.');
        } else alert('Исправьте ошибки!')});
    };
}