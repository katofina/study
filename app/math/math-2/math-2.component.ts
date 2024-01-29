import { Component } from "@angular/core";

@Component({
    selector: 'math2',
    templateUrl: './math-2.component.html',
    styleUrls: ['./../math-1/math-1.component.scss']
})

export class Math2 {
    img1Aircraft = false;
    img2Aircraft = false;
    img3Aircraft = false;
    img4Aircraft = false;
    img5Aircraft = false;

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

    clickImg1Aircraft() {
        this.img1Aircraft = true;
        this.img2Aircraft = false;
        this.img3Aircraft = false;
        this.img4Aircraft = false;
        this.img5Aircraft = false;
    };

    clickImg2Aircraft() {
        this.img1Aircraft = false;
        this.img2Aircraft = true;
        this.img3Aircraft = false;
        this.img4Aircraft = false;
        this.img5Aircraft = false;
    };

    clickImg3Aircraft() {
        this.img1Aircraft = false;
        this.img2Aircraft = false;
        this.img3Aircraft = true;
        this.img4Aircraft = false;
        this.img5Aircraft = false;
    };

    clickImg4Aircraft() {
        this.img1Aircraft = false;
        this.img2Aircraft = false;
        this.img3Aircraft = false;
        this.img4Aircraft = true;
        this.img5Aircraft = false;
    };

    clickImg5Aircraft() {
        this.img1Aircraft = false;
        this.img2Aircraft = false;
        this.img3Aircraft = false;
        this.img4Aircraft = false;
        this.img5Aircraft = true;
    };

    click1Count() {
        if (this.img1Aircraft == true) {
            document.getElementById('img1Aircraft')!.remove();
            document.getElementById('1count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('1count')!.style.border = '3px solid black', 500);
        };
    };

    click2Count() {
        if (this.img2Aircraft == true) {
            document.getElementById('img2Aircraft')!.remove();
            document.getElementById('2count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('2count')!.style.border = '3px solid black', 500);
        };
    };

    click3Count() {
        if (this.img3Aircraft == true) {
            document.getElementById('img3Aircraft')!.remove();
            document.getElementById('3count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('3count')!.style.border = '3px solid black', 500);
        };
    };

    click4Count() {
        if (this.img4Aircraft == true) {
            document.getElementById('img4Aircraft')!.remove();
            document.getElementById('4count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4count')!.style.border = '3px solid black', 500);
        };
    };

    click5Count() {
        if (this.img5Aircraft == true) {
            document.getElementById('img5Aircraft')!.remove();
            document.getElementById('5count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5count')!.style.border = '3px solid black', 500);
        };
    };

    click6Count() {
        if (this.img1Aircraft == true) {
            document.getElementById('img6Aircraft')!.remove();
            document.getElementById('6count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6count')!.style.border = '3px solid black', 500);
        };
    };

