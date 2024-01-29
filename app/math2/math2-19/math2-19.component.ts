import { Component } from "@angular/core";

@Component({
    selector: 'math2-19',
    templateUrl: './math2-19.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_19 {

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
                const arr = ['60 - 6', '27 + 27', '2 x 27', '54 x 1', '27 x 2', '1 x 54', '6 x 9', '9 x 6'];
                const arr2 = ['48 + 0', '24 x 2', '48 x 1', '6 x 8', '50 - 2', '8 x 6', '2 x 24', '0 + 48', '1 x 48', '24 + 24'];
                const arr3 = ['32 + 32', '64 x 1', '1 x 64', '2 x 32', '8 x 8', '32 x 2', '70 - 6', '60 + 4'];
                const arr4 = ['72 x 1', '8 x 9', '9 x 8', '80 - 8', '70 + 2', '32 + 40', '1 x 72', '40 + 32', '72 + 0'];
                if (target.innerHTML == '54') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '48') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '64') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '72') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['50 - 40', '17 - 7', '16 - 6'];
        const arr2 = ['29 - 20', '17 - 8', '16 - 7'];
        const arr3 = ['38 - 30', '16 - 8', '17 - 9'];
        const arr4 = ['16 - 9', '57 - 50', '17 - 10'];
        const arr5 = ['106-100', '16 - 10', '17 - 11'];
        const arr6 = ['17 - 12', '16 - 11', '65 - 60'];
        const arr7 = ['16 - 12', '44 - 40', '17 - 13'];
        const arr8 = ['17 - 14', '16 - 13', '73 - 70'];
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
        const arr1 = [30, 45, 9, 25, 30, 33, 37, 54];
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
        const arr1 = ['3', '8', '9', '30', '38', '40', '50', '63', '80', '250'];
        const arr2 = ['30 : 10', '24 : 3', '54 : 6', '6 x 5', '13+17+8', '10 x 4', '15+30+5', '9 x 7', '103 - 23', '100+100+50'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if (index2 == index1) {
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