import { Component } from "@angular/core";

@Component({
    selector: 'math2-14',
    templateUrl: './math2-14.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_14 {

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

    viewDiv13() {
        document.getElementById("div12")!.style.display = "none";
        document.getElementById("div13")!.style.display = "block";
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
                const arr = ['3 x 7', '1 x 21', '21 x 1', '10 + 11', '7 x 3', '11 + 10', '30 - 9', '5 + 16'];
                const arr2 = ['5 x 3', '15 x 1', '20 - 5', '7 + 8', '1 x 15', '10 + 5', '3 x 5', '5 + 10', '8 + 7'];
                const arr3 = ['2 x 18', '1 x 36', '18 x 2', '4 x 9', '9 x 4', '36 x 1', '40 - 4', '18 + 18', '5 + 16'];
                const arr4 = ['5 x 7', '40 - 5', '10 + 25', '15 + 20', '1 x 35', '35 x 1', '20 + 15', '25 + 10', '7 x 5'];
                if (target.innerHTML == '21') {
                    if (arr.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '15') {
                    if (arr2.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '36') {
                    if (arr3.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                } else if (target.innerHTML == '35') {
                    if (arr4.includes(target2.innerHTML)) {target2.style.opacity = '0'}
                    else {alert('Неправильно!')};
                };
        })});
    };

    checkInput1() {
        let check = 0;
        const arr1 = [6, 2, 7, 6, 10, 3, 1, 0, 11, 8, 9, 4];
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

        if(check === 12) {
            this.viewDiv6();
        }
    };

    check2() {
        let check = 0;
        const array1 = ['сотня', 'десятков', 'единиц',
                        'сотни', 'десятков', 'единиц',
                        'сотни', 'десятков', 'единиц',
                        'сотен', 'десятка', 'единиц',
                        'сотен', 'десятков', 'единицы',
                        'сотен', 'десятков', 'единицы',
                        'сотен', 'десятка', 'единиц',
                        'сотен', 'десятков', 'единиц',
                        'сотни', 'десятка', 'единицы',
                        'сотен', 'десятков', 'единиц',
                        'сотни', 'десятка', 'единицы',
                        'сотен', 'десятков', 'единиц'];
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
        if (check == 36) { 
            this.viewDiv9();
        };
    };

    addEvent2() {
        const btns = document.getElementById('div8')!.querySelectorAll('button');
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

    addEvent3() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['16', '20', '24', '32', '40', '40', '45', '50', '60', '80', '80', '100'];
        const arr2 = ['4x4', '70-50', '3x8', '4x8', '55-15', '17+23', '20+25', '26+24', '33+27', '42+38', '100-20', '94+6'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target2.innerHTML);
                index1 = arr1.indexOf(target1.innerHTML);
                if (index2 == index1) {
                    target1.remove();
                    target2.remove();
                };
                if(((index2 == 9) || (index2 == 10)) && ((index1 == 9) || (index1 == 10))) {
                    target1.remove();
                    target2.remove();
                };
                if(((index2 == 4) || (index2 == 5)) && ((index1 == 4) || (index1 == 5))) {
                    target1.remove();
                    target2.remove();
                };
        })});

        exs.forEach(function(ex) { 
            ex.addEventListener('click', (event) => {
                target2 = event.target as HTMLElement;
                index2 = arr2.indexOf(target2.innerHTML);
        })});
    };
}