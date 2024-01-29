import { Component } from "@angular/core";

@Component({
    selector: 'math3',
    templateUrl: './math-3.component.html',
    styleUrls: ['./../math-1/math-1.component.scss']
})

export class Math3 {
    img1Moto = false;
    img2Moto = false;
    img3Moto = false;
    img4Moto = false;
    img5Moto = false;

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

    clickImg1Moto() {
        this.img1Moto = true;
        this.img2Moto = false;
        this.img3Moto = false;
        this.img4Moto = false;
        this.img5Moto = false;
    };

    clickImg2Moto() {
        this.img1Moto = false;
        this.img2Moto = true;
        this.img3Moto = false;
        this.img4Moto = false;
        this.img5Moto = false;
    };

    clickImg3Moto() {
        this.img1Moto = false;
        this.img2Moto = false;
        this.img3Moto = true;
        this.img4Moto = false;
        this.img5Moto = false;
    };

    clickImg4Moto() {
        this.img1Moto = false;
        this.img2Moto = false;
        this.img3Moto = false;
        this.img4Moto = true;
        this.img5Moto = false;
    };

    clickImg5Moto() {
        this.img1Moto = false;
        this.img2Moto = false;
        this.img3Moto = false;
        this.img4Moto = false;
        this.img5Moto = true;
    };

    click3Count() {
        if (this.img1Moto == true) {
            document.getElementById('img3Moto')!.remove();
            document.getElementById('3count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('3count')!.style.border = '3px solid black', 500);
        };
    };

    click4Count() {
        if (this.img2Moto == true) {
            document.getElementById('img4Moto')!.remove();
            document.getElementById('4count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4count')!.style.border = '3px solid black', 500);
        };
    };

