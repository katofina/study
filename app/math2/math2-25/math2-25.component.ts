import { Component } from "@angular/core";

@Component({
    selector: 'math2-25',
    templateUrl: './math2-25.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_25 {

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
                const arr = ['15 + (10+5)', '5 x (3+3)', '5 x (10-4)', '40 - (10+0)', '(20+15) - 5', '1 x 30', '30 + 0', '3 + 27'];
                const arr2 = ['8 x (5+0)', '4 x (4+6)', '1 x (4x10)', '4 x (16-6)', '50 - (4+6)', '(3+2) x 8'];
                const arr3 = ['(4+6) x 6', '(2+2) + 56', '76 - 16', '60 x (5-4)', '1 x 60', '6 x (5+5)', '30 x 2'];
                const arr4 = ['20 x (10-6)', '8 x (7+3)', '102 - 22', '0 + 80', '73 + 7', '40 + 47 - 7', '20 x 4', '1 x 80', '40 x 2'];
                if (target.innerHTML == '30') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '40') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '60') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '80') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['300 - 200', '150 - 50', '70 + 30'];
        const arr2 = ['100 - 10', '80 + 10', '190 - 100'];
        const arr3 = ['40 + 40', '110 - 30', '180 - 100'];
        const arr4 = ['170 - 100', '100 - 30', '50 + 20'];
        const arr5 = ['160 - 100', '20 + 40', '100 - 40'];
        const arr6 = ['150 - 100', '100 - 50', '20 + 30'];
        const arr7 = ['140 - 100', '100 - 60', '10 + 30'];
        const arr8 = ['130 - 100', '100 - 70', '10 + 20'];
        let target2: any;

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                if (((target1.innerHTML == '100') && (arr1.includes(target2.innerHTML))) || 
                    ((target1.innerHTML == '90') && (arr2.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '80') && (arr3.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '70') && (arr4.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '60') && (arr5.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '50') && (arr6.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '40') && (arr7.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '30') && (arr8.includes(target2.innerHTML)))) {
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
        const arr1 = [20, 100, 30, 36, 49, 64, 81, 25];
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
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['5', '6', '10', '30', '50', '56', '60', '70', '72', '80', '90', '100'];
        const arr2 = ['(25+25) : 10', '(40-10) : 5', '110-(60+40)', '(30-20) x 3', '5 x (100-90)', '7 x (6+2)', '100-(20+20)', '55 + (15x1)', '9 x (5+3)', '94 - (7+7)', '70 + 20', '10 x (10+0)'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    (((index2 == 1) || (index2 == 2)) && ((index1 == 2) || (index1 == 1))) ||
                    (((index2 == 7) || (index2 == 8)) && ((index1 == 8) || (index1 == 7)))) {
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