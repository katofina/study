import { Component } from "@angular/core";

@Component({
    selector: 'russian6',
    templateUrl: './russian-6.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian6 {
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;

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

    viewDiv24() {
        document.getElementById("div23")!.style.display = "none";
        document.getElementById("div24")!.style.display = "flex";
    };

    viewDiv25() {
        document.getElementById("div24")!.style.display = "none";
        document.getElementById("div25")!.style.display = "flex";
    };

    addEvent1() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['u','i', 'a'];
        const arrAlts = ['udot', 'iris', 'shark'];

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
        const arrAlts1 = ['u','i','a'];
        const arrAlts = ['duck', 'indian', 'stork'];

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
        const arrAlts1 = ['e','ya','o'];
        const arrAlts = ['racoon', 'lamb', 'vegetables'];

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

    addEvent4() {
        const imgs1 = document.getElementById('divIm7')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm8')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['e','ya','o'];
        const arrAlts = ['unicorn', 'berries', 'perch'];

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

    addEvent5() {
        const imgs1 = document.getElementById('divIm9')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm10')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['ks','ps','kz','pz'];
        const arrAlts = ['cactus', 'parrot', 'kiwi', 'gun'];

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

    addEvent7() {
        const imgs1 = document.getElementById('divIm13')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm14')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['ls','ms','lz','mz'];
        const arrAlts = ['onion', 'raspberry', 'lemon', 'jellyfish'];

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

    addEvent8() {
        const imgs1 = document.getElementById('divIm15')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm16')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['ls','ms','lz','mz'];
        const arrAlts = ['onion', 'raspberry', 'lemon', 'jellyfish'];

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

    addEvent6() {
        const imgs1 = document.getElementById('divIm11')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm12')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['ks','ps','kz','pz'];
        const arrAlts = ['cactus', 'parrot', 'kiwi', 'gun'];

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

    checkInp1() {
        let check = 0;
        const arr1 = ['п', 'м', 'е', 'я', 'а', 'у', 'и', 'о', 'к', 'л'];
        const arr2 = document.getElementById('div10')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 10) {
            this.viewDiv11();
        } else alert('Исправьте ошибки!')})
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
            this.viewDiv14();
        };
    };

    changeImage2() {
        const imgs = document.getElementById("change2")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.b++;
    };

    changeImage3() {
        const imgs = document.getElementById("change3")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.c++;
    };

    checkImage2() {
        if ((this.b % 2 === 0) && (this.c % 2 === 0)) {
            this.viewDiv17();
        };
    };

    changeImage4() {
        const imgs = document.getElementById("change4")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.d++;
    };

    changeImage5() {
        const imgs = document.getElementById("change5")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.e++;
    };

    checkImage3() {
        if ((this.d % 2 === 0) && (this.e % 2 === 0)) {
            this.viewDiv20();
        };
    };

    addEvent9() {
        const divs = document.getElementById('div21')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div21')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['k', 'a', 'p','dash','k2','a2', 'p2'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 0) && (index2 == 4)) || ((index1 == 4) && (index2 == 0)) ||
                ((index1 == 1) && (index2 == 5)) || ((index1 == 5) && (index2 == 1)) || ((index1 == 2) && (index2 == 6))
                || ((index1 == 6) && (index2 == 2))) {
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
        const arr1 = ['кап-кап', 'ко-ко', 'ку-ку', 'уа'];
        const arr2 = document.getElementById('div22')!.querySelectorAll('input');
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
            this.viewDiv23();
        } else alert('Исправьте ошибки!')})
    };

    checkInp3() {
        let check = 0;
        const arr1 = ['ко-ко', 'кап-кап', 'ку-ку', 'уа'];
        const arr2 = document.getElementById('div23')!.querySelectorAll('input');
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
            this.viewDiv24();
        } else alert('Исправьте ошибки!')})
    };

    checkInp4() {
        let check = 0;
        const arr1 = ['ме', 'кап-кап', 'ко-ко', 'ку-ку', 'уа', 'мяу', 'му'];
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
                arr2[i].parentElement!.style.border = '3px solid black';
            };
        };
        
        setTimeout(() => {if (check == 7) {
            setTimeout(() => alert("Правильно!"), 1000);
        } else alert('Исправьте ошибки!')})
    };
}