    click5Count() {
        if (this.img3Moto == true) {
            document.getElementById('img5Moto')!.remove();
            document.getElementById('5count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5count')!.style.border = '3px solid black', 500);
        };
    };

    click6Count() {
        if (this.img4Moto == true) {
            document.getElementById('img6Moto')!.remove();
            document.getElementById('6count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6count')!.style.border = '3px solid black', 500);
        };
    };

    click7Count() {
        if (this.img5Moto == true) {
            document.getElementById('img7Moto')!.remove();
            document.getElementById('7count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7count')!.style.border = '3px solid black', 500);
            this.img5Moto = false;
        };
    };

    click8Count() {
        if (this.img1Moto == true) {
            document.getElementById('img8Moto')!.remove();
            document.getElementById('8count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8count')!.style.border = '3px solid black', 500);
        };
    };

    click9Count() {
        if (this.img2Moto == true) {
            document.getElementById('img9Moto')!.remove();
            document.getElementById('9count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9count')!.style.border = '3px solid black', 500);
        };
    };

    click10Count() {
        if (this.img3Moto == true) {
            document.getElementById('img10Moto')!.remove();
            document.getElementById('10count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10count')!.style.border = '3px solid black', 500);
        };
    };

    click11Count() {
        if (this.img4Moto == true) {
            document.getElementById('img11Moto')!.remove();
            document.getElementById('11count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11count')!.style.border = '3px solid black', 500);
        };
    };

    click12Count() {
        if (this.img5Moto == true) {
            document.getElementById('img12Moto')!.remove();
            document.getElementById('12count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12count')!.style.border = '3px solid black', 500);
            this.img5Moto = false;
        };
    };

    click13Count() {
        if (this.img1Moto == true) {
            document.getElementById('img13Moto')!.remove();
            document.getElementById('13count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13count')!.style.border = '3px solid black', 500);
        };
    };

    click14Count() {
        if (this.img2Moto == true) {
            document.getElementById('img14Moto')!.remove();
            document.getElementById('14count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14count')!.style.border = '3px solid black', 500);
        };
    };

    click15Count() {
        if (this.img3Moto == true) {
            document.getElementById('img15Moto')!.remove();
            document.getElementById('15count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15count')!.style.border = '3px solid black', 500);
        };
    };

    click16Count() {
        if (this.img4Moto == true) {
            document.getElementById('img16Moto')!.remove();
            document.getElementById('16count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('16count')!.style.border = '3px solid black', 500);
        };
    };

    click17Count() {
        if (this.img5Moto == true) {
            document.getElementById('img17Moto')!.remove();
            document.getElementById('17count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('17count')!.style.border = '3px solid black', 500);
            this.img5Moto = false;
        };
    };

    click4CountSum() {
        if (this.img1Moto == true) {
            document.getElementById('img4CountMoto')!.remove();
            document.getElementById('4countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4countSum')!.style.border = '3px solid black', 500);
        };
    };

    click6CountSum() {
        if (this.img2Moto == true) {
            document.getElementById('img6CountMoto')!.remove();
            document.getElementById('6countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6countSum')!.style.border = '3px solid black', 500);
        };
    };

    click7CountSum() {
        if (this.img3Moto == true) {
            document.getElementById('img7CountMoto')!.remove();
            document.getElementById('7countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7countSum')!.style.border = '3px solid black', 500);
        };
    };

    click8CountSum() {
        if (this.img4Moto == true) {
            document.getElementById('img8CountMoto')!.remove();
            document.getElementById('8countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8countSum')!.style.border = '3px solid black', 500);
        };
    };

    click9CountSum() {
        if (this.img5Moto == true) {
            document.getElementById('img9CountMoto')!.remove();
            document.getElementById('9countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9countSum')!.style.border = '3px solid black', 500);
            this.img5Moto = false;
        };
    };

    click10CountSum() {
        if (this.img1Moto == true) {
            document.getElementById('img10CountMoto')!.remove();
            document.getElementById('10countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10countSum')!.style.border = '3px solid black', 500);
        };
    };

    click11CountSum() {
        if (this.img2Moto == true) {
            document.getElementById('img11CountMoto')!.remove();
            document.getElementById('11countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11countSum')!.style.border = '3px solid black', 500);
        };
    };

    click12CountSum() {
        if (this.img3Moto == true) {
            document.getElementById('img12CountMoto')!.remove();
            document.getElementById('12countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12countSum')!.style.border = '3px solid black', 500);
        };
    };

    click13CountSum() {
        if (this.img4Moto == true) {
            document.getElementById('img13CountMoto')!.remove();
            document.getElementById('13countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13countSum')!.style.border = '3px solid black', 500);
        };
    };

    click14CountSum() {
        if (this.img5Moto == true) {
            document.getElementById('img14CountMoto')!.remove();
            document.getElementById('14countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Moto = false;
    };

    click4Diff() {
        if (this.img1Moto == true) {
            document.getElementById('img4DiffMoto')!.remove();
            document.getElementById('4Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4Diff')!.style.border = '3px solid black', 500);
        };
    };

    click5Diff() {
        if (this.img2Moto == true) {
            document.getElementById('img5DiffMoto')!.remove();
            document.getElementById('5Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5Diff')!.style.border = '3px solid black', 500);
        };
    };

    click6Diff() {
        if (this.img3Moto == true) {
            document.getElementById('img6DiffMoto')!.remove();
            document.getElementById('6Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6Diff')!.style.border = '3px solid black', 500);
        };
    };

    click7Diff() {
        if (this.img4Moto == true) {
            document.getElementById('img7DiffMoto')!.remove();
            document.getElementById('7Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7Diff')!.style.border = '3px solid black', 500);
        };
    };

    click8Diff() {
        if (this.img5Moto == true) {
            document.getElementById('img8DiffMoto')!.remove();
            document.getElementById('8Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8Diff')!.style.border = '3px solid black', 500);
        };
        this.img5Moto = false;
    };

    clickDivFor0() {
        if (this.img1Moto == true) {
            document.getElementById('img0')!.style.border = 'none';
            document.getElementById('divFor0')!.append(document.getElementById('img0')!);
            document.getElementById('divFor0')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor2() {
        if (this.img2Moto == true) {
            document.getElementById('img2')!.style.border = 'none';
            document.getElementById('divFor2')!.append(document.getElementById('img2')!);
            document.getElementById('divFor2')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor4() {
        if (this.img3Moto == true) {
            document.getElementById('img4')!.style.border = 'none';
            document.getElementById('divFor4')!.append(document.getElementById('img4')!);
            document.getElementById('divFor4')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor6() {
        if (this.img4Moto == true) {
            document.getElementById('img6')!.style.border = 'none';
            document.getElementById('divFor6')!.append(document.getElementById('img6')!);
            document.getElementById('divFor6')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor8() {
        if (this.img5Moto == true) {
            document.getElementById('img8')!.style.border = 'none';
            document.getElementById('divFor8')!.append(document.getElementById('img8')!);
            document.getElementById('divFor8')!.style.border! = "3px solid green";
            this.img5Moto = false;
        };
    };

    clickDivFor10() {
        if (this.img1Moto == true) {
            document.getElementById('count10')!.style.border = 'none';
            document.getElementById('divFor10')!.append(document.getElementById('count10')!);
            document.getElementById('divFor10')!.style.border! = "3px solid green";
        };
    };

    clickDivFor12() {
        if (this.img2Moto == true) {
            document.getElementById('count12')!.style.border = 'none';
            document.getElementById('divFor12')!.append(document.getElementById('count12')!);
            document.getElementById('divFor12')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor14() {
        if (this.img3Moto == true) {
            document.getElementById('count14')!.style.border = 'none';
            document.getElementById('divFor14')!.append(document.getElementById('count14')!);
            document.getElementById('divFor14')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor16() {
        if (this.img4Moto == true) {
            document.getElementById('count16')!.style.border = 'none';
            document.getElementById('divFor16')!.append(document.getElementById('count16')!);
            document.getElementById('divFor16')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor18() {
        if (this.img5Moto == true) {
            document.getElementById('count18')!.style.border = 'none';
            document.getElementById('divFor18')!.append(document.getElementById('count18')!);
            document.getElementById('divFor18')!.style.border! = "3px solid green"; 
        };
    };
}