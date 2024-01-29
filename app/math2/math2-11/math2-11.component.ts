import { Component } from "@angular/core";

@Component({
    selector: 'math2-11',
    templateUrl: './math2-11.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_11 {

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

    addEvent() {
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
                const arr = ['56 x 1', '7 x 8', '1 x 56', '60 - 4', '40 + 16', '8 x 7'];
                const arr2 = ['1 x 36', '40 - 4', '36 x 1', '13 + 23', '9 x 4', '4 x 9'];
                const arr3 = ['50 + 50', '100 x 1', '200 - 100', '1 x 100', '10 x 10', '50 x 2'];
                const arr4 = ['12 + 12', '8 x 3', '30 - 6', '6 x 4', '3 x 8', '4 x 6'];
                if (target.innerHTML == '56') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '36') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '100') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '24') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    checkInput1() {
        let check = 0;
        const arr1 = [7, 10, 4, 5, 6, 2, 5, 4, 6, 20, 3, 6, 4, 7, 5, 6];
        const arr2 = document.getElementById('div8')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '2px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '2px solid red';
            };
        };
        console.log(arr2);
        console.log(arr3);

        if(check === 16) {
            this.viewDiv9();
        }
    };

    addEvent2() {
        const spans = document.getElementById('div10')!.querySelectorAll('span');
        const tds = document.getElementById('div10')!.querySelectorAll('td');
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
                const arr = ['5 x 5', '25 x 1', '13 + 12', '12 + 13', '1 x 25', '30 - 5'];
                const arr2 = ['30 x 1', '40 - 10', '2 x 15', '15 + 15', '1 x 30', '15 x 2'];
                const arr3 = ['50 - 2', '40 + 8', '6 x 8', '48 x 1', '1 x 48', '8 x 6'];
                const arr4 = ['21 + 21', '6 x 7', '50 - 8', '21 x 2', '7 x 6', '40 + 2'];
                if (target.innerHTML == '25') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '30') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '48') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '42') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };
}