import { Component } from "@angular/core";

@Component({
    selector: 'math2-24',
    templateUrl: './math2-24.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_24 {

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
                const arr = ['12 + (0+3)', '15 + 0', '30 - (10+5)', '5 x (0+3)', '20 - (10+5)', '3 + 12', '1 x 15', '15 x (5-4)', '(20-10) + 5'];
                const arr2 = ['4 x (2+2)', '(0+2) x 8', '4 x (6-2)', '20 - 4', '8 x (2+0)', '1 x (4x4)'];
                const arr3 = ['64 x (5-4)', '(4+4) x 8', '8 x 8', '(2+2) + 60', '1 x 64', '70 - 6', '8 x (4+4)'];
                const arr4 = ['9 x 3', '3 x (5+4)', '10 + 10 + 7', '14 + 13', '30 - 3', '1 x 27', '3 x 9', '10 + 17', '27 x (10-9)'];
                if (target.innerHTML == '15') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '16') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '64') {
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
        const arr1 = ['0 + 100', '200-100', '60 + 40'];
        const arr2 = ['40 - 10', '30 + 0', '50 - 20'];
        const arr3 = ['30 + 10', '20 + 20', '50 - 10'];
        const arr4 = ['70 - 20', '30 + 20', '40 + 10'];
        const arr5 = ['20 + 40', '30 + 30', '80 - 20'];
        const arr6 = ['80 - 10', '20 + 50', '30 + 40'];
        const arr7 = ['10 + 70', '50 + 30', '100 - 20'];
        const arr8 = ['40 + 50', '110 - 20', '70 + 20'];
        let target2: any;

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                if (((target1.innerHTML == '100') && (arr1.includes(target2.innerHTML))) || 
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
        const arr1 = [60, 30, 0, 10, 0, 20, 40, 10];
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
        const arr1 = ['6', '10', '10', '40', '45', '50', '50', '70', '72', '80', '85', '100'];
        const arr2 = ['30 : 5', '100 : 10', '50 : 5', '84-(24+20)', '20+(5x5)', '5 x 10', '70 - 20', '100-(20+10)', '9 x 8', '94 - 14', '55+(15+15)', '100-(20-20)'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    (((index2 == 1) || (index2 == 2)) && ((index1 == 2) || (index1 == 1))) ||
                    (((index2 == 5) || (index2 == 6)) && ((index1 == 6) || (index1 == 5)))) {
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