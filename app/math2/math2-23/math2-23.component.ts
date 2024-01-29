import { Component } from "@angular/core";

@Component({
    selector: 'math2-23',
    templateUrl: './math2-23.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_23 {

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
                const arr = ['(20+10) - 5', '12 + (10+3)', '13 + 12', '30 - 10 + 5', '5 x (2+3)', '15 + 10', '25 x (5-4)', '1 x 25'];
                const arr2 = ['6 x (3+3)', '9 x (2+2)', '1 x (6x6)', '40 - 4', '(2+2) x 9', '36 x (3-2)'];
                const arr3 = ['3 x 8', '1 x 24', '4 x (3+3)', '30 - 6', '24 x (5-4)', '6 x (2+2)', '6+6+6+6', '(4+4) x 3'];
                const arr4 = ['9 + 7', '4 x 4', '1 x 16', '10 + 6', '20 - 4', '8 + 4 + 4', '8 x 2', '16 x (10-9)', '2 x (4+4)'];
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
        const arr1 = ['0 + 100', '100 + 0', '50 + 50'];
        const arr2 = ['40 - 10', '0 + 30', '20 + 10'];
        const arr3 = ['30 + 10', '20 + 20', '50 - 10'];
        const arr4 = ['60 - 10', '30 + 20', '10 + 40'];
        const arr5 = ['40 + 20', '10 + 50', '70 - 10'];
        const arr6 = ['80 - 10', '20 + 50', '30 + 40'];
        const arr7 = ['20 + 60', '30 + 50', '90 - 10'];
        const arr8 = ['40 + 50', '100 - 10', '20 + 70'];
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
        const arr1 = ['5', '10', '12', '22', '25', '30', '40', '45', '54', '70', '90', '100'];
        const arr2 = ['25 : 5', '30 : 3', '70-(50+8)', '26-(24-20)', '55-(15+15)', '94-(60+4)', '20+(25-5)', '5 x 9', '9 x 6', '100-(20+10)', '100-(20-10)', '10 x 10'];
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