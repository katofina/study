import { Component } from "@angular/core";

@Component({
    selector: 'russian45',
    templateUrl: './russian-45.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian45 {
    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "flex";
    };

    viewDiv15() {
        document.getElementById("div14")!.style.display = "none";
        document.getElementById("div15")!.style.display = "flex";
    };

    viewDiv17() {
        document.getElementById("div16")!.style.display = "none";
        document.getElementById("div17")!.style.display = "flex";
    };

    viewDiv19() {
        document.getElementById("div18")!.style.display = "none";
        document.getElementById("div19")!.style.display = "flex";
    };

    viewDiv21() {
        document.getElementById("div20")!.style.display = "none";
        document.getElementById("div21")!.style.display = "flex";
    };

    viewDiv23() {
        document.getElementById("div22")!.style.display = "none";
        document.getElementById("div23")!.style.display = "flex";
    };

    viewDiv() {
        const as = document.getElementsByClassName('total')[0].querySelectorAll('a');
        as.forEach(function(a) {
            a.addEventListener('click', (event) => {
                let current = event.target as HTMLElement;
                let attrT: string | null = current.getAttribute('title')!;
                if (attrT !== null){
                let str = 'div' + attrT;
                let div = document.getElementById(str)!;
                let nextDiv = div.nextSibling as HTMLElement;
                div!.style.display = 'none';
                nextDiv!.style.display = 'flex'; }
            });
        });
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
                if (((index1 === 0) && (index2 <= 8)) || ((index1 === 1) && (index2 >= 9))) {
                    target1.style.border = '3px solid green';
                    setTimeout(() => target1.style.border = '3px solid black', 300)
                    target.remove();
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

    viewDivSV() {
        const imgs = document.getElementById('div4')!.querySelectorAll('img');
        const divs = ['divSV1', 'divSV2', 'divSV3', 'divSV4', 'divSV5', 'divSV6', 'divSV7', 'divSV8', 
        'divSV9', 'divSV10', 'divSV11', 'divSV12', 'divSV13']
        const arrAttr = ["А", "Д", "И", "Ё", "Л", "О", "Т", "Ф", "Х", "Ц", "Ш", "Ъ", "Ь"];

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let current = event.target as HTMLElement;
                let parent = current.parentNode!.parentNode as HTMLElement;
                let attrA = current.getAttribute('alt')!;
                let attrB = parent.getAttribute('id')!;
                let index = arrAttr.indexOf(attrA);
                let index2 = divs.indexOf(attrB);
                if (index === index2 && index === 12) {
                    document.getElementById("div4")!.style.display = "none";
                    document.getElementById("div5")!.style.display = "flex";
                } else if (index === index2 && index >= 0) {
                    parent.style.display = "none";
                    let next = parent.nextSibling as HTMLElement;
                    next.style.display = "flex";
                };
            });
        });
    };

    addEvent2() {
        const divs = document.getElementById('div6')!.getElementsByClassName('divInDivABC');
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
        const divs = document.getElementById('div8')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div8')!.querySelectorAll('img')!;
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
        const spans = document.getElementById('div9')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div9')!.querySelectorAll('img')!;
        let target1: HTMLElement;
        let index1: any;
        const arrAlts = ['1', '2'];
        const spans1 = ['ball', 'beatle','bishop', 'wardrobe', 'horse', 'chair', 'highchair','konik', 'locker', 'elephant', 'balls', 'bug'];

        for (let i = 0; i < spans.length; i++) {
            spans[i].addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let span2 = target1.getAttribute('id');
                index1 = spans1.indexOf(span2!);
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                let index2 = arrAlts.indexOf(alt!);
                if ((index2 === 1 && index1 >= 6) || (index2 === 0 && index1 <= 5)) {
                    target.style.border = '3px solid green';
                    setTimeout(() => target.style.border = '3px solid black', 300)
                    target1.remove();;
                };
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
                if (((index1 === 0) && (index2 <= 9)) || ((index1 === 1) && (index2 >= 10))) {
                    target1.style.border = '3px solid green';
                    setTimeout(() => target1.style.border = '3px solid black', 300);
                    target.remove();
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
        const divs = document.getElementById('div11')!.getElementsByClassName('divInDivABC');
        const imgs = document.getElementById('div11')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['ya', 'iy', 'iye', 'ch', 'h', 'u', 's', 'p', 'o', 'm', 'y', 'z', 'yo', 'e', 'a'];

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

    checkInp1() {
        let check = 0;
        const arr1 = ['слон', 'слониха', 'слонёнок', 'заяц', 'зайчиха', 'зайчёнок', 'тигр', 'тигрица', 'тигрёнок', 'медведь', 'медведица', 'медвежёнок'];
        const arr2 = document.getElementById('div12')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] === arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        
        setTimeout(() => {if (check === 12) {
            document.getElementById("div12")!.style.display = "none";
            document.getElementById("div13")!.style.display = "flex";
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
            document.getElementById("div24")!.style.display = "none";
            document.getElementById("div25")!.style.display = "flex";
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