import { Component } from "@angular/core";

@Component({
    selector: 'math2-22',
    templateUrl: './math2-22.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_22 {

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

    addEvent1() {
        const spans = document.getElementById('div2')!.querySelectorAll('span');
        const tds = document.getElementById('div2')!.querySelectorAll('td');
        let target: HTMLElement;

        spans.forEach(function(span) { 
            span.addEventListener('click', (event) => {
                spans.forEach(function(spant){
                    if (spant.innerHTML == span.innerHTML) {spant.style.backgroundColor = 'blue';}
                    else {spant.style.backgroundColor = 'rgb(75, 73, 73)';}
                ;})
                target = event.target as HTMLElement;
        })});

        tds.forEach(function(td) { 
            td.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                const arr = ['12 + 13', '15 + 10', '13 + 12', '30 - 5', '5 x 5', '10 + 15', '25 x 1', '1 x 25'];
                const arr2 = ['23 + 13', '1 x 36', '6 x 6', '9 x 4', '4 x 9', '36 x 1', '40 - 4', '30 + 6'];
                const arr3 = ['3 x 8', '1 x 24', '8 x 3', '12 + 12', '24 x 1', '6 x 4', '30 - 6', '4 x 6'];
                const arr4 = ['2 x 8', '4 x 4', '1 x 16', '20 - 4', '8 + 8', '9 + 7', '10 + 6', '16 x 1', '8 x 2'];
                if (target.innerHTML == '25') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '36') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '24') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '16') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['10 + 10', '20 + 0', '0 + 20'];
        const arr2 = ['10 + 20', '0 + 30', '20 + 10'];
        const arr3 = ['30 + 10', '20 + 20', '10 + 30'];
        const arr4 = ['20 + 30', '30 + 20', '10 + 40'];
        const arr5 = ['40 + 20', '10 + 50', '30 + 30'];
        const arr6 = ['10 + 60', '20 + 50', '30 + 40'];
        const arr7 = ['20 + 60', '30 + 50', '40 + 40'];
        const arr8 = ['40 + 50', '60 + 30', '20 + 70'];
        let target2: any;

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                if (((target1.innerHTML == '20') && (arr1.includes(target2.innerHTML))) || 
                    ((target1.innerHTML == '30') && (arr2.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '40') && (arr3.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '50') && (arr4.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '60') && (arr5.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '70') && (arr6.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '80') && (arr7.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '90') && (arr8.includes(target2.innerHTML)))) {
                    target1.style.border = '3px solid green';
                    setTimeout(() => target1.style.border = '3px solid yellow', 200);
                    target2.remove();
                } else {
                    target1.style.border = '3px solid red';
                    setTimeout(() => target1.style.border = '3px solid yellow', 200);
                };
        })});

        strs.forEach(function(str) { 
            str.addEventListener('click', (event) => {
                target2 = event.target as HTMLElement;
        })});
    };

    checkInput1() {
        let check = 0;
        const arr1 = [80, 50, 60, 50, 60, 80, 50, 40];
        const arr2 = document.getElementById('div5')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        console.log(arr2);
        console.log(arr3);

        if(check === 8) {
            this.viewDiv6();
        }
    };

    addEvent3() {
        const locks = document.getElementById('locks')!.querySelectorAll('img');
        const keys = document.getElementById('keys')!.querySelectorAll('img');
        let alt1: any;
        let alt2: any;
        let target1: HTMLImageElement;
        let target2: HTMLImageElement;

        locks.forEach(function(img) { 
            img.addEventListener('click', (event) => {
                target1 = event.target as HTMLImageElement;
                alt1 = target1.getAttribute('alt');
                target1.style.boxShadow = '0px 0px transparent, 0px 5px 10px rgba(0,0,0,0.25)';
                setTimeout(() => target1.style.boxShadow = 'none', 200);
        })});

        keys.forEach(function(img) { 
            img.addEventListener('click', (event) => {
                target2 = event.target as HTMLImageElement;
                target2.style.boxShadow = '0px 0px transparent, 0px 5px 10px rgba(0,0,0,0.25)';
                setTimeout(() => target2.style.boxShadow = 'none', 200);
                alt2 = target2.getAttribute('alt');
                if (((alt1 == 'знайка') && (alt2 == 'дом14')) ||
                ((alt1 == 'кнопка') && (alt2 == 'дом17')) ||
                ((alt1 == 'коротышка') && (alt2 == 'дом19'))) {
                    target1.remove();
                    target2.remove();
                } else alert('Неправильно!');
        })});
    };

    addEvent4() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['5', '9', '18', '28', '30', '36', '40', '40', '50', '55', '70', '90'];
        const arr2 = ['50 : 10', '36 : 4', '3 x 6', '70-50+8', '26+24-20', '4 x 9', '20+25-5', '4 x 10', '94+6-50', '55-15+15', '100-20-10', '100-20+10'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    (((index2 == 6) || (index2 == 7)) && ((index1 == 7) || (index1 == 6)))) {
                    target1.remove();
                    target2.remove();
                } else {
                    target1.style.border = '3px solid red';
                    setTimeout(() => target1.style.border = '3px solid black', 100);
                };
        })});

        exs.forEach(function(ex) { 
            ex.addEventListener('click', (event) => {
                target2 = event.target as HTMLElement;
                index2 = arr2.indexOf(target2.innerHTML);
        })});
    };
}