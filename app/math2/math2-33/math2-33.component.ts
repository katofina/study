import { Component } from "@angular/core";

@Component({
    selector: 'math2-33',
    templateUrl: './math2-33.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_33 {
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

    viewDiv14() {
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "block";
    };

    viewDiv15() {
        document.getElementById("div14")!.style.display = "none";
        document.getElementById("div15")!.style.display = "block";
    };

    viewDiv16() {
        document.getElementById("div15")!.style.display = "none";
        document.getElementById("div16")!.style.display = "block";
    };

    viewDiv17() {
        document.getElementById("div16")!.style.display = "none";
        document.getElementById("div17")!.style.display = "block";
    };

    addEvent2() {
        const divs = document.getElementById('sum')!.querySelectorAll('div');
        const exs = document.getElementById('example')!.querySelectorAll('div');
        const arr1 = ['1 м 50 см', '405 см', '600 см', '3 м', '230 см', '407 см', '200 см'];
        const arr2 = ['150 см', '4 м 5 см', '6 м', '300 см', '2 м 30 см', '4 м 7 см', '2 м'];
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

    addEvent3() {
        const clocks = document.getElementById('clocks')!.querySelectorAll('img');
        const val = document.getElementById('val')!.querySelectorAll('div');
        const values = document.getElementById('values')!.querySelectorAll('div');
        const arr1 = ['часы815', 'часы10', 'часы8', 'часы1015', '200 см', '500 см', '106 см'];
        const arr2 = ['20 ч. 15 мин.', '22 ч. 00 мин.', '8 ч. 00 мин.', '10 ч. 15 мин.', '2 м', '5 м', '1 м 6 см'];
        let index3: number;
        let target3: any;

        clocks.forEach(function(img) { 
            img.addEventListener('click', (event) => {
                let target1 = event.target as HTMLImageElement;
                let alt = target1.getAttribute('alt')!;
                let index1 = arr1.indexOf(alt);
                if (index3 == index1) {
                    target3.remove();
                    target1.remove();
                } else {
                    target1.style.border = '3px solid red';
                    target1.style.backgroundColor = 'red';
                    setTimeout(() => {target1.style.border = 'none'; target1.style.backgroundColor = 'hsl(88, 85%, 80%)';}, 100);
                };
        })});

        val.forEach(function(vl) { 
            vl.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let index2 = arr1.indexOf(target2.innerHTML);
                if (index3 == index2) {
                    target3.remove();
                    target2.remove();
                } else {
                    target2.style.border = '3px solid red';
                    setTimeout(() => target2.style.border = '3px solid black', 100);
                };
        })});

        values.forEach(function(vl) { 
            vl.addEventListener('click', (event) => {
                target3 = event.target as HTMLElement;
                index3 = arr2.indexOf(target3.innerHTML);
        })});
    };
}