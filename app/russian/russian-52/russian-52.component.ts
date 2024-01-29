import { Component } from "@angular/core";

@Component({
    selector: 'russian52',
    templateUrl: './russian-52.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian52 {
    select1 = false;
    select2 = false;
    select3 = false;
    select4 = false;
    select5 = false;
    select6 = false;
    select7 = false;
    a = 0;
    b = 0;

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

    viewDiv18() {
        document.getElementById("div17")!.style.display = "none";
        document.getElementById("div18")!.style.display = "block";
    };

    viewDiv19() {
        document.getElementById("div18")!.style.display = "none";
        document.getElementById("div19")!.style.display = "block";
    };

    viewDiv20() {
        document.getElementById("div19")!.style.display = "none";
        document.getElementById("div20")!.style.display = "block";
    };

    viewDiv21() {
        document.getElementById("div20")!.style.display = "none";
        document.getElementById("div21")!.style.display = "block";
    };

    viewDiv22() {
        document.getElementById("div21")!.style.display = "none";
        document.getElementById("div22")!.style.display = "block";
    };

    viewDiv23() {
        document.getElementById("div22")!.style.display = "none";
        document.getElementById("div23")!.style.display = "block";
    };

    viewDiv24() {
        document.getElementById("div23")!.style.display = "none";
        document.getElementById("div24")!.style.display = "block";
    };

    viewDiv25() {
        document.getElementById("div24")!.style.display = "none";
        document.getElementById("div25")!.style.display = "block";
    };

    viewDiv26() {
        document.getElementById("div25")!.style.display = "none";
        document.getElementById("div26")!.style.display = "block";
    };

    viewDiv27() {
        document.getElementById("div26")!.style.display = "none";
        document.getElementById("div27")!.style.display = "block";
    };

    viewDiv28() {
        document.getElementById("div27")!.style.display = "none";
        document.getElementById("div28")!.style.display = "block";
    };

    viewDiv29() {
        document.getElementById("div28")!.style.display = "none";
        document.getElementById("div29")!.style.display = "block";
    };

    viewDiv30() {
        document.getElementById("div29")!.style.display = "none";
        document.getElementById("div30")!.style.display = "block";
    };

    viewDiv31() {
        document.getElementById("div30")!.style.display = "none";
        document.getElementById("div31")!.style.display = "block";
    };

    viewDiv32() {
        document.getElementById("div31")!.style.display = "none";
        document.getElementById("div32")!.style.display = "block";
    };

    viewDiv33() {
        document.getElementById("div32")!.style.display = "none";
        document.getElementById("div33")!.style.display = "block";
    };

    viewDiv34() {
        document.getElementById("div33")!.style.display = "none";
        document.getElementById("div34")!.style.display = "block";
    };

    viewDiv35() {
        document.getElementById("div34")!.style.display = "none";
        document.getElementById("div35")!.style.display = "block";
    };

    viewDiv36() {
        document.getElementById("div35")!.style.display = "none";
        document.getElementById("div36")!.style.display = "block";
    };

    viewDiv37() {
        document.getElementById("div36")!.style.display = "none";
        document.getElementById("div37")!.style.display = "block";
    };

    viewDiv38() {
        document.getElementById("div37")!.style.display = "none";
        document.getElementById("div38")!.style.display = "block";
    };

    addEvent1() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['mon','za','pti','ku','med','sha'];
        const arrAlts = ['li' ,'yac', 'ca','kla','vedy','ka'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if (index == index2) {
                    target2.style.border = '3px solid green';
                    setTimeout(() => target2.style.border = '1px solid black', 200)
                    target.remove();
                };
        })});

        imgs2.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    rightAnswer1() {
        document.getElementById('button1')!.innerHTML = 'б';
        this.select1 = true;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer1() {
        document.getElementById('button1')!.innerHTML = 'г';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer2() {
        document.getElementById('button1')!.innerHTML = 'д';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer3() {
        document.getElementById('button1')!.innerHTML = 'з';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer4() {
        document.getElementById('button1')!.innerHTML = 'к';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer5() {
        document.getElementById('button1')!.innerHTML = 'п';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer6() {
        document.getElementById('button1')!.innerHTML = 'с';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    wrongAnswer7() {
        document.getElementById('button1')!.innerHTML = 'т';
        this.select1 = false;
        document.getElementById('ul1')!.style.display = 'none';
    };

    showUl1() {
        const styleUl = document.getElementById('ul1')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    showUl2() {
        const styleUl = document.getElementById('ul2')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    rightAnswer2() {
        document.getElementById('button2')!.innerHTML = 'б';
        this.select2 = true;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer12() {
        document.getElementById('button2')!.innerHTML = 'г';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer22() {
        document.getElementById('button2')!.innerHTML = 'д';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer32() {
        document.getElementById('button2')!.innerHTML = 'з';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer42() {
        document.getElementById('button2')!.innerHTML = 'к';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer52() {
        document.getElementById('button2')!.innerHTML = 'п';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer62() {
        document.getElementById('button2')!.innerHTML = 'с';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    wrongAnswer72() {
        document.getElementById('button2')!.innerHTML = 'т';
        this.select2 = false;
        document.getElementById('ul2')!.style.display = 'none';
    };

    showUl3() {
        const styleUl = document.getElementById('ul3')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer63() {
        document.getElementById('button3')!.innerHTML = 'б';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer13() {
        document.getElementById('button3')!.innerHTML = 'г';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer23() {
        document.getElementById('button3')!.innerHTML = 'д';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer33() {
        document.getElementById('button3')!.innerHTML = 'з';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer43() {
        document.getElementById('button3')!.innerHTML = 'к';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer53() {
        document.getElementById('button3')!.innerHTML = 'п';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    rightAnswer3() {
        document.getElementById('button3')!.innerHTML = 'с';
        this.select3 = true;
        document.getElementById('ul3')!.style.display = 'none';
    };

    wrongAnswer73() {
        document.getElementById('button3')!.innerHTML = 'т';
        this.select3 = false;
        document.getElementById('ul3')!.style.display = 'none';
    };

    showUl4() {
        const styleUl = document.getElementById('ul4')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer34() {
        document.getElementById('button4')!.innerHTML = 'б';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer14() {
        document.getElementById('button4')!.innerHTML = 'г';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer24() {
        document.getElementById('button4')!.innerHTML = 'д';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    rightAnswer4() {
        document.getElementById('button4')!.innerHTML = 'з';
        this.select4 = true;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer44() {
        document.getElementById('button4')!.innerHTML = 'к';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer54() {
        document.getElementById('button4')!.innerHTML = 'п';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer64() {
        document.getElementById('button4')!.innerHTML = 'с';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    wrongAnswer74() {
        document.getElementById('button4')!.innerHTML = 'т';
        this.select4 = false;
        document.getElementById('ul4')!.style.display = 'none';
    };

    showUl5() {
        const styleUl = document.getElementById('ul5')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer75() {
        document.getElementById('button5')!.innerHTML = 'б';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer15() {
        document.getElementById('button5')!.innerHTML = 'г';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer25() {
        document.getElementById('button5')!.innerHTML = 'д';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer35() {
        document.getElementById('button5')!.innerHTML = 'з';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer45() {
        document.getElementById('button5')!.innerHTML = 'к';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer55() {
        document.getElementById('button5')!.innerHTML = 'п';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    wrongAnswer65() {
        document.getElementById('button5')!.innerHTML = 'с';
        this.select5 = false;
        document.getElementById('ul5')!.style.display = 'none';
    };

    rightAnswer5() {
        document.getElementById('button5')!.innerHTML = 'т';
        this.select5 = true;
        document.getElementById('ul5')!.style.display = 'none';
    };

    showUl6() {
        const styleUl = document.getElementById('ul6')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    rightAnswer6() {
        document.getElementById('button6')!.innerHTML = 'б';
        this.select6 = true;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer16() {
        document.getElementById('button6')!.innerHTML = 'г';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer26() {
        document.getElementById('button6')!.innerHTML = 'д';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer36() {
        document.getElementById('button6')!.innerHTML = 'з';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer46() {
        document.getElementById('button6')!.innerHTML = 'к';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer56() {
        document.getElementById('button6')!.innerHTML = 'п';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer66() {
        document.getElementById('button6')!.innerHTML = 'с';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    wrongAnswer76() {
        document.getElementById('button6')!.innerHTML = 'т';
        this.select6 = false;
        document.getElementById('ul6')!.style.display = 'none';
    };

    showUl7() {
        const styleUl = document.getElementById('ul7')!;
        styleUl.style.display = 'flex';
        styleUl.style.flexDirection = 'column';
        styleUl.style.justifyContent = 'space-around';
    };

    wrongAnswer17() {
        document.getElementById('button7')!.innerHTML = 'б';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    rightAnswer7() {
        document.getElementById('button7')!.innerHTML = 'г';
        this.select7 = true;
        document.getElementById('ul7')!.style.display = 'none';
    };

    wrongAnswer27() {
        document.getElementById('button7')!.innerHTML = 'д';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    wrongAnswer37() {
        document.getElementById('button7')!.innerHTML = 'з';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    wrongAnswer47() {
        document.getElementById('button7')!.innerHTML = 'к';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    wrongAnswer57() {
        document.getElementById('button7')!.innerHTML = 'п';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    wrongAnswer67() {
        document.getElementById('button7')!.innerHTML = 'с';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    wrongAnswer77() {
        document.getElementById('button7')!.innerHTML = 'т';
        this.select7 = false;
        document.getElementById('ul7')!.style.display = 'none';
    };

    checkSelect1() {
        let a = 0;

        if (this.select1 == true) {
            document.getElementById('button1')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select1 == false) {
            document.getElementById('button1')!.style.backgroundColor = 'red';
        };

        if (this.select2 == true) {
            document.getElementById('button2')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select2 == false) {
            document.getElementById('button2')!.style.backgroundColor = 'red';
        };

        if (this.select3 == true) {
            document.getElementById('button3')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select3 == false) {
            document.getElementById('button3')!.style.backgroundColor = 'red';
        };

        if (this.select4 == true) {
            document.getElementById('button4')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select4 == false) {
            document.getElementById('button4')!.style.backgroundColor = 'red';
        };

        if (this.select5 == true) {
            document.getElementById('button5')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select5 == false) {
            document.getElementById('button5')!.style.backgroundColor = 'red';
        };

        if (this.select6 == true) {
            document.getElementById('button6')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select6 == false) {
            document.getElementById('button6')!.style.backgroundColor = 'red';
        };

        if (this.select7 == true) {
            document.getElementById('button7')!.style.backgroundColor = 'green';
            a++;
        } else if (this.select7 == false) {
            document.getElementById('button7')!.style.backgroundColor = 'red';
        };

        if (a == 7) {
            alert('Правильно!');
            setTimeout(() => this.viewDiv4(), 500);
        } else if (a != 7) alert('Неправильно!');
    };

    addEvent2() {
        const divs = document.getElementById('div4')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div4')!.querySelectorAll('imgSyllable')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['byor', 'bir', 'byar', 'ber', 'byur', 'byir', 'bar', 'beir', 'bur', 'bor'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 4)) || ((index1 == 1) && (index2 >= 5))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent3() {
        const divs = document.getElementById('div5')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div5')!.querySelectorAll('imgText')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['stump', 'umbrella', 'bowknot', 'bow', 'stumpik', 'umbreller', 'umbrellas', 'bows', 'treeStump', 'stop', 'kaleidoscope', 'caterpillar'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 2)) || ((index1 == 1) && ((index2 >= 3) && (index2 <= 5)))
                || ((index1 == 2) && ((index2 >= 6) && (index2 <= 8))) || ((index1 == 3) && (index2 >= 9))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent4() {
        const divs = document.getElementById('div6')!.getElementsByClassName('inDivConsVow');
        const imgs = document.getElementById('div6')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['t', 'sh', 'p', 'f', 'h', 'sha', 's', 'ch', 'k', 'y', 'd', 'g', 'm', 'v', 'b', 'z', 'n', 'r'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (((index1 == 0) && (index2 <= 8)) || ((index1 == 1) && (index2 >= 9))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    clickWrong() {
        alert('Неправильно!');
    };

    clickWrongLetter(){
        this.a = this.a + 1;
    };

    clickRightLetter(){
        this.b = this.b + 1;
    };

    checkSpan1() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 0;
        }
        else if ((this.a == 0) && (this.b == 1)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv10(), 500);
        } else if ((this.a == 0) && (this.b != 1)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 0;
        };
    };

    checkSpan2() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 1;
        }
        else if ((this.a == 0) && (this.b == 5)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv12(), 500);
        } else if ((this.a == 0) && (this.b != 5)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 1;
        };
    };

    checkSpan3() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 5;
        }
        else if ((this.a == 0) && (this.b == 6)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv14(), 500);
        } else if ((this.a == 0) && (this.b != 6)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 5;
        };
    };

    checkSpan4() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 6;
        }
        else if ((this.a == 0) && (this.b == 7)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv16(), 500);
        } else if ((this.a == 0) && (this.b != 7)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 6;
        };
    };

    checkSpan5() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 7;
        }
        else if ((this.a == 0) && (this.b == 10)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv18(), 500);
        } else if ((this.a == 0) && (this.b != 10)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 7;
        };
    };

    checkSpan6() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 10;
        }
        else if ((this.a == 0) && (this.b == 12)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv20(), 500);
        } else if ((this.a == 0) && (this.b != 12)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 10;
        };
    };

    checkSpan7() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 12;
        }
        else if ((this.a == 0) && (this.b == 14)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv22(), 500);
        } else if ((this.a == 0) && (this.b != 14)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 12;
        };
    };

    checkSpan8() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 14;
        }
        else if ((this.a == 0) && (this.b == 16)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv24(), 500);
        } else if ((this.a == 0) && (this.b != 16)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 14;
        };
    };

    checkSpan9() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 16;
        }
        else if ((this.a == 0) && (this.b == 21)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv26(), 500);
        } else if ((this.a == 0) && (this.b != 21)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 16;
        };
    };

    checkSpan10() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 21;
        }
        else if ((this.a == 0) && (this.b == 23)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv28(), 500);
        } else if ((this.a == 0) && (this.b != 23)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 21;
        };
    };

    checkSpan11() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 23;
        }
        else if ((this.a == 0) && (this.b == 25)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv30(), 500);
        } else if ((this.a == 0) && (this.b != 25)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 23;
        };
    };

    checkSpan12() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 24;
        }
        else if ((this.a == 0) && (this.b == 25)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv32(), 500);
        } else if ((this.a == 0) && (this.b != 25)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 24;
        };
    };

    checkSpan13() {
        if (this.a > 0) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 24;
        }
        else if ((this.a == 0) && (this.b == 26)) {
            alert('Правильно!'); 
            setTimeout(() => this.viewDiv34(), 500);
        } else if ((this.a == 0) && (this.b != 26)) {
            alert('Неправильно!');
            this.a = 0;
            this.b = 24;
        };
    };

    checkInp1() {
        let check = 0;
        const arr1 = ['синева', 'синий', 'синенький', 'краснота', 'красный', 'красненький', 'зелень', 'зелёный', 'зелёненький', 'желтизна', 'жёлтый', 'жёлтенький'];
        const arr2 = document.getElementById('div37')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        
        setTimeout(() => {if (check == 12) {
            this.viewDiv38();
        } else alert('Исправьте ошибки!')})
    };
}