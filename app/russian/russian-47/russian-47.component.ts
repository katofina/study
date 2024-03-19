import { Component } from "@angular/core";

@Component({
    selector: 'russian47',
    templateUrl: './russian-47.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian47 {
    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "flex";
    };

    viewDiv14() {
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "flex";
    };

    viewDiv16() {
        document.getElementById("div15")!.style.display = "none";
        document.getElementById("div16")!.style.display = "flex";
    };

    viewDiv18() {
        document.getElementById("div17")!.style.display = "none";
        document.getElementById("div18")!.style.display = "flex";
    };

    viewDiv20() {
        document.getElementById("div19")!.style.display = "none";
        document.getElementById("div20")!.style.display = "flex";
    };

    viewDiv22() {
        document.getElementById("div21")!.style.display = "none";
        document.getElementById("div22")!.style.display = "flex";
    };

    viewDiv24() {
        document.getElementById("div23")!.style.display = "none";
        document.getElementById("div24")!.style.display = "flex";
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
                if (index === index2) {
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
    
    viewDivSV() {
        const imgs = document.getElementById('div4')!.querySelectorAll('img');
        const divs = ['divSV1', 'divSV2', 'divSV3', 'divSV4', 'divSV5', 'divSV6', 'divSV7', 'divSV8', 
        'divSV9', 'divSV10', 'divSV11', 'divSV12', 'divSV13']
        const arrAttr = ["В", "Ё", "К", "З", "Н", "Р", "Ф", "Ц", "Ч", "Ш", "Ъ", "Ь", "Ю"];

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

    viewDivPW() {
        const imgs = document.getElementById('div6')!.querySelectorAll('img');
        const divs = ['divPW1', 'divPW2', 'divPW3', 'divPW4', 'divPW5', 'divPW6', 'divPW7', 'divPW8', 
        'divPW9', 'divPW10', 'divPW11', 'divPW12', 'divPW13']
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
                    document.getElementById("div6")!.style.display = "none";
                    document.getElementById("div7")!.style.display = "flex";
                } else if (index === index2 && index >= 0) {
                    parent.style.display = "none";
                    let next = parent.nextSibling as HTMLElement;
                    next.style.display = "flex";
                };
            });
        });
    };

    addEvent2() {
        const divs = document.getElementById('div8')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div8')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['bus', 'crow', 'crane', 'iguana', 'crocodile', 'lion', 'ant', 'donkey', 'tiger'];

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

    addEvent3() {
        const spans = document.getElementById('div9')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div9')!.querySelectorAll('img')!;
        let target1: HTMLElement;
        let index1: any;
        const arrAlts: string[] = ['1', '2'];
        const spans1: Array<string> = ['nose', 'dwarf','mouth', 'stack', 'desk', 'blade', 'house','gnome',
        'rotik', 'stozhok', 'spout', 'knife', 'table', 'lodge'];

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
                if ((index2 === 1 && index1 >= 7) || (index2 === 0 && index1 <= 6)) {
                    target.style.border = '3px solid green';
                    setTimeout(() => target.style.border = '3px solid black', 300)
                    target1.remove();;
                };
        })});
    };

    addEvent4() {
        const divs = document.getElementById('div10')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div10')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts: string[] = ['d', 'j', 'v', 'k', 'g', 'y', 'l', 'b', 'z', 'm', 'ei', 'ya', 'eiy',
        'i', 'o', 'yo', 'a', 'yu', 'e'];

        for (let i: number = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 === 0) && (index2 <= 9)) || ((index1 === 1) && (index2 >= 10))) {
                    target1.style.border = '3px solid green';
                    setTimeout(() => target1.style.border = "3px solid black", 300);
                    target.remove();
                } else {
                    target1.style.border = '3px solid red';
                    setTimeout(() => target1.style.border = '3px solid black', 300);
                }
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
        const divs = document.getElementById('div11')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div11')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['jaguar', 'penguin', 'bear', 'lion', 'giraffe', 'wolf', 'ram'];

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
        const arr1 = ['кабан', 'свинья', 'поросёнок', 'пингвин', 'пингвиниха', 'пингвинёнок', 'конь', 'лошадь', 'жеребёнок', 'баран', 'овца', 'ягнёнок'];
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
                if ((index1 === index2) || ((index1 === 3) && (index2 === 7)) || ((index1 === 7) && (index2 === 3))) {
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

    checkInp2() {
        let check = 0;
        const arr1 = ['туча', 'тучка', 'ковёр', 'коврик', 'кровать', 'кроватка', 'подушка', 'подушечка', 'корзина', 'корзиночка', 'ягода', 'ягодка'];
        const arr2 = document.getElementById('div25')!.querySelectorAll('input');
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
            document.getElementById("div25")!.style.display = "none";
            document.getElementById("div26")!.style.display = "flex";
        } else alert('Исправьте ошибки!')})
    };

    addEvent12() {
        const divs = document.getElementById('div27')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div27')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts: string[] = ['bus', 'crow', 'crane', 'iguana', 'crocodile', 'lion', 'ant', 'donkey',
        'tiger'];

        for (let i: number = 0; i < divs.length; i++) {
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
}