import { Component } from "@angular/core";

@Component({
    selector: 'math2-16',
    templateUrl: './math2-16.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_16 {

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
                const arr = ['81 x 1', '27 x 3', '9 x 9', '90 - 9', '3 x 27', '36 + 45', '1 x 81', '45 + 36'];
                const arr2 = ['1 x 72', '36 x 2', '8 x 9', '42 + 30', '80 - 8', '30 + 42', '2 x 36', '9 x 8', '72 x 1'];
                const arr3 = ['6 x 9', '54 x 1', '27 + 27', '60 - 6', '9 x 6', '27 x 2', '2 x 27', '1 x 54'];
                const arr4 = ['1 x 63', '20 + 43', '70 - 7', '9 x 7', '43 + 20', '63 x 1', '7 x 9', '20 + 43'];
                if (target.innerHTML == '81') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '72') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '54') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '63') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['2+3+5', '2+4+4', '10 - 0', '7+2+1', '4+3+3', '10 + 0', '5+1+4'];
        const arr2 = ['6+2+1', '9 - 0', '5+1+3', '10 - 1', '3+3+3', '4+3+2', '9 + 0'];
        const arr3 = ['6+1+1', '3+2+3', '4+2+2', '8 + 0', '5+1+2', '8 - 0', '10 - 2'];
        const arr4 = ['6+0+1', '7 + 0', '0 + 7', '10 - 3', '1+4+2', '2+3+2', '3+1+3'];
        const arr5 = ['2+1+3', '10 - 4', '6 + 0', '1+1+4', '1+2+3', '0 + 6', '3+1+2'];
        const arr6 = ['5 + 0', '1+2+2', '4+0+1', '3+1+1', '1+3+1', '0 + 5', '10 - 5'];
        const arr7 = ['0+2+2', '2+1+1', '0 + 4', '1+3+0', '10 - 6', '4 + 0'];
        const arr8 = ['1+1+1', '0 + 3', '10-3-4', '1+0+2', '3 + 0', '10-2-5', '10 - 7'];
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
        const arr1 = [16, 14, 15, 18, 20, 20, 27, 24, 18, 30, 40, 30];
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
        const arr1 = ['5', '5', '30', '48', '50', '55', '60', '80', '100', '200'];
        const arr2 = ['10 : 2', '20 : 4', '15 + 15', '6 x 8', '25 x 2', '35 + 20', '30 x 2', '65 + 15', '40 + 60', '300 - 100'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target2.innerHTML);
                index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) || 
                (((index2 == 0) || (index2 == 1)) && ((index1 == 1) || (index1 == 0)))) {
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