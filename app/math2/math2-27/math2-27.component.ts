import { Component } from "@angular/core";

@Component({
    selector: 'math2-27',
    templateUrl: './math2-27.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_27 {

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

    viewDivSV2() {
        document.getElementById("divSV1")!.style.display = "none";
        document.getElementById("divSV2")!.style.display = "block";
    };

    viewDivSV3() {
        document.getElementById("divSV2")!.style.display = "none";
        document.getElementById("divSV3")!.style.display = "block";
    };

    viewDivSV4() {
        document.getElementById("divSV3")!.style.display = "none";
        document.getElementById("divSV4")!.style.display = "block";
    };

    viewDivSV5() {
        document.getElementById("divSV4")!.style.display = "none";
        document.getElementById("divSV5")!.style.display = "block";
    }

    viewDivSV6() {
        document.getElementById("divSV5")!.style.display = "none";
        document.getElementById("divSV6")!.style.display = "block";
    };

    viewDivSV7() {
        document.getElementById("divSV6")!.style.display = "none";
        document.getElementById("divSV7")!.style.display = "block";
    };

    viewDivSV8() {
        document.getElementById("divSV7")!.style.display = "none";
        document.getElementById("divSV8")!.style.display = "block";
    };

    viewDivSV9() {
        document.getElementById("divSV8")!.style.display = "none";
        document.getElementById("divSV9")!.style.display = "block";
    };

    viewDivSV10() {
        document.getElementById("divSV9")!.style.display = "none";
        document.getElementById("divSV10")!.style.display = "block";
    };
    
    viewDivPW2() {
        document.getElementById("PW1")!.style.display = "none";
        document.getElementById("PW2")!.style.display = "block";
    };

    viewDivPW3() {
        document.getElementById("PW2")!.style.display = "none";
        document.getElementById("PW3")!.style.display = "block";
    };

    viewDivPW4() {
        document.getElementById("PW3")!.style.display = "none";
        document.getElementById("PW4")!.style.display = "block";
    };

    viewDivPW5() {
        document.getElementById("PW4")!.style.display = "none";
        document.getElementById("PW5")!.style.display = "block";
    }

    viewDivPW6() {
        document.getElementById("PW5")!.style.display = "none";
        document.getElementById("PW6")!.style.display = "block";
    };

    viewDivPW7() {
        document.getElementById("PW6")!.style.display = "none";
        document.getElementById("PW7")!.style.display = "block";
    };

    addEvent1() {
        const btns = document.getElementById('number')!.querySelectorAll('button');
        const strs = document.getElementById('structure')!.querySelectorAll('div');
        const arr1 = ['350 - 250', '500 - 400', '50 + 50'];
        const arr2 = ['390 - 300', '40 + 50', '120 - 30'];
        const arr3 = ['40 + 40', '130 - 50', '380 - 300'];
        const arr4 = ['370 - 300', '120 - 50', '20 + 50'];
        const arr5 = ['360 - 300', '20 + 40', '120 - 60'];
        const arr6 = ['350 - 300', '120 - 70', '20 + 30'];
        const arr7 = ['340 - 300', '120 - 80', '40 + 0'];
        const arr8 = ['330 - 300', '120 - 90', '10 + 20'];
        let target2: any;

        btns.forEach(function(btn) { 
            btn.addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                if (((target1.innerHTML == '100') && (arr1.includes(target2.innerHTML))) || 
                    ((target1.innerHTML == '90') && (arr2.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '80') && (arr3.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '70') && (arr4.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '60') && (arr5.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '50') && (arr6.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '40') && (arr7.includes(target2.innerHTML))) ||
                    ((target1.innerHTML == '30') && (arr8.includes(target2.innerHTML)))) {
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

    addEvent2() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['1', '6', '6', '7', '10', '25', '27', '30', '30', '50', '70', '100'];
        const arr2 = ['100:(50+50)', '(30+30) : 10', '(50-20) : 5', '56 : (6+2)', '40 : (8-4)', '5 x (100-95)', '9 x (6-3)', '(30-0) : 1', '70 - 40', '55 - 15 : 3', '64 + 2 x 3', '10 x (10+0)'];
        let index2: number;
        let target1: any;
        let target2: any;

        divs.forEach(function(div) { 
            div.addEventListener('click', (event) => {
                target1 = event.target as HTMLElement;
                let index1 = arr1.indexOf(target1.innerHTML);
                if ((index2 == index1) ||
                    (((index2 == 1) || (index2 == 2)) && ((index1 == 2) || (index1 == 1))) ||
                    (((index2 == 7) || (index2 == 8)) && ((index1 == 8) || (index1 == 7)))) {
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