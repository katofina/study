import { Component } from "@angular/core";

@Component({
    selector: 'math2-9',
    templateUrl: './math2-9.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_9 {
    sum24 = false;
    sum25 = false;
    sum30 = false;
    sum42 = false;
    sum27 = false;
    sum30d = false;
    sum36 = false;
    sum90 = false;
    sum36dd = false;
    sum54dd = false;
    sum32dd = false;
    sum30dd = false;
    sum49dd = false;
    sum25dd = false;
    sum40dd = false;
    sum42dd = false;
    imgNumber24 = false;
    imgNumber6 = false;
    imgNumber4 = false;
    imgNumber16 = false;
    imgNumber36 = false;
    imgNumber30 = false;
    imgNumber10 = false;
    imgNumber12 = false;
    imgNumber28 = false;
    imgNumber8 = false;
    imgNumber5 = false;
    imgNumber17 = false;
    imgNumber15 = false;
    imgNumber19 = false;
    imgNumber21 = false;
    imgNumber11 = false;
    imgNumber1 = false;
    imgNumber7 = false;
    imgNumber23 = false;
    imgNumber3 = false;

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

    clickSum24() {
        this.sum24 = true;
        this.sum25 = false;
        this.sum30 = false;
        this.sum42 = false;
        this.sum27 = false;
        this.sum30d = false;
        this.sum36 = false;
        this.sum90 = false;
    };

    clickSum25() {
        this.sum24 = false;
        this.sum25 = true;
        this.sum30 = false;
        this.sum42 = false;
        this.sum27 = false;
        this.sum30d = false;
        this.sum36 = false;
        this.sum90 = false;
    };

    clickSum30() {
        this.sum24 = false;
        this.sum25 = false;
        this.sum30 = true;
        this.sum42 = false;
        this.sum27 = false;
        this.sum30d = false;
        this.sum36 = false;
        this.sum90 = false;
    };

    clickSum42() {
        this.sum24 = false;
        this.sum25 = false;
        this.sum30 = false;
        this.sum42 = true;
        this.sum27 = false;
        this.sum30d = false;
        this.sum36 = false;
        this.sum90 = false;
    };

    clickSum27() {
        this.sum24 = false;
        this.sum25 = false;
        this.sum30 = false;
        this.sum42 = false;
        this.sum27 = true;
        this.sum30d = false;
        this.sum36 = false;
        this.sum90 = false;
    };

    clickSum30d() {
        this.sum24 = false;
        this.sum25 = false;
        this.sum30 = false;
        this.sum42 = false;
        this.sum27 = false;
        this.sum30d = true;
        this.sum36 = false;
        this.sum90 = false;
    };

    clickSum36() {
        this.sum24 = false;
        this.sum25 = false;
        this.sum30 = false;
        this.sum42 = false;
        this.sum27 = false;
        this.sum30d = false;
        this.sum36 = true;
        this.sum90 = false;
    };

    clickSum90() {
        this.sum24 = false;
        this.sum25 = false;
        this.sum30 = false;
        this.sum42 = false;
        this.sum27 = false;
        this.sum30d = false;
        this.sum36 = false;
        this.sum90 = true;
    };

    clickInc24() {
        if (this.sum24 == true) {
            document.getElementById('inc24')!.remove();
            document.getElementById('sum24')!.remove();
        } else {
            document.getElementById('inc24')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc24')!.style.border = '3px solid black', 500);
        };
    };

    clickInc25() {
        if (this.sum25 == true) {
            document.getElementById('inc25')!.remove();
            document.getElementById('sum25')!.remove();
        } else {
            document.getElementById('inc25')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc25')!.style.border = '3px solid black', 500);
        };
    };

    clickInc30() {
        if (this.sum30 == true) {
            document.getElementById('inc30')!.remove();
            document.getElementById('sum30')!.remove();
        } else if (this.sum30d == true) {
            document.getElementById('inc30')!.remove();
            document.getElementById('sum30d')!.remove();
        } else {
            document.getElementById('inc30')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc30')!.style.border = '3px solid black', 500);
        };
    };

    clickInc42() {
        if (this.sum42 == true) {
            document.getElementById('inc42')!.remove();
            document.getElementById('sum42')!.remove();
        } else {
            document.getElementById('inc42')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc42')!.style.border = '3px solid black', 500);
        };
    };

    clickInc27() {
        if (this.sum27 == true) {
            document.getElementById('inc27')!.remove();
            document.getElementById('sum27')!.remove();
        } else {
            document.getElementById('inc27')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc27')!.style.border = '3px solid black', 500);
        };
    };

    clickInc30d() {
        if (this.sum30d == true) {
            document.getElementById('inc30d')!.remove();
            document.getElementById('sum30d')!.remove();
        } else if (this.sum30 == true) {
            document.getElementById('inc30d')!.remove();
            document.getElementById('sum30')!.remove();
        } else {
            document.getElementById('inc30d')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc30d')!.style.border = '3px solid black', 500);
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

    clickInc90() {
        if (this.sum90 == true) {
            document.getElementById('inc90')!.remove();
            document.getElementById('sum90')!.remove();
        } else {
            document.getElementById('inc90')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc90')!.style.border = '3px solid black', 500);
        };
    };

    clickImgNumber24() {
        this.imgNumber24 = true;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber6() {
        this.imgNumber24 = false;
        this.imgNumber6 = true;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber4() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = true;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber16() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = true;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber36() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = true;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber30() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = true;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber10() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = true;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber12() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = true;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber28() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = true;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber8() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = true;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber5() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = true;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber17() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = true;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber15() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = true;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber19() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = true;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber21() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = true;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber11() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = true;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber1() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = true;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber7() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = true;
        this.imgNumber23 = false;
        this.imgNumber3 = false;
    };

    clickImgNumber23() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = true;
        this.imgNumber3 = false;
    };

    clickImgNumber3() {
        this.imgNumber24 = false;
        this.imgNumber6 = false;
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber36 = false;
        this.imgNumber30 = false;
        this.imgNumber10 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber8 = false;
        this.imgNumber5 = false;
        this.imgNumber17 = false;
        this.imgNumber15 = false;
        this.imgNumber19 = false;
        this.imgNumber21 = false;
        this.imgNumber11 = false;
        this.imgNumber1 = false;
        this.imgNumber7 = false;
        this.imgNumber23 = false;
        this.imgNumber3 = true;
    };

    clickEven() {
        if (this.imgNumber4 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number4')!.remove();
        } else if (this.imgNumber16 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number16')!.remove();
        } else if (this.imgNumber24 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number24')!.remove();
        } else if (this.imgNumber10 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number10')!.remove();
        } else if (this.imgNumber6 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number6')!.remove();
        } else if (this.imgNumber8 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number8')!.remove();
        } else if (this.imgNumber12 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number12')!.remove();
        } else if (this.imgNumber28 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number28')!.remove();
        } else if (this.imgNumber30 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number30')!.remove();
        } else if (this.imgNumber36 == true) {
            document.getElementById('even')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
            document.getElementById('number36')!.remove();
        } else {
            document.getElementById('even')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('even')!.style.border = '3px solid black', 500);
        };
    };

    clickOdd() {
        if (this.imgNumber15 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number15')!.remove();
        } else if (this.imgNumber11 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number11')!.remove();
        } else if (this.imgNumber23 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number23')!.remove();
        } else if (this.imgNumber21 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number21')!.remove();
        } else if (this.imgNumber19 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number19')!.remove();
        } else if (this.imgNumber17 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number17')!.remove();
        } else if (this.imgNumber7 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number7')!.remove();
        } else if (this.imgNumber3 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number3')!.remove();
        } else if (this.imgNumber1 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number1')!.remove();
        } else if (this.imgNumber5 == true) {
            document.getElementById('odd')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
            document.getElementById('number5')!.remove();
        } else {
            document.getElementById('odd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('odd')!.style.border = '3px solid black', 500);
        };
    };

    clickSum36dd() {
        this.sum36dd = true;
        this.sum54dd = false;
        this.sum32dd = false;
        this.sum30dd = false;
        this.sum49dd = false;
        this.sum25dd = false;
        this.sum40dd = false;
        this.sum42dd = false;
    };

    clickSum54dd() {
        this.sum36dd = false;
        this.sum54dd = true;
        this.sum32dd = false;
        this.sum30dd = false;
        this.sum49dd = false;
        this.sum25dd = false;
        this.sum40dd = false;
        this.sum42dd = false;
    };

    clickSum32dd() {
        this.sum36dd = false;
        this.sum54dd = false;
        this.sum32dd = true;
        this.sum30dd = false;
        this.sum49dd = false;
        this.sum25dd = false;
        this.sum40dd = false;
        this.sum42dd = false;
    };

    clickSum30dd() {
        this.sum36dd = false;
        this.sum54dd = false;
        this.sum32dd = false;
        this.sum30dd = true;
        this.sum49dd = false;
        this.sum25dd = false;
        this.sum40dd = false;
        this.sum42dd = false;
    };

    clickSum49dd() {
        this.sum36dd = false;
        this.sum54dd = false;
        this.sum32dd = false;
        this.sum30dd = false;
        this.sum49dd = true;
        this.sum25dd = false;
        this.sum40dd = false;
        this.sum42dd = false;
    };

    clickSum25dd() {
        this.sum36dd = false;
        this.sum54dd = false;
        this.sum32dd = false;
        this.sum30dd = false;
        this.sum49dd = false;
        this.sum25dd = true;
        this.sum40dd = false;
        this.sum42dd = false;
    };

    clickSum40dd() {
        this.sum36dd = false;
        this.sum54dd = false;
        this.sum32dd = false;
        this.sum30dd = false;
        this.sum49dd = false;
        this.sum25dd = false;
        this.sum40dd = true;
        this.sum42dd = false;
    };

    clickSum42dd() {
        this.sum36dd = false;
        this.sum54dd = false;
        this.sum32dd = false;
        this.sum30dd = false;
        this.sum49dd = false;
        this.sum25dd = false;
        this.sum40dd = false;
        this.sum42dd = true;
    };

    clickInc36dd() {
        if (this.sum36dd == true) {
            document.getElementById('inc36dd')!.remove();
            document.getElementById('sum36dd')!.remove();
        } else {
            document.getElementById('inc36dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc36dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc54dd() {
        if (this.sum54dd == true) {
            document.getElementById('inc54dd')!.remove();
            document.getElementById('sum54dd')!.remove();
        } else {
            document.getElementById('inc54dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc54dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc32dd() {
        if (this.sum32dd == true) {
            document.getElementById('inc32dd')!.remove();
            document.getElementById('sum32dd')!.remove();
        } else {
            document.getElementById('inc32dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc32dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc30dd() {
        if (this.sum30dd == true) {
            document.getElementById('inc30dd')!.remove();
            document.getElementById('sum30dd')!.remove();
        } else {
            document.getElementById('inc30dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc30dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc49dd() {
        if (this.sum49dd == true) {
            document.getElementById('inc49dd')!.remove();
            document.getElementById('sum49dd')!.remove();
        } else {
            document.getElementById('inc49dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc49dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc25dd() {
        if (this.sum25dd == true) {
            document.getElementById('inc25dd')!.remove();
            document.getElementById('sum25dd')!.remove();
        } else {
            document.getElementById('inc25dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc25dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc40dd() {
        if (this.sum40dd == true) {
            document.getElementById('inc40dd')!.remove();
            document.getElementById('sum40dd')!.remove();
        } else {
            document.getElementById('inc40dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc40dd')!.style.border = '3px solid black', 500);
        };
    };

    clickInc42dd() {
        if (this.sum42dd == true) {
            document.getElementById('inc42dd')!.remove();
            document.getElementById('sum42dd')!.remove();
        } else {
            document.getElementById('inc42dd')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc42dd')!.style.border = '3px solid black', 500);
        };
    };
}