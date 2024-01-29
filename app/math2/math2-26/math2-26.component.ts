import { Component } from "@angular/core";

@Component({
    selector: 'math2-26',
    templateUrl: './math2-26.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_26 {

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
                const arr = ['3 + 17', '20 + 0', '1 x 20', '30 - (10+0)', '5 x (3+1)', '(15+15) - 10', '15 + (10-5)', '1 x (30-10)'];
                const arr2 = ['(3+2) x 10', '5 x (16-6)', '60 - (4+6)', '1 x (10x5)', '10 x (5+0)', '2 x (10+15)'];
                const arr3 = ['86 - 16', '1 x 70', '70 x (5-4)', '2 x (13+22)', '35 x 2', '(20+15) x 2', '(100+20) - 50'];
                const arr4 = ['45 x 2', '83 + 7', '1 x 90', '9 x (7+3)', '10 x (10-1)', '2 x 45', '102 - 12', '40 + 57 - 7', '0 + 90'];
                if (target.innerHTML == '20') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '50') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '70') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '90') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['260 - 160', '400 - 300', '80 + 20'];
        const arr2 = ['290 - 200', '90 + 0', '110 - 20'];
        const arr3 = ['30 + 50', '120 - 40', '280 - 200'];
        const arr4 = ['270 - 200', '110 - 40', '30 + 40'];
        const arr5 = ['260 - 200', '10 + 50', '110 - 50'];
        const arr6 = ['250 - 200', '110 - 60', '10 + 40'];
        const arr7 = ['240 - 200', '110 - 70', '20 + 20'];
        const arr8 = ['230 - 200', '110 - 80', '30 + 0'];
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
        const arr1 = [20, 10, 10, 6, 7, 8, 10, 9];
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
        const arr1 = ['1', '6', '6', '7', '10', '25', '27', '30', '30', '50', '70', '100'];
        const arr2 = ['100:(50+50)', '(30+30) : 10', '(50-20) : 5', '56 : (6+2)', '40 : (8-4)', '5 x (100-95)', '9 x (6-3)', '(30-0) : 1', '70 - 40', '55 - 15 : 3', '64 + 2 x 3', '10 x (10+0)'];
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