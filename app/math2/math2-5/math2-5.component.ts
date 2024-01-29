import { Component } from "@angular/core";

@Component({
    selector: 'math2-5',
    templateUrl: './math2-5.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_5 {
    sum42 = false;
    sum24 = false;
    sum30 = false;
    sum27 = false;
    sum25 = false;
    sum36 = false;
    sum30d = false;
    sum90 = false;
    divInc8 = false;
    divInc56 = false;
    divInc72 = false;
    divInc64 = false;
    divInc48 = false;
    divInc80 = false;
    divInc24 = false;
    divInc32 = false;
    divInc16 = false;
    divInc40 = false;

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

    clickSum42() {
        this.sum42 = true;
        this.sum24 = false;
        this.sum30 = false;
        this.sum27 = false;
        this.sum25 = false;
        this.sum36 = false;
        this.sum30d = false;
        this.sum90 = false;
    };

    clickSum24() {
        this.sum42 = false;
        this.sum24 = true;
        this.sum30 = false;
        this.sum27 = false;
        this.sum25 = false;
        this.sum36 = false;
        this.sum30d = false;
        this.sum90 = false;
    };

    clickSum30() {
        this.sum42 = false;
        this.sum24 = false;
        this.sum30 = true;
        this.sum27 = false;
        this.sum25 = false;
        this.sum36 = false;
        this.sum30d = false;
        this.sum90 = false;
    };

    clickSum27() {
        this.sum42 = false;
        this.sum24 = false;
        this.sum30 = false;
        this.sum27 = true;
        this.sum25 = false;
        this.sum36 = false;
        this.sum30d = false;
        this.sum90 = false;
    };

    clickSum25() {
        this.sum42 = false;
        this.sum24 = false;
        this.sum30 = false;
        this.sum27 = false;
        this.sum25 = true;
        this.sum36 = false;
        this.sum30d = false;
        this.sum90 = false;
    };

    clickSum36() {
        this.sum42 = false;
        this.sum24 = false;
        this.sum30 = false;
        this.sum27 = false;
        this.sum25 = false;
        this.sum36 = true;
        this.sum30d = false;
        this.sum90 = false;
    };

    clickSum30d() {
        this.sum42 = false;
        this.sum24 = false;
        this.sum30 = false;
        this.sum27 = false;
        this.sum25 = false;
        this.sum36 = false;
        this.sum30d = true;
        this.sum90 = false;
    };

    clickSum90() {
        this.sum42 = false;
        this.sum24 = false;
        this.sum30 = false;
        this.sum27 = false;
        this.sum25 = false;
        this.sum36 = false;
        this.sum30d = false;
        this.sum90 = true;
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

    clickInc42() {
        if (this.sum42 == true) {
            document.getElementById('inc42')!.remove();
            document.getElementById('sum42')!.remove();
        } else {
            document.getElementById('inc42')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc42')!.style.border = '3px solid black', 500);
        };
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

    clickInc27() {
        if (this.sum27 == true) {
            document.getElementById('inc27')!.remove();
            document.getElementById('sum27')!.remove();
        } else {
            document.getElementById('inc27')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc27')!.style.border = '3px solid black', 500);
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

    clickInc90() {
        if (this.sum90 == true) {
            document.getElementById('inc90')!.remove();
            document.getElementById('sum90')!.remove();
        } else {
            document.getElementById('inc90')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc90')!.style.border = '3px solid black', 500);
        };
    };

    clickDivInc8() {
        this.divInc8 = true;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc56() {
        this.divInc8 = false;
        this.divInc56 = true;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc72() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = true;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc64() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = true;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc48() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = true;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc80() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = true;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc24() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = true;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc32() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = true;
        this.divInc16 = false;
        this.divInc40 = false;
    };

    clickDivInc16() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = true;
        this.divInc40 = false;
    };

    clickDivInc40() {
        this.divInc8 = false;
        this.divInc56 = false;
        this.divInc72 = false;
        this.divInc64 = false;
        this.divInc48 = false;
        this.divInc80 = false;
        this.divInc24 = false;
        this.divInc32 = false;
        this.divInc16 = false;
        this.divInc40 = true;
    };

    click8Inc() {
        if (this.divInc8 == true) {
            document.getElementById('divInc8')!.remove();
            document.getElementById('8Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('8Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('8Inc')!.style.border = '3px solid black', 500);
        };
    };

    click56Inc() {
        if (this.divInc56 == true) {
            document.getElementById('divInc56')!.remove();
            document.getElementById('56Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('56Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('56Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('56Inc')!.style.border = '3px solid black', 500);
        };
    };

    click72Inc() {
        if (this.divInc72 == true) {
            document.getElementById('divInc72')!.remove();
            document.getElementById('72Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('72Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('72Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('72Inc')!.style.border = '3px solid black', 500);
        };
    };

    click64Inc() {
        if (this.divInc64 == true) {
            document.getElementById('divInc64')!.remove();
            document.getElementById('64Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('64Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('64Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('64Inc')!.style.border = '3px solid black', 500);
        };
    };

    click48Inc() {
        if (this.divInc48 == true) {
            document.getElementById('divInc48')!.remove();
            document.getElementById('48Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('48Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('48Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('48Inc')!.style.border = '3px solid black', 500);
        };
    };

    click80Inc() {
        if (this.divInc80 == true) {
            document.getElementById('divInc80')!.remove();
            document.getElementById('80Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('80Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('80Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('80Inc')!.style.border = '3px solid black', 500);
        };
    };

    click24Inc() {
        if (this.divInc24 == true) {
            document.getElementById('divInc24')!.remove();
            document.getElementById('24Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('24Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('24Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('24Inc')!.style.border = '3px solid black', 500);
        };
    };

    click32Inc() {
        if (this.divInc32 == true) {
            document.getElementById('divInc32')!.remove();
            document.getElementById('32Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('32Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('32Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('32Inc')!.style.border = '3px solid black', 500);
        };
    };

    click16Inc() {
        if (this.divInc16 == true) {
            document.getElementById('divInc16')!.remove();
            document.getElementById('16Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('16Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('16Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('16Inc')!.style.border = '3px solid black', 500);
        };
    };

    click40Inc() {
        if (this.divInc40 == true) {
            document.getElementById('divInc40')!.remove();
            document.getElementById('40Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('40Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('40Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('40Inc')!.style.border = '3px solid black', 500);
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input20')).value;

        if(valueOfInput1 == "8") {
            document.getElementById('input11')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "16") {
            document.getElementById('input12')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "24") {
            document.getElementById('input13')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "32") {
            document.getElementById('input14')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "40") {
            document.getElementById('input15')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "48") {
            document.getElementById('input16')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "56") {
            document.getElementById('input17')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "64") {
            document.getElementById('input18')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "72") {
            document.getElementById('input19')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "80") {
            document.getElementById('input20')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(() => alert('Правильно!'), 500);
        }
    };
}