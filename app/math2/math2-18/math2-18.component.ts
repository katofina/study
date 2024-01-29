import { Component } from "@angular/core";

@Component({
    selector: 'math2-18',
    templateUrl: './math2-18.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_18 {

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
                const arr = ['8 x 2', '16 x 1', '0 + 16', '20 - 4', '2 x 8', '16 + 0', '1 x 16', '8 + 8'];
                const arr2 = ['18 + 18', '12 x 3', '4 x 9', '18 x 2', '40 - 4', '9 x 4', '2 x 18', '0 + 36', '3 x 12', '36 + 0'];
                const arr3 = ['20 + 25', '1 x 45', '45 x 1', '25 + 20', '9 x 5', '40 + 5', '50 - 5', '5 x 9'];
                const arr4 = ['3 x 20', '20 x 3', '30 x 2', '6 x 10', '30 + 30', '1 x 60', '60 x 1', '2 x 30', '10 x 6'];
                if (target.innerHTML == '16') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '36') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '45') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '60') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    addEvent2() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['40 - 30', '15 - 5', '14 - 4'];
        const arr2 = ['14 - 5', '15 - 6', '13 - 4'];
        const arr3 = ['13 - 5', '14 - 6', '15 - 7'];
        const arr4 = ['15 - 8', '13 - 6', '14 - 7'];
        const arr5 = ['14 - 8', '13 - 7', '15 - 9'];
        const arr6 = ['13 - 8', '14 - 9', '15 - 10'];
        const arr7 = ['15 - 11', '13 - 9', '14 - 10'];
        const arr8 = ['13 - 10', '15 - 12', '14 - 11'];
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

    addEvent3() {
        const sums1 = document.getElementById('sum1')!.querySelectorAll('div');
        const sums2 = document.getElementById('sum2')!.querySelectorAll('div');
        const arr1 = ['12 + 34', '18 + 51', '33 + 22', '13 + 16', '7 + 6', '7 + 13', '9 + 22', '13 + 25', '37 + 13', '45 + 50'];
        const arr2 = ['34 + 12', '51 + 18', '22 + 33', '16 + 13', '6 + 7', '13 + 7', '22 + 9', '25 + 13', '13 + 37', '50 + 45'];
        let index2: number;
        let target1: any;
        let target2: any;

        sums1.forEach(function(div) { 
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

        sums2.forEach(function(ex) { 
            ex.addEventListener('click', (event) => {
                target2 = event.target as HTMLElement;
                index2 = arr2.indexOf(target2.innerHTML);
        })});
    };

    addEvent4() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['2', '4', '5', '10', '20', '28', '30', '54', '65', '200'];
        const arr2 = ['20 : 10', '12 : 3', '45 : 9', '35 - 25', '10 x 2', '11 + 17', '15 + 15', '9 x 6', '35 + 30', '100+100'];
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