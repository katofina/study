import { Component } from "@angular/core";

@Component({
    selector: 'russian11',
    templateUrl: './russian-11.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian11 {
    a = 1;

    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "flex";
    };

    viewDiv3() {
        document.getElementById("div2")!.style.display = "none";
        document.getElementById("div3")!.style.display = "flex";
    };

    viewDiv4() {
        document.getElementById("div3")!.style.display = "none";
        document.getElementById("div4")!.style.display = "flex";
    };

    viewDiv5() {
        document.getElementById("div4")!.style.display = "none";
        document.getElementById("div5")!.style.display = "flex";
    }

    viewDiv6() {
        document.getElementById("div5")!.style.display = "none";
        document.getElementById("div6")!.style.display = "flex";
    };

    viewDiv7() {
        document.getElementById("div6")!.style.display = "none";
        document.getElementById("div7")!.style.display = "flex";
    };

    viewDiv8() {
        document.getElementById("div7")!.style.display = "none";
        document.getElementById("div8")!.style.display = "flex";
    };

    viewDiv9() {
        document.getElementById("div8")!.style.display = "none";
        document.getElementById("div9")!.style.display = "flex";
    };

    viewDiv10() {
        document.getElementById("div9")!.style.display = "none";
        document.getElementById("div10")!.style.display = "flex";
    };

    viewDiv11() {
        document.getElementById("div10")!.style.display = "none";
        document.getElementById("div11")!.style.display = "flex";
    };

    viewDiv12() {
        document.getElementById("div11")!.style.display = "none";
        document.getElementById("div12")!.style.display = "flex";
    };

    viewDiv13() {
        document.getElementById("div12")!.style.display = "none";
        document.getElementById("div13")!.style.display = "flex";
    };

    viewDiv14() {
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "flex";
    };

    viewDiv15() {
        document.getElementById("div14")!.style.display = "none";
        document.getElementById("div15")!.style.display = "flex";
    };

    viewDiv16() {
        document.getElementById("div15")!.style.display = "none";
        document.getElementById("div16")!.style.display = "flex";
    };

    viewDiv17() {
        document.getElementById("div16")!.style.display = "none";
        document.getElementById("div17")!.style.display = "flex";
    };

    viewDiv18() {
        document.getElementById("div17")!.style.display = "none";
        document.getElementById("div18")!.style.display = "flex";
    };

    viewDiv19() {
        document.getElementById("div18")!.style.display = "none";
        document.getElementById("div19")!.style.display = "flex";
    };

    viewDiv20() {
        document.getElementById("div19")!.style.display = "none";
        document.getElementById("div20")!.style.display = "flex";
    };

    viewDiv21() {
        document.getElementById("div20")!.style.display = "none";
        document.getElementById("div21")!.style.display = "flex";
    };

    viewDiv22() {
        document.getElementById("div21")!.style.display = "none";
        document.getElementById("div22")!.style.display = "flex";
    };

    viewDiv23() {
        document.getElementById("div22")!.style.display = "none";
        document.getElementById("div23")!.style.display = "flex";
    };

    checkInp1() {
        let check = 0;
        const arr1 = ['а', 'о', 'у', 'е', 'я', 'ё'];
        const arr2 = document.getElementById('div2')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 6) {
            this.viewDiv3();
        } else alert('Исправьте ошибки!')})
    };

    checkInp2() {
        let check = 0;
        const arr1 = ['д', 'к', 'м', 'п', 'ж', 'л'];
        const arr2 = document.getElementById('div3')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 6) {
            this.viewDiv4();
        } else alert('Исправьте ошибки!')})
    }; 
    
    addEvent1() {
        const divs = document.getElementById('div6')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div6')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['yu', 'l', 'a'];

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

    addEvent2() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['e','yo'];
        const arrAlts = ['unicorn' ,'blackberry', 'tree','hedgehog'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if (((index == 0) && (index2 < 2)) || ((index == 1) && (index2 > 1))) {
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

    checkInp3() {
        let check = 0;
        const arr1 = ['ж', 'п', 'м', 'е', 'я', 'и', 'а', 'ё', 'у', 'о', 'к', 'л', 'д', 'ю'];
        const arr2 = document.getElementById('div8')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 14) {
            this.viewDiv9();
        } else alert('Исправьте ошибки!')})
    };

    addEvent3() {
        const divs = document.getElementById('div11')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div11')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['ya', 'm', 'a'];

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

    changeImage1() {
        const imgs = document.getElementById("change")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.a++;
    };

    checkImage1() {
        if(this.a % 2 === 0) {
            this.viewDiv15();
        };
    };

    addEvent4() {
        const divs = document.getElementById('div17')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div17')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['k', 'o', 'm'];

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
        const divs = document.getElementById('div20')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div20')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['ls', 'a', 'ps', 'a2'];

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

    addEvent6() {
        const divs = document.getElementById('div21')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div21')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrDivs = ['КОМ','ЛАПА','УЖ','ЯМА','ЮЛА'];
        const arrAlts = ['clod', 'paw', 'snake','pit', 'whirligig'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = arrDivs.indexOf(target1.previousElementSibling!.textContent!);
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

    checkInp4() {
        let check = 0;
        const arr1 = ['юла', 'лапа', 'ком', 'уж', 'яма'];
        const arr2 = document.getElementById('div23')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 5) {
            alert('Правильно.');
        } else alert('Исправьте ошибки!')})
    };
}