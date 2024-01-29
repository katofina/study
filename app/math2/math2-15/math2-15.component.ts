import { Component } from "@angular/core";

@Component({
    selector: 'math2-15',
    templateUrl: './math2-15.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_15 {

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

    viewDiv11() {
        document.getElementById("div10")!.style.display = "none";
        document.getElementById("div11")!.style.display = "block";
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
                const arr = ['54 x 1', '60 - 6', '27 x 2', '1 x 54', '6 x 9', '27 + 27', '9 x 6', '2 x 27'];
                const arr2 = ['7 x 9', '1 x 63', '70 - 7', '33 + 30', '9 x 7', '30 + 33', '63 x 1'];
                const arr3 = ['5 x 6', '30 x 1', '6 x 5', '1 x 30', '15 x 2', '2 x 15', '40 - 10', '15 + 15'];
                const arr4 = ['40 x 1', '80 - 40', '20 + 20', '1 x 40', '20 x 2', '2 x 20', '8 x 5', '5 x 8'];
                if (target.innerHTML == '54') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '63') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '30') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '40') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['2 + 8', '6 + 4', '10 + 0', '9 + 1', '8 + 2', '7 + 3', '5 + 5', '3 + 7', '1 + 9', '4 + 6'];
        const arr2 = ['7 + 2', '2 + 7', '3 + 6', '4 + 5', '8 + 1', '6 + 3', '1 + 8', '5 + 4'];
        const arr3 = ['7 + 1', '8 + 0', '1 + 7', '0 + 8', '4 + 4', '2 + 6', '3 + 5', '5 + 3', '6 + 2'];
        const arr4 = ['5 + 2', '6 + 1', '1 + 6', '3 + 4', '7 + 0', '2 + 5', '4 + 3'];
        const arr5 = ['4 + 2', '3 + 3', '6 + 0', '2 + 4', '5 + 1', '0 + 6', '1 + 5'];
        const arr6 = ['4 + 1', '1 + 4', '5 + 0', '2 + 3', '3 + 2', '0 + 5'];
        const arr7 = ['0 + 4', '4 + 0', '1 + 3', '3 + 1', '2 + 2'];
        const arr8 = ['3 + 0', '0 + 3', '2 + 1', '1 + 2'];
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
        const arr1 = [8, 5, 5, 3, 2, 5, 3, 4, 8, 10, 10, 6];
        const arr2 = document.getElementById('div6')!.querySelectorAll('input');
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

        if(check === 12) {
            this.viewDiv7();
        }
    };

    addEvent3() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['10', '15', '25', '30', '40', '40', '42', '50', '60', '80', '100', '130'];
        const arr2 = ['2+8', '35-20', '5x5', '3+27', '5x8', '17+23', '6x7', '25+25', '36+24', '100-20', '85+15', '170-40'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target2.innerHTML);
                index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) || 
                (((index2 == 9) || (index2 == 10)) && ((index1 == 9) || (index1 == 10))) ||
                (((index2 == 4) || (index2 == 5)) && ((index1 == 4) || (index1 == 5)))) {
                    target1.remove();
                    target2.remove();
                }else {
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