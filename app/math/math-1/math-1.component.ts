import { Component } from "@angular/core";

@Component({
    selector: 'math1',
    templateUrl: './math-1.component.html',
    styleUrls: ['./math-1.component.scss']
})

export class Math1 {
    img1Rockets = false;
    img2Rockets = false;
    img3Rockets = false;
    img4Rockets = false;
    img5Rockets = false;
    img7CountRockets = false;
    img8CountRockets = false;
    img9CountRockets = false;
    img10CountRockets = false;
    img1 = false;
    img2 = false;
    img3 = false;
    img4 = false;
    img5 = false;
    img6 = false;
    img7 = false;
    img8 = false;
    img9 = false;
    img10 = false;

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

    clickImg1Rockets() {
        this.img1Rockets = true;
        this.img2Rockets = false;
        this.img3Rockets = false;
        this.img4Rockets = false;
        this.img5Rockets = false;
    };

    clickImg2Rockets() {
        this.img1Rockets = false;
        this.img2Rockets = true;
        this.img3Rockets = false;
        this.img4Rockets = false;
        this.img5Rockets = false;
    };

    clickImg3Rockets() {
        this.img1Rockets = false;
        this.img2Rockets = false;
        this.img3Rockets = true;
        this.img4Rockets = false;
        this.img5Rockets = false;
    };

    clickImg4Rockets() {
        this.img1Rockets = false;
        this.img2Rockets = false;
        this.img3Rockets = false;
        this.img4Rockets = true;
        this.img5Rockets = false;
    };

    clickImg5Rockets() {
        this.img1Rockets = false;
        this.img2Rockets = false;
        this.img3Rockets = false;
        this.img4Rockets = false;
        this.img5Rockets = true;
    };

    click1Count() {
        if (this.img1Rockets == true) {
            document.getElementById('img1Rockets')!.remove();
            document.getElementById('1count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('1count')!.style.border = '3px solid black', 500);
        };
    };

    click2Count() {
        if (this.img2Rockets == true) {
            document.getElementById('img2Rockets')!.remove();
            document.getElementById('2count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('2count')!.style.border = '3px solid black', 500);
        };
    };

    click3Count() {
        if (this.img3Rockets == true) {
            document.getElementById('img3Rockets')!.remove();
            document.getElementById('3count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('3count')!.style.border = '3px solid black', 500);
        };
    };

    click4Count() {
        if (this.img4Rockets == true) {
            document.getElementById('img4Rockets')!.remove();
            document.getElementById('4count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4count')!.style.border = '3px solid black', 500);
        };
    };

    click5Count() {
        if (this.img5Rockets == true) {
            document.getElementById('img5Rockets')!.remove();
            document.getElementById('5count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5count')!.style.border = '3px solid black', 500);
        };
    };

    click6Count() {
        if (this.img1Rockets == true) {
            document.getElementById('img6Rockets')!.remove();
            document.getElementById('6count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6count')!.style.border = '3px solid black', 500);
        };
    };

