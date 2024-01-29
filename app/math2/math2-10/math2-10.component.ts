import { Component } from "@angular/core";

@Component({
    selector: 'math2-10',
    templateUrl: './math2-10.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_10 {
    sum30 = false;
    sum40 = false;
    sum49 = false;
    sum54 = false;
    sum64 = false;
    sum12 = false;
    sum63 = false;
    sum36 = false;

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
    }

    clickSum30() {
        this.sum30 = true;
        this.sum40 = false;
        this.sum49 = false;
        this.sum54 = false;
        this.sum64 = false;
        this.sum12 = false;
        this.sum63 = false;
        this.sum36 = false;
    };

    clickSum40() {
        this.sum30 = false;
        this.sum40 = true;
        this.sum49 = false;
        this.sum54 = false;
        this.sum64 = false;
        this.sum12 = false;
        this.sum63 = false;
        this.sum36 = false;
    };

    clickSum49() {
        this.sum30 = false;
        this.sum40 = false;
        this.sum49 = true;
        this.sum54 = false;
        this.sum64 = false;
        this.sum12 = false;
        this.sum63 = false;
        this.sum36 = false;
    };

    clickSum54() {
        this.sum30 = false;
        this.sum40 = false;
        this.sum49 = false;
        this.sum54 = true;
        this.sum64 = false;
        this.sum12 = false;
        this.sum63 = false;
        this.sum36 = false;
    };

    clickSum64() {
        this.sum30 = false;
        this.sum40 = false;
        this.sum49 = false;
        this.sum54 = false;
        this.sum64 = true;
        this.sum12 = false;
        this.sum63 = false;
        this.sum36 = false;
    };

    clickSum12() {
        this.sum30 = false;
        this.sum40 = false;
        this.sum49 = false;
        this.sum54 = false;
        this.sum64 = false;
        this.sum12 = true;
        this.sum63 = false;
        this.sum36 = false;
    };

    clickSum63() {
        this.sum30 = false;
        this.sum40 = false;
        this.sum49 = false;
        this.sum54 = false;
        this.sum64 = false;
        this.sum12 = false;
        this.sum63 = true;
        this.sum36 = false;
    };

    clickSum36() {
        this.sum30 = false;
        this.sum40 = false;
        this.sum49 = false;
        this.sum54 = false;
        this.sum64 = false;
        this.sum12 = false;
        this.sum63 = false;
        this.sum36 = true;
    };

    clickInc30() {
        if (this.sum30 == true) {
            document.getElementById('inc30')!.remove();
            document.getElementById('sum30')!.remove();
        } else {
            document.getElementById('inc30')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc30')!.style.border = '3px solid black', 500);
        };
    };

    clickInc40() {
        if (this.sum40 == true) {
            document.getElementById('inc40')!.remove();
            document.getElementById('sum40')!.remove();
        } else {
            document.getElementById('inc40')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc40')!.style.border = '3px solid black', 500);
        };
    };

    clickInc49() {
        if (this.sum49 == true) {
            document.getElementById('inc49')!.remove();
            document.getElementById('sum49')!.remove();
        } else {
            document.getElementById('inc49')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc49')!.style.border = '3px solid black', 500);
        };
    };

    clickInc54() {
        if (this.sum54 == true) {
            document.getElementById('inc54')!.remove();
            document.getElementById('sum54')!.remove();
        } else {
            document.getElementById('inc54')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc54')!.style.border = '3px solid black', 500);
        };
    };

    clickInc64() {
        if (this.sum64 == true) {
            document.getElementById('inc64')!.remove();
            document.getElementById('sum64')!.remove();
        } else {
            document.getElementById('inc64')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc64')!.style.border = '3px solid black', 500);
        };
    };

    clickInc12() {
        if (this.sum12 == true) {
            document.getElementById('inc12')!.remove();
            document.getElementById('sum12')!.remove();
        } else {
            document.getElementById('inc12')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc12')!.style.border = '3px solid black', 500);
        };
    };

    clickInc63() {
        if (this.sum63 == true) {
            document.getElementById('inc63')!.remove();
            document.getElementById('sum63')!.remove();
        } else {
            document.getElementById('inc63')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc63')!.style.border = '3px solid black', 500);
        };
    };

    clickInc36() {
        if (this.sum36 == true) {
            document.getElementById('inc36')!.remove();
            document.getElementById('sum36')!.remove();
        } else {
            document.getElementById('inc36')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc36')!.style.border = '3px solid black', 500);
        };
    };

    addEvent() {
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

    check1() {
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
        const array3 = document.getElementById('head')!.querySelectorAll('button');
        array3.forEach(function(el) {array2.push(el.innerHTML);});
        for (let i = 0; i < (array1.length); i++) {
            if(array1[i] == array2[i]) {
                array3[i].style.border = '2px solid green';
                check++;
            } else {
                array3[i].style.border = '2px solid red';
            };
        };
        if (check == 36) { 
            this.viewDiv8();
        };
    };

    checkInput1() {
        let check = 0;
        const arr1 = [30, 56, 40, 12, 9, 81, 54, 27, 100, 40, 12, 20, 12, 15, 25, 72, 45, 36, 400, 200];
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
        console.log(arr2);
        console.log(arr3);

        if(check === 20) {
            setTimeout(() => alert('Правильно!'), 500);
        }
    };
}

