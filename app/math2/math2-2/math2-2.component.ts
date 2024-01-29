import { Component } from "@angular/core";

@Component({
    selector: 'math2-2',
    templateUrl: './math2-2.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_2 {
    divSum10 = false;
    divSum20 = false;
    divSum11 = false;
    divSum16 = false;
    divSum9 = false;
    divSum27 = false;
    divSum21 = false;
    divSum40 = false;
    divSum20d = false;
    divSum11d = false;
    divSum16d = false;
    divSum9d = false;
    divSum27d = false;
    divSum21d = false;
    divSum40d = false;
    divSum10d = false;
    divInc15 = false;
    divInc35 = false;
    divInc20 = false;
    divInc25 = false;
    divInc30 = false;
    divInc50 = false;
    divInc5 = false;
    divInc10 = false;
    divInc40 = false;
    divInc45 = false;

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

    clickDivSum10() {
        this.divSum10 = true;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        if (this.divSum10d == true) {
            document.getElementById('divSum10')!.remove();
            document.getElementById('divSum10d')!.remove();
        };
    };

    clickDivSum20() {
        this.divSum10 = false;
        this.divSum20 = true;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum20d == true) {
            document.getElementById('divSum20')!.remove();
            document.getElementById('divSum20d')!.remove();
        };
    };

    clickDivSum11() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = true;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum11d == true) {
            document.getElementById('divSum11')!.remove();
            document.getElementById('divSum11d')!.remove();
        };
    };

    clickDivSum16() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = true;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum16d == true) {
            document.getElementById('divSum16')!.remove();
            document.getElementById('divSum16d')!.remove();
        };
    };

    clickDivSum9() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = true;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum9d == true) {
            document.getElementById('divSum9')!.remove();
            document.getElementById('divSum9d')!.remove();
        };
    };

    clickDivSum27() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = true;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum27d == true) {
            document.getElementById('divSum27')!.remove();
            document.getElementById('divSum27d')!.remove();
        };
    };

    clickDivSum21() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = true;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum21d == true) {
            document.getElementById('divSum21')!.remove();
            document.getElementById('divSum21d')!.remove();
        };
    };

    clickDivSum40() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = true;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum10d = false;
        if (this.divSum40d == true) {
            document.getElementById('divSum40')!.remove();
            document.getElementById('divSum40d')!.remove();
        };
    };

    clickDivSum20d() {
        this.divSum10 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = true;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum20 == true) {
            document.getElementById('divSum20')!.remove();
            document.getElementById('divSum20d')!.remove();
        };
    };

    clickDivSum11d() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = true;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum11 == true) {
            document.getElementById('divSum11')!.remove();
            document.getElementById('divSum11d')!.remove();
        };
    };

    clickDivSum16d() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = true;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum16 == true) {
            document.getElementById('divSum16')!.remove();
            document.getElementById('divSum16d')!.remove();
        };
    };

    clickDivSum9d() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = true;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum9 == true) {
            document.getElementById('divSum9')!.remove();
            document.getElementById('divSum9d')!.remove();
        };
    };

    clickDivSum27d() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = true;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum27 == true) {
            document.getElementById('divSum27')!.remove();
            document.getElementById('divSum27d')!.remove();
        };
    };

    clickDivSum21d() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = true;
        this.divSum40d = false;
        this.divSum10d = false;
        if (this.divSum21 == true) {
            document.getElementById('divSum21')!.remove();
            document.getElementById('divSum21d')!.remove();
        };
    };

    clickDivSum40d() {
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = true;
        this.divSum10d = false;
        if (this.divSum40 == true) {
            document.getElementById('divSum40')!.remove();
            document.getElementById('divSum40d')!.remove();
        };
    };

    clickDivSum10d() {
        this.divSum20 = false;
        this.divSum11 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum27 = false;
        this.divSum21 = false;
        this.divSum40 = false;
        this.divSum20d = false;
        this.divSum11d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum27d = false;
        this.divSum21d = false;
        this.divSum40d = false;
        this.divSum10d = true;
        if (this.divSum10 == true) {
            document.getElementById('divSum10')!.remove();
            document.getElementById('divSum10d')!.remove();
        };
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input4')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input5')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input6')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input7')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input8')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input9')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input10')).value;

        if(valueOfInput1 == "4") {
            document.getElementById('input1')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "8") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "12") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "16") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "20") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "24") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "28") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "32") {
            document.getElementById('input8')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "36") {
            document.getElementById('input9')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "40") {
            document.getElementById('input10')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(this.viewDiv4, 1000);
        }
    };

    showDecision() {
        document.getElementById('decision1')!.style.visibility = 'visible';
    };

    showDecision2() {
        document.getElementById('decision2')!.style.visibility = 'visible';
    };

    clickDivInc15() {
        this.divInc15 = true;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc35() {
        this.divInc15 = false;
        this.divInc35 = true;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc20() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = true;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc25() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = true;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc30() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = true;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc50() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = true;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc5() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = true;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc10() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = true;
        this.divInc40 = false;
        this.divInc45 = false;
    };

    clickDivInc40() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = true;
        this.divInc45 = false;
    };

    clickDivInc45() {
        this.divInc15 = false;
        this.divInc35 = false;
        this.divInc20 = false;
        this.divInc25 = false;
        this.divInc30 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc40 = false;
        this.divInc45 = true;
    };

    click15Inc() {
        if (this.divInc15 == true) {
            document.getElementById('divInc15')!.remove();
            document.getElementById('15Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('15Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('15Inc')!.style.border = '3px solid black', 500);
        };
    };

    click35Inc() {
        if (this.divInc35 == true) {
            document.getElementById('divInc35')!.remove();
            document.getElementById('35Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('35Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('35Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('35Inc')!.style.border = '3px solid black', 500);
        };
    };

    click20Inc() {
        if (this.divInc20 == true) {
            document.getElementById('divInc20')!.remove();
            document.getElementById('20Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('20Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('20Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('20Inc')!.style.border = '3px solid black', 500);
        };
    };

    click25Inc() {
        if (this.divInc25 == true) {
            document.getElementById('divInc25')!.remove();
            document.getElementById('25Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('25Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('25Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('25Inc')!.style.border = '3px solid black', 500);
        };
    };

    click30Inc() {
        if (this.divInc30 == true) {
            document.getElementById('divInc30')!.remove();
            document.getElementById('30Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('30Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('30Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('30Inc')!.style.border = '3px solid black', 500);
        };
    };

    click50Inc() {
        if (this.divInc50 == true) {
            document.getElementById('divInc50')!.remove();
            document.getElementById('50Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('50Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('50Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('50Inc')!.style.border = '3px solid black', 500);
        };
    };

    click5Inc() {
        if (this.divInc5 == true) {
            document.getElementById('divInc5')!.remove();
            document.getElementById('5Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('5Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('5Inc')!.style.border = '3px solid black', 500);
        };
    };

    click10Inc() {
        if (this.divInc10 == true) {
            document.getElementById('divInc10')!.remove();
            document.getElementById('10Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('10Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('10Inc')!.style.border = '3px solid black', 500);
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

    click45Inc() {
        if (this.divInc45 == true) {
            document.getElementById('divInc45')!.remove();
            document.getElementById('45Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('45Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('45Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('45Inc')!.style.border = '3px solid black', 500);
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

        if(valueOfInput1 == "5") {
            document.getElementById('input11')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "10") {
            document.getElementById('input12')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "15") {
            document.getElementById('input13')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "20") {
            document.getElementById('input14')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "25") {
            document.getElementById('input15')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "30") {
            document.getElementById('input16')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "35") {
            document.getElementById('input17')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "40") {
            document.getElementById('input18')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "45") {
            document.getElementById('input19')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "50") {
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