    click7Count() {
        if (this.img2Aircraft == true) {
            document.getElementById('img7Aircraft')!.remove();
            document.getElementById('7count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7count')!.style.border = '3px solid black', 500);
        };
    };

    click8Count() {
        if (this.img3Aircraft == true) {
            document.getElementById('img8Aircraft')!.remove();
            document.getElementById('8count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8count')!.style.border = '3px solid black', 500);
        };
    };

    click9Count() {
        if (this.img4Aircraft == true) {
            document.getElementById('img9Aircraft')!.remove();
            document.getElementById('9count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9count')!.style.border = '3px solid black', 500);
        };
    };

    click10Count() {
        if (this.img5Aircraft == true) {
            document.getElementById('img10Aircraft')!.remove();
            document.getElementById('10count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10count')!.style.border = '3px solid black', 500);
        };
        this.img5Aircraft = false;
    };

    click11Count() {
        if (this.img1Aircraft == true) {
            document.getElementById('img11Aircraft')!.remove();
            document.getElementById('11count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11count')!.style.border = '3px solid black', 500);
        };
    };

    click12Count() {
        if (this.img2Aircraft == true) {
            document.getElementById('img12Aircraft')!.remove();
            document.getElementById('12count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12count')!.style.border = '3px solid black', 500);
        };
    };

    click13Count() {
        if (this.img3Aircraft == true) {
            document.getElementById('img13Aircraft')!.remove();
            document.getElementById('13count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13count')!.style.border = '3px solid black', 500);
        };
    };

    click14Count() {
        if (this.img4Aircraft == true) {
            document.getElementById('img14Aircraft')!.remove();
            document.getElementById('14count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14count')!.style.border = '3px solid black', 500);
        };
    };

    click15Count() {
        if (this.img5Aircraft == true) {
            document.getElementById('img15Aircraft')!.remove();
            document.getElementById('15count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15count')!.style.border = '3px solid black', 500);
        };
        this.img5Aircraft = false;
    };

    click6CountSum() {
        if (this.img5Aircraft == true) {
            document.getElementById('img6CountAircraft')!.remove();
            document.getElementById('6countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Aircraft = false;
    };

    click4CountSum() {
        if (this.img3Aircraft == true) {
            document.getElementById('img4CountAircraft')!.remove();
            document.getElementById('4countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4countSum')!.style.border = '3px solid black', 500);
        };
    };

    click2CountSum() {
        if (this.img1Aircraft == true) {
            document.getElementById('img2CountAircraft')!.remove();
            document.getElementById('2countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('2countSum')!.style.border = '3px solid black', 500);
        };
    };

    click3CountSum() {
        if (this.img2Aircraft == true) {
            document.getElementById('img3CountAircraft')!.remove();
            document.getElementById('3countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('3countSum')!.style.border = '3px solid black', 500);
        };
    };

    click5CountSum() {
        if (this.img4Aircraft == true) {
            document.getElementById('img5CountAircraft')!.remove();
            document.getElementById('5countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5countSum')!.style.border = '3px solid black', 500);
        };
    };

    click7CountSum() {
        if (this.img1Aircraft == true) {
            document.getElementById('img7CountAircraft')!.remove();
            document.getElementById('7countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7countSum')!.style.border = '3px solid black', 500);
        };
    };

    click8CountSum() {
        if (this.img2Aircraft == true) {
            document.getElementById('img8CountAircraft')!.remove();
            document.getElementById('8countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8countSum')!.style.border = '3px solid black', 500);
        };
    };

    click9CountSum() {
        if (this.img3Aircraft == true) {
            document.getElementById('img9CountAircraft')!.remove();
            document.getElementById('9countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9countSum')!.style.border = '3px solid black', 500);
        };
    };

    click10CountSum() {
        if (this.img4Aircraft== true) {
            document.getElementById('img10CountAircraft')!.remove();
            document.getElementById('10countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10countSum')!.style.border = '3px solid black', 500);
        };
    };

    click11CountSum() {
        if (this.img5Aircraft == true) {
            document.getElementById('img11CountAircraft')!.remove();
            document.getElementById('11countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Aircraft = false;
    };

    click12CountSum() {
        if (this.img1Aircraft == true) {
            document.getElementById('img12CountAircraft')!.remove();
            document.getElementById('12countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12countSum')!.style.border = '3px solid black', 500);
        };
    };

    click13CountSum() {
        if (this.img2Aircraft == true) {
            document.getElementById('img13CountAircraft')!.remove();
            document.getElementById('13countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13countSum')!.style.border = '3px solid black', 500);
        };
    };

    click14CountSum() {
        if (this.img3Aircraft == true) {
            document.getElementById('img14CountAircraft')!.remove();
            document.getElementById('14countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14countSum')!.style.border = '3px solid black', 500);
        };
    };

    click15CountSum() {
        if (this.img4Aircraft== true) {
            document.getElementById('img15CountAircraft')!.remove();
            document.getElementById('15countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15countSum')!.style.border = '3px solid black', 500);
        };
    };

    click16CountSum() {
        if (this.img5Aircraft== true) {
            document.getElementById('img16CountAircraft')!.remove();
            document.getElementById('16countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('16countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Aircraft = false;
    };

    click6Diff() {
        if (this.img5Aircraft == true) {
            document.getElementById('img6DiffAircraft')!.remove();
            document.getElementById('6Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6Diff')!.style.border = '3px solid black', 500);
        };
        this.img5Aircraft = false;
    };

    click4Diff() {
        if (this.img4Aircraft == true) {
            document.getElementById('img4DiffAircraft')!.remove();
            document.getElementById('4Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4Diff')!.style.border = '3px solid black', 500);
        };
    };

    click2Diff() {
        if (this.img2Aircraft == true) {
            document.getElementById('img2DiffAircraft')!.remove();
            document.getElementById('2Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('2Diff')!.style.border = '3px solid black', 500);
        };
    };

    click3Diff() {
        if (this.img3Aircraft == true) {
            document.getElementById('img3DiffAircraft')!.remove();
            document.getElementById('3Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('3Diff')!.style.border = '3px solid black', 500);
        };
    };

    click5Diff() {
        if (this.img4Aircraft == true) {
            document.getElementById('img5DiffAircraft')!.remove();
            document.getElementById('5Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5Diff')!.style.border = '3px solid black', 500);
        };
    };

    clickDivFor6() {
        if (this.img1Aircraft == true) {
            document.getElementById('img6')!.style.border = 'none';
            document.getElementById('divFor6')!.append(document.getElementById('img6')!);
            document.getElementById('divFor6')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor7() {
        if (this.img2Aircraft == true) {
            document.getElementById('img7')!.style.border = 'none';
            document.getElementById('divFor7')!.append(document.getElementById('img7')!);
            document.getElementById('divFor7')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor8() {
        if (this.img3Aircraft == true) {
            document.getElementById('img8')!.style.border = 'none';
            document.getElementById('divFor8')!.append(document.getElementById('img8')!);
            document.getElementById('divFor8')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor9() {
        if (this.img4Aircraft == true) {
            document.getElementById('img9')!.style.border = 'none';
            document.getElementById('divFor9')!.append(document.getElementById('img9')!);
            document.getElementById('divFor9')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor10() {
        if (this.img5Aircraft == true) {
            document.getElementById('img10')!.style.border = 'none';
            document.getElementById('divFor10')!.append(document.getElementById('img10')!);
            document.getElementById('divFor10')!.style.border! = "3px solid green"; 
        };
        this.img5Aircraft = false;
    };
    
    clickDivFor1() {
        if (this.img1Aircraft == true) {
            document.getElementById('img1')!.style.border = 'none';
            document.getElementById('divFor1')!.append(document.getElementById('img1')!);
            document.getElementById('divFor1')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor2() {
        if (this.img2Aircraft == true) {
            document.getElementById('img2')!.style.border = 'none';
            document.getElementById('divFor2')!.append(document.getElementById('img2')!);
            document.getElementById('divFor2')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor3() {
        if (this.img3Aircraft == true) {
            document.getElementById('img3')!.style.border = 'none';
            document.getElementById('divFor3')!.append(document.getElementById('img3')!);
            document.getElementById('divFor3')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor4() {
        if (this.img4Aircraft == true) {
            document.getElementById('img4')!.style.border = 'none';
            document.getElementById('divFor4')!.append(document.getElementById('img4')!);
            document.getElementById('divFor4')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor5() {
        if (this.img5Aircraft == true) {
            document.getElementById('img5')!.style.border = 'none';
            document.getElementById('divFor5')!.append(document.getElementById('img5')!);
            document.getElementById('divFor5')!.style.border! = "3px solid green"; 
        };
        this.img5Aircraft = false;
    };
}