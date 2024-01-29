import { Component } from "@angular/core";

@Component({
    selector: 'math2-29',
    templateUrl: './math2-29.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_29 {

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

    checkInput1() {
        let check = 0;
        const arr1 = ['(10+4)-(2+3)','100:(12-2)', '50:(8-3)', '5x(6+4)', '(5+6)x3', '(10-4)x3', '7x3', '25:5'];
        const arr2 = document.getElementById('div9')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach(function(el) {arr3.push((el.value).replace(/\s/g, ''));});

        for (let i = 0; i < (arr1.length); i++) {
            if(arr1[i] == arr3[i]) {
                arr2[i].style.border = '3px solid green';
                check++;
            } else {
                arr2[i].style.border = '3px solid red';
            };
        };
        console.log(arr2);
        console.log(arr3);

        if(check === 8) {
            this.viewDiv10();
        }
    };

    checkInput2() {
        let check = 0;
        const arr1 = [3, 3, 7, 3, 3, 7, 26];
        const arr2 = document.getElementById('div10')!.querySelectorAll('input');
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
            alert('Правильно!');
        }
    };
}