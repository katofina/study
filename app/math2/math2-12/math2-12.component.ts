import { Component } from "@angular/core";

@Component({
    selector: 'math2-12',
    templateUrl: './math2-12.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_12 {

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

    viewDiv12() {
        document.getElementById("div11")!.style.display = "none";
        document.getElementById("div12")!.style.display = "block";
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

    checkInput1() {
        let check = 0;
        const arr1 = [6, 20, 7, 15, 10, 10, 15, 9, 10, 30, 1, 10, 10, 2, 10, 10];
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

        if(check === 16) {
            this.viewDiv6();
        }
    };

    check1() {
        let check = 0;
        const array1 = ['десяток','единиц',
                        'десятка','единиц',
                        'десятка','единиц',
                        'десятков','единицы',
                        'десятков','единиц',
                        'десятков','единиц',
                        'десятка','единицы',
                        'десятков','единиц',
                        'единицы','десятка',
                        'единиц','десятка',
                        'единиц','десятка',
                        'единиц','десятков'];
        const array2: string[] = [];
        const array3 = document.getElementById('head')!.querySelectorAll('button');
        array3.forEach(function(el) {array2.push(el.innerHTML);});
        for (let i = 0; i < (array1.length); i++) {
            if(array1[i] == array2[i]) {
                array3[i].style.border = '3px solid green';
                check++;
            } else {
                array3[i].style.border = '3px solid red';
            };
        };
        if (check == 24) { 
            this.viewDiv8();
        };
    };

    addEvent2() {
        const btns = document.getElementById('div7')!.querySelectorAll('button');
        const ulTa = document.getElementById('ul1')!;
        const as = document.getElementById('head')!.querySelectorAll('a');
        let target: any;
        ulTa.remove();
        ulTa.style.display = 'block';

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                target.parentElement!.append(ulTa);
        })});

        as.forEach(function(a) { 
            a.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                target.innerHTML = target2.innerHTML;
                ulTa.remove();
        })});
    };

    check2() {
        let check = 0;
        const array1 = ['первое слагаемое','второе слагаемое','сумма',
                        'первое слагаемое','второе слагаемое','сумма',
                        'уменьшаемое','вычитаемое','разность',
                        'уменьшаемое','вычитаемое','разность',
                        'первое слагаемое','второе слагаемое','сумма',
                        'уменьшаемое','вычитаемое','разность',
                        'первое слагаемое','второе слагаемое','сумма',
                        'уменьшаемое','вычитаемое','разность',
                        'уменьшаемое','вычитаемое','разность',
                        'первое слагаемое','второе слагаемое','сумма',
                        'уменьшаемое','вычитаемое','разность',
                        'первое слагаемое','второе слагаемое','сумма'];
        const array2: string[] = [];
        const array3 = document.getElementById('head2')!.querySelectorAll('button');
        array3.forEach(function(el) {array2.push(el.innerHTML);});
        for (let i = 0; i < (array1.length); i++) {
            if(array1[i] == array2[i]) {
                array3[i].style.border = '3px solid green';
                check++;
            } else {
                array3[i].style.border = '3px solid red';
            };
        };
        if (check == 36) { 
            alert('Правильно!');
        };
    };

    addEvent3() {
        const btns = document.getElementById('div12')!.querySelectorAll('button');
        const ulTa = document.getElementById('ul2')!;
        const as = document.getElementById('head2')!.querySelectorAll('a');
        let target: any;
        ulTa.remove();
        ulTa.style.display = 'block';

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                target.parentElement!.append(ulTa);
        })});

        as.forEach(function(a) { 
            a.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                target.innerHTML = target2.innerHTML;
                ulTa.remove();
        })});
    };
}