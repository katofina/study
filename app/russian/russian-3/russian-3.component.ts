import { Component } from "@angular/core";

@Component({
    selector: 'russian3',
    templateUrl: './russian-3.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian3 {
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;

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

    addEvent1() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['e','u','ya','i', 'o','a'];
        const arrAlts = ['tree', 'snail', 'apple', 'needle', 'donkey', 'watermelon'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if (index == index2) {
                    target2.style.border = '3px solid green';
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
        const imgs1 = document.getElementById('divIm3')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm4')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['m','k','ya','o'];
        const arrAlts = ['doll', 'cow', 'anchor', 'wasps'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if (index == index2) {
                    target2.style.border = '3px solid green';
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
        const imgs1 = document.getElementById('divIm5')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm6')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['m','k','a','u'];
        const arrAlts = ['ball', 'cat', 'pineapple', 'iron'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if (index == index2) {
                    target2.style.border = '3px solid green';
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

    changeImage() {
        const imgs = document.getElementById("change")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.a++;
    };

    changeImage2() {
        const imgs = document.getElementById("change2")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.b++;
    };

    checkImage() {
        if((this.a % 2 === 0) && (this.b % 2 === 0)) {
            this.viewDiv13();
        };
    };

    changeImage3() {
        const imgs = document.getElementById("change3")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.c++;
    };

    changeImage4() {
        const imgs = document.getElementById("change4")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.d++;
    };

    checkImage2() {
        if((this.c % 2 === 0) && (this.d % 2 === 0)) {
            this.viewDiv14();
        };
    };

    changeImage5() {
        const imgs = document.getElementById("change5")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.e++;
    };

    changeImage6() {
        const imgs = document.getElementById("change6")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.f++;
    };

    checkImage3() {
        if((this.e % 2 === 0) && (this.f % 2 === 0)) {
            this.viewDiv15();
        };
    };

    checkInp1() {
        let check = 0;
        const arr1 = ['папа', 'мама', 'ку-ку', 'ко-ко'];
        const arr2 = document.getElementById('div15')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr3[i]) {
                arr2[i].style.border = '3px solid green';
                check++;
            } else {
                arr2[i].style.border = '3px solid black';
            };
        };
        
        setTimeout(() => {if (check == 4) {
            this.viewDiv16();
        } else alert('Исправьте ошибки!')})
    };

    addEvent4() {
        const divs = document.getElementById('div17')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div17')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrDivs = ['А','П','У', 'КО-КО', 'МАМА', 'ПАПА'];
        const arrAlts = ['pineapple', 'rooster', 'iron', 'chicken', 'mather', 'father'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = arrDivs.indexOf(target1.previousElementSibling!.textContent!);
                console.log(target1.parentElement!);
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