import { Component } from "@angular/core";

@Component({
    selector: 'math2-21',
    templateUrl: './math2-21.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_21 {

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
                const arr = ['3 x 30', '90 x 1', '45 x 2', '100 - 10', '1 x 90', '45 + 45', '2 x 45', '30 x 3'];
                const arr2 = ['81 + 0', '81 x 1', '1 x 81', '79 + 2', '90 - 9', '9 x 9', '41 + 40', '2 + 79', '0 + 81', '40 + 41'];
                const arr3 = ['45 x 1', '22 + 23', '1 x 45', '25 + 20', '9 x 5', '5 x 9', '50 - 5', '20 + 25'];
                const arr4 = ['27 x 1', '3 x 9', '1 x 27', '30 - 3', '7 + 20', '13 + 14', '20 + 7', '9 x 3', '14 + 13'];
                if (target.innerHTML == '90') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '81') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '45') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '27') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['18 - 8', '100 - 90', '19 - 9'];
        const arr2 = ['109-100', '19 - 10', '18 - 9'];
        const arr3 = ['19 - 11', '18 - 10', '108-100'];
        const arr4 = ['107-100', '18 - 11', '19 - 12'];
        const arr5 = ['19 - 13', '306-300', '18 - 12'];
        const arr6 = ['19 - 14', '205-200', '18 - 13'];
        const arr7 = ['18 - 14', '404-400', '19 - 15'];
        const arr8 = ['18 - 15', '303-300', '19 - 16'];
        let target2: any;

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                if (((target1.innerHTML == '10') && (arr1.includes(target2.innerHTML))) || 
                    ((target1.innerHTML == '9') && (arr2.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '8') && (arr3.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '7') && (arr4.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '6') && (arr5.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '5') && (arr6.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '4') && (arr7.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '3') && (arr8.includes(target2.innerHTML)))) {
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
        const arr1 = [2, 5, 3, 10, 13, 4, 7, 90];
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
                if (((alt1 == 'замок1') && (alt2 == 'ключС')) ||
                ((alt1 == 'замок2') && (alt2 == 'ключЗ')) ||
                ((alt1 == 'замок3') && (alt2 == 'ключБ'))) {
                    target1.remove();
                    target2.remove();
                } else alert('Неправильно!');
        })});

        keys.forEach(function(img) { 
            img.addEventListener('click', (event) => {
                target2 = event.target as HTMLImageElement;
                target2.style.boxShadow = '0px 0px transparent, 0px 5px 10px rgba(0,0,0,0.25)';
                setTimeout(() => target2.style.boxShadow = 'none', 200);
                alt2 = target2.getAttribute('alt');
        })});
    };

    addEvent4() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['16', '20', '24', '32', '40', '40', '45', '50', '60', '80', '80', '100'];
        const arr2 = ['4 x 4', '70 - 50', '3 x 8', '4 x 8', '17 + 23', '55 - 15', '20 + 25', '26 + 24', '33 + 27', '42 + 38', '100 - 20', '94 + 6'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    (((index2 == 4) || (index2 == 5)) && ((index1 == 5) || (index1 == 4))) ||
                    (((index2 == 9) || (index2 == 10)) && ((index1 == 10) || (index1 == 9)))) {
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