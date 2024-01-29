import { Component } from "@angular/core";

@Component({
    selector: 'math2-20',
    templateUrl: './math2-20.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_20 {

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
                const arr = ['50 + 50', '2 x 50', '50 x 2', '300 - 200', '100 x 1', '4 x 25', '25 x 4', '1 x 100'];
                const arr2 = ['40 + 56', '2 x 48', '48 x 2', '0 + 96', '100 - 4', '1 x 96', '96 + 0', '56 + 40', '96 x 1', '48 + 48'];
                const arr3 = ['6 x 7', '42 x 1', '1 x 42', '21 x 2', '2 x 21', '7 x 6', '50 - 8', '20 + 22'];
                const arr4 = ['8 x 8', '64 x 1', '2 x 32', '70 - 6', '30 + 34', '32 + 32', '1 x 64', '32 x 2', '64 + 0'];
                if (target.innerHTML == '100') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '96') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '42') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '64') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['18 - 8', '100-90', '19 - 9'];
        const arr2 = ['49 - 40', '19 - 10', '18 - 9'];
        const arr3 = ['19 - 11', '18 - 10', '38 - 30'];
        const arr4 = ['107-100', '18 - 11', '19 - 12'];
        const arr5 = ['19 - 13', '56 - 50', '18 - 12'];
        const arr6 = ['19 - 14', '95 - 90', '18 - 13'];
        const arr7 = ['18 - 14', '14 - 10', '19 - 15'];
        const arr8 = ['18 - 15', '63 - 60', '19 - 16'];
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
        const arr1 = [15, 20, 10, 14, 1, 17, 26, 43];
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

    checkInput2() {
        let check = 0;
        const arr1 = [3, 3, 7, 3, 3, 7, 26];
        const arr2 = document.getElementById('div8')!.querySelectorAll('input');
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

        if(check === 7) {
            this.viewDiv9();
        }
    };

    addEvent3() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['5', '6', '8', '22', '36', '40', '72', '96', '100', '100'];
        const arr2 = ['50 : 10', '24 : 4', '48 : 6', '13+17-8', '6 x 6', '15+30-5', '9 x 8', '106 - 10', '10 x 10', '100+50-50'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    (((index2 == 8) || (index2 == 9)) && ((index1 == 9) || (index1 == 8)))) {
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