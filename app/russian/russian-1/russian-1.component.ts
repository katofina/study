import { Component } from "@angular/core";

@Component({
    selector: 'russian1',
    templateUrl: './russian-1.component.html',
    styleUrls: ['./russian-1.component.scss']
})

export class Russian1 {
    a = 1;
    b = 1;
    c = 1;

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

    addEvent1() {
        const divs = document.getElementById('div13')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div13')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrDivs = ['АУ','ИА','УА','УИ'];
        const arrAlts = ['cry', 'donkey', 'baby'];

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

    changeImage1() {
        const imgs = document.getElementById("change")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.a++;
    };

    checkImage1() {
        if(this.a % 2 === 0) {
            this.viewDiv11();
        };
    };

    changeImage2() {
        const imgs = document.getElementById("change2")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.b++;
    };

    checkImage2() {
        if(this.b % 2 === 0) {
            this.viewDiv12();
        };
    };

    changeImage3() {
        const imgs = document.getElementById("change3")!;
        const imgL = imgs.getElementsByTagName("img")[1];
        const imgF = imgs.getElementsByTagName("img")[0];
        imgF.before(imgL);
        this.c++;
    };

    checkImage3() {
        if(this.c % 2 === 0) {
            this.viewDiv13();
        };
    };

    checkInp1() {
        let check = 0;
        const arr1 = ['и', 'а', 'у', 'иа', 'ау', 'уа', 'о', 'я'];
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
        
        setTimeout(() => {if (check == 8) {
            this.viewDiv16();
        } else alert('Исправьте ошибки!')})
    };

    checkInp2() {
        let check = 0;
        const arr1 = ['ау', 'иа', 'уа'];
        const arr2 = document.getElementById('div14')!.querySelectorAll('input');
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
        
        setTimeout(() => {if (check == 3) {
            this.viewDiv15();
        } else alert('Исправьте ошибки!')})
    };
}