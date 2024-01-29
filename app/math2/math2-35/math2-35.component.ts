import { Component } from "@angular/core";

@Component({
    selector: 'math2-35',
    templateUrl: './math2-35.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_35 {
    checking = 0;

    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "block";
        setTimeout(this.viewDiv12, 120000);
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
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "block";
    };

    alertRight() {
        alert('Задание выполнено правильно!')
    };

    alertWrong() {
        alert('Задание выполнено неправильно!')
    };

    checkInput1() {
        let check = 0;
        const arr1 = [2, 0, 8, 3, 6, 5, 2, 0];
        const arr2 = document.getElementById('div2')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '2px solid green';
                check++;
            } else {
                arr2[i].style.border = '2px solid red';
            };
        };
        setTimeout(() => {if(check === 8) {
            this.alertRight();
            this.checking ++;
            this.viewDiv3();
        } else {
            this.alertWrong();
            this.viewDiv3();
        };},100);
    };

    check1() {
        let check = 0;
        const array1 = ['сотня', 'десятков', 'единицы',
                        'десятков', 'единиц',
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
        setTimeout(() => {if (check == 8) {
            this.alertRight();
            this.viewDiv4();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv4();
        };}, 200)
    };

    addEvent1() {
        const btns3 = document.getElementById('div3')!.querySelectorAll('button');
        const btns4 = document.getElementById('div4')!.querySelectorAll('button');
        const btns8 = document.getElementById('div8')!.querySelectorAll('button');
        const ulTa3 = document.getElementById('ul1')!;
        const ulTa4 = document.getElementById('ul2')!;
        const uls8 = document.getElementById('div8')!.querySelectorAll('ul');
        const as3 = document.getElementById('head')!.querySelectorAll('a');
        const as4 = document.getElementById('head2')!.querySelectorAll('a');
        const as8 = document.getElementById('head3')!.querySelectorAll('a');
        let target1: any;
        let target2: any;
        let target3: any;
        let sibling: any;
        ulTa3.remove();
        ulTa4.remove();
        ulTa3.style.display = 'table';
        ulTa4.style.display = 'table';

        btns3.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                target1.parentElement!.append(ulTa3);
        })});

        as3.forEach(function(a) { 
            a.addEventListener('click', (event) => {
                let target = event.target as HTMLElement;
                target1.innerHTML = target.innerHTML;
                ulTa3.remove();
        })});

        btns4.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                target2 = event.target as HTMLElement;
                target2.parentElement!.append(ulTa4);
        })});

        as4.forEach(function(a) { 
            a.addEventListener('click', (event) => {
                let target = event.target as HTMLElement;
                target2.innerHTML = target.innerHTML;
                ulTa4.remove();
        })});

        btns8.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                target3 = event.target as HTMLElement;
                sibling = target3.nextElementSibling;
                sibling.style.display = 'block';
        })});

        as8.forEach(function(a) { 
            a.addEventListener('click', (event) => {
                let target = event.target as HTMLElement;
                target3.innerHTML = target.innerHTML;
                sibling.style.display = 'none';
        })});
    };

    check2() {
        let check = 0;
        const array1 = ['&lt;', '&gt;', '&gt;', '=', '=', '&lt;'];
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
        setTimeout(() => {if (check == 6) {
            this.alertRight();
            this.viewDiv5();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv5();
        };}, 200)
    };

    checkInput2() {
        let check = 0;
        const arr1 = [33, 35, 40];
        const arr2 = document.getElementById('div5')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '2px solid green';
                check++;
            } else {
                arr2[i].style.border = '2px solid red';
            };
        };
        setTimeout(() => {if(check === 3) {
            this.alertRight();
            this.viewDiv6();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv6();
        };}, 100)
    };

    checkInput3() {
        let check = 0;
        const arr1 = [24, 40, 20, 10, 16, 20];
        const arr2 = document.getElementById('div6')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '2px solid green';
                check++;
            } else {
                arr2[i].style.border = '2px solid red';
            };
        };
        setTimeout(() => {if(check === 6) {
            this.alertRight();
            this.viewDiv7();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv7();
        };}, 100);
    };

    checkInput4() {
        const input = (<HTMLInputElement>document.getElementById('inputR')).value;
        if (input == '4') {
            this.alertRight();
            this.viewDiv8();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv8();
        };
    };

    check3() {
        let check = 0;
        const array1 = ['7', '+', '3', '10', 'об.', '10', 'обезьян'];
        const array2: string[] = [];
        const array3 = document.getElementById('head3')!.querySelectorAll('button');
        array3.forEach(function(el) {array2.push(el.innerHTML);});
        for (let i = 0; i < (array1.length); i++) {
            if(array1[i] == array2[i]) {
                array3[i].style.border = '3px solid green';
                check++;
            } else {
                array3[i].style.border = '3px solid red';
            };
        };
        setTimeout(() => {if (check == 7) {
            this.alertRight();
            this.viewDiv9();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv9();
        };}, 100);
    };

    checkInput5() {
        let check = 0;
        const arr1 = [17, 15];
        const arr2 = document.getElementById('div9')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '2px solid green';
                check++;
            } else {
                arr2[i].style.border = '2px solid red';
            };
        };
        setTimeout(() => {if(check === 2) {
            this.alertRight();
            this.viewDiv10();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv10();
        };}, 100);
    };


    checkInput6() {
        let check = 0;
        const arr1 = ['12', '00'];
        const arr2 = document.getElementById('div10')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach(function(el) {arr3.push(el.value);});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '2px solid green';
                check++;
            } else {
                arr2[i].style.border = '2px solid red';
            };
        };
        setTimeout(() => {if(check === 2) {
            this.alertRight();
            this.viewDiv11();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv11();
        };}, 100);
    };

    checkInput7() {
        let check = 0;
        const arr1 = [10, 2000, 30, 1];
        const arr2 = document.getElementById('div11')!.querySelectorAll('input');
        const arr3: number[] = [];
        arr2.forEach(function(el) {arr3.push(Number(el.value));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '2px solid green';
                check++;
            } else {
                arr2[i].style.border = '2px solid red';
            };
        };
        setTimeout(() => {if(check === 2) {
            this.alertRight();
            this.viewDiv12();
            this.checking ++;
        } else {
            this.alertWrong();
            this.viewDiv12();
        };}, 100)
    };

    addEvent2() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['10', '15', '25', '30', '40', '40', '42', '50', '60', '80', '100', '130'];
        const arr2 = ['2 + 8', '35 - 20', '5 x 5', '3 + 27', '5 x 8', '17 + 23', '6 x 7', '25 + 25', '36 + 24', '100 - 20', '85 + 15', '170 - 40'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    ((index2 == 4) || (index2 == 5)) && ((index1 == 5) || (index1 == 4))) {
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