    click7Count() {
        if (this.img2Rockets == true) {
            document.getElementById('img7Rockets')!.remove();
            document.getElementById('7count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7count')!.style.border = '3px solid black', 500);
        };
    };

    click8Count() {
        if (this.img3Rockets == true) {
            document.getElementById('img8Rockets')!.remove();
            document.getElementById('8count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8count')!.style.border = '3px solid black', 500);
        };
    };

    click9Count() {
        if (this.img4Rockets == true) {
            document.getElementById('img9Rockets')!.remove();
            document.getElementById('9count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9count')!.style.border = '3px solid black', 500);
        };
    };

    click10Count() {
        if (this.img5Rockets == true) {
            document.getElementById('img10Rockets')!.remove();
            document.getElementById('10count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10count')!.style.border = '3px solid black', 500);
        };
        this.img5Rockets = false;
    };

    click2CountSum() {
        if (this.img1Rockets == true) {
            document.getElementById('img2CountRockets')!.remove();
            document.getElementById('2countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('2countSum')!.style.border = '3px solid black', 500);
        };
    };

    click3CountSum() {
        if (this.img2Rockets == true) {
            document.getElementById('img3CountRockets')!.remove();
            document.getElementById('3countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('3countSum')!.style.border = '3px solid black', 500);
        };
    };

    click4CountSum() {
        if (this.img3Rockets == true) {
            document.getElementById('img4CountRockets')!.remove();
            document.getElementById('4countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4countSum')!.style.border = '3px solid black', 500);
        };
    };

    click5CountSum() {
        if (this.img4Rockets == true) {
            document.getElementById('img5CountRockets')!.remove();
            document.getElementById('5countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5countSum')!.style.border = '3px solid black', 500);
        };
    };

    click6CountSum() {
        if (this.img5Rockets == true) {
            document.getElementById('img6CountRockets')!.remove();
            document.getElementById('6countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Rockets = false;
    };

    clickImg7CountRockets() {
        this.img7CountRockets = true;
        this.img8CountRockets = false;
        this.img9CountRockets = false;
        this.img10CountRockets = false;
    };

    clickImg8CountRockets() {
        this.img7CountRockets = false;
        this.img8CountRockets = true;
        this.img9CountRockets = false;
        this.img10CountRockets = false;
    };

    clickImg9CountRockets() {
        this.img7CountRockets = false;
        this.img8CountRockets = false;
        this.img9CountRockets = true;
        this.img10CountRockets = false;
    };

    clickImg10CountRockets() {
        this.img7CountRockets = false;
        this.img8CountRockets = false;
        this.img9CountRockets = false;
        this.img10CountRockets = true;
    };

    click7CountSum() {
        if (this.img7CountRockets == true) {
            document.getElementById('img7CountRockets')!.remove();
            document.getElementById('7countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7countSum')!.style.border = '3px solid black', 500);
        };
    };

    click8CountSum() {
        if (this.img8CountRockets == true) {
            document.getElementById('img8CountRockets')!.remove();
            document.getElementById('8countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8countSum')!.style.border = '3px solid black', 500);
        };
    };

    click9CountSum() {
        if (this.img9CountRockets == true) {
            document.getElementById('img9CountRockets')!.remove();
            document.getElementById('9countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9countSum')!.style.border = '3px solid black', 500);
        };
    };

    click10CountSum() {
        if (this.img10CountRockets == true) {
            document.getElementById('img10CountRockets')!.remove();
            document.getElementById('10countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10countSum')!.style.border = '3px solid black', 500);
        };
    };

    clickImg1() {
        this.img1 = true;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg2() {
        this.img1 = false;
        this.img2 = true;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg3() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = true;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg4() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = true;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg5() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = true;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg6() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = true;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg7() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = true;
        this.img8 = false;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg8() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = true;
        this.img9 = false;
        this.img10 = false;
    };

    clickImg9() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = true;
        this.img10 = false;
    };

    clickImg10() {
        this.img1 = false;
        this.img2 = false;
        this.img3 = false;
        this.img4 = false;
        this.img5 = false;
        this.img6 = false;
        this.img7 = false;
        this.img8 = false;
        this.img9 = false;
        this.img10 = true;
    };

    clickDivFor1() {
        if (this.img1 == true) {
            document.getElementById('img1')!.style.border = 'none';
            document.getElementById('divFor1')!.append(document.getElementById('img1')!);
            document.getElementById('divFor1')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor2() {
        if (this.img2 == true) {
            document.getElementById('img2')!.style.border = 'none';
            document.getElementById('divFor2')!.append(document.getElementById('img2')!);
            document.getElementById('divFor2')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor3() {
        if (this.img3 == true) {
            document.getElementById('img3')!.style.border = 'none';
            document.getElementById('divFor3')!.append(document.getElementById('img3')!);
            document.getElementById('divFor3')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor4() {
        if (this.img4 == true) {
            document.getElementById('img4')!.style.border = 'none';
            document.getElementById('divFor4')!.append(document.getElementById('img4')!);
            document.getElementById('divFor4')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor5() {
        if (this.img5 == true) {
            document.getElementById('img5')!.style.border = 'none';
            document.getElementById('divFor5')!.append(document.getElementById('img5')!);
            document.getElementById('divFor5')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor6() {
        if (this.img6 == true) {
            document.getElementById('img6')!.style.border = 'none';
            document.getElementById('divFor6')!.append(document.getElementById('img6')!);
            document.getElementById('divFor6')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor7() {
        if (this.img7 == true) {
            document.getElementById('img7')!.style.border = 'none';
            document.getElementById('divFor7')!.append(document.getElementById('img7')!);
            document.getElementById('divFor7')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor8() {
        if (this.img8 == true) {
            document.getElementById('img8')!.style.border = 'none';
            document.getElementById('divFor8')!.append(document.getElementById('img8')!);
            document.getElementById('divFor8')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor9() {
        if (this.img9 == true) {
            document.getElementById('img9')!.style.border = 'none';
            document.getElementById('divFor9')!.append(document.getElementById('img9')!);
            document.getElementById('divFor9')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor10() {
        if (this.img10 == true) {
            document.getElementById('img10')!.style.border = 'none';
            document.getElementById('divFor10')!.append(document.getElementById('img10')!);
            document.getElementById('divFor10')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor26() {
        if (this.img1Rockets == true) {
            document.getElementById('img26')!.style.border = 'none';
            document.getElementById('divFor26')!.append(document.getElementById('img26')!);
            document.getElementById('divFor26')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor27() {
        if (this.img2Rockets == true) {
            document.getElementById('img27')!.style.border = 'none';
            document.getElementById('divFor27')!.append(document.getElementById('img27')!);
            document.getElementById('divFor27')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor28() {
        if (this.img3Rockets== true) {
            document.getElementById('img28')!.style.border = 'none';
            document.getElementById('divFor28')!.append(document.getElementById('img28')!);
            document.getElementById('divFor28')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor29() {
        if (this.img4Rockets== true) {
            document.getElementById('img29')!.style.border = 'none';
            document.getElementById('divFor29')!.append(document.getElementById('img29')!);
            document.getElementById('divFor29')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor210() {
        if (this.img5Rockets == true) {
            document.getElementById('img210')!.style.border = 'none';
            document.getElementById('divFor210')!.append(document.getElementById('img210')!);
            document.getElementById('divFor210')!.style.border! = "3px solid green"; 
        };
        this.img5Rockets = false;
    };
}