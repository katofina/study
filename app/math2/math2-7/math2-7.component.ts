import { Component } from "@angular/core";

@Component({
    selector: 'math2-7',
    templateUrl: './math2-7.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_7 {
    sum27 = false;
    sum45 = false;
    sum35 = false;
    sum24 = false;
    sum20 = false;
    sum42 = false;
    sum32 = false;
    sum24d = false;
    divInc40 = false;
    divInc50 = false;
    divInc80 = false;
    divInc100 = false;
    divInc10 = false;
    divInc20 = false;
    divInc60 = false;
    divInc70 = false;
    divInc90 = false;
    divInc30 = false;

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

    clickSum27() {
        this.sum27 = true;
        this.sum45 = false;
        this.sum35 = false;
        this.sum24 = false;
        this.sum20 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum24d = false;
    };

    clickSum45() {
        this.sum27 = false;
        this.sum45 = true;
        this.sum35 = false;
        this.sum24 = false;
        this.sum20 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum24d = false;
    };

    clickSum35() {
        this.sum27 = false;
        this.sum45 = false;
        this.sum35 = true;
        this.sum24 = false;
        this.sum20 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum24d = false;
    };

    clickSum24() {
        this.sum27 = false;
        this.sum45 = false;
        this.sum35 = false;
        this.sum24 = true;
        this.sum20 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum24d = false;
    };

    clickSum20() {
        this.sum27 = false;
        this.sum45 = false;
        this.sum35 = false;
        this.sum24 = false;
        this.sum20 = true;
        this.sum42 = false;
        this.sum32 = false;
        this.sum24d = false;
    };

    clickSum42() {
        this.sum27 = false;
        this.sum45 = false;
        this.sum35 = false;
        this.sum24 = false;
        this.sum20 = false;
        this.sum42 = true;
        this.sum32 = false;
        this.sum24d = false;
    };

    clickSum32() {
        this.sum27 = false;
        this.sum45 = false;
        this.sum35 = false;
        this.sum24 = false;
        this.sum20 = false;
        this.sum42 = false;
        this.sum32 = true;
        this.sum24d = false;
    };

    clickSum24d() {
        this.sum27 = false;
        this.sum45 = false;
        this.sum35 = false;
        this.sum24 = false;
        this.sum20 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum24d = true;
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

    clickInc45() {
        if (this.sum45 == true) {
            document.getElementById('inc45')!.remove();
            document.getElementById('sum45')!.remove();
        } else {
            document.getElementById('inc45')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc45')!.style.border = '3px solid black', 500);
        };
    };

    clickInc35() {
        if (this.sum35 == true) {
            document.getElementById('inc35')!.remove();
            document.getElementById('sum35')!.remove();
        } else {
            document.getElementById('inc35')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc35')!.style.border = '3px solid black', 500);
        };
    };

    clickInc24() {
        if (this.sum24 == true) {
            document.getElementById('inc24')!.remove();
            document.getElementById('sum24')!.remove();
        } else if (this.sum24d == true) {
            document.getElementById('inc24')!.remove();
            document.getElementById('sum24d')!.remove();
        } else {
            document.getElementById('inc24')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc24')!.style.border = '3px solid black', 500);
        };
    };

    clickInc20() {
        if (this.sum20 == true) {
            document.getElementById('inc20')!.remove();
            document.getElementById('sum20')!.remove();
        } else {
            document.getElementById('inc20')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc20')!.style.border = '3px solid black', 500);
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

    clickInc32() {
        if (this.sum32 == true) {
            document.getElementById('inc32')!.remove();
            document.getElementById('sum32')!.remove();
        } else {
            document.getElementById('inc32')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc32')!.style.border = '3px solid black', 500);
        };
    };

    clickInc24d() {
        if (this.sum24d == true) {
            document.getElementById('inc24d')!.remove();
            document.getElementById('sum24d')!.remove();
        } else if (this.sum24 == true) {
            document.getElementById('inc24d')!.remove();
            document.getElementById('sum24')!.remove();
        } else {
            document.getElementById('inc24d')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc24d')!.style.border = '3px solid black', 500);
        };
    };

    clickDivInc40() {
        this.divInc40 = true;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc50() {
        this.divInc40 = false;
        this.divInc50 = true;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc80() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = true;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc100() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = true;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc10() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = true;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc20() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = true;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc60() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = true;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc70() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = true;
        this.divInc90 = false;
        this.divInc30 = false;
    };

    clickDivInc90() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = true;
        this.divInc30 = false;
    };

    clickDivInc30() {
        this.divInc40 = false;
        this.divInc50 = false;
        this.divInc80 = false;
        this.divInc100 = false;
        this.divInc10 = false;
        this.divInc20 = false;
        this.divInc60 = false;
        this.divInc70 = false;
        this.divInc90 = false;
        this.divInc30 = true;
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

    click100Inc() {
        if (this.divInc100 == true) {
            document.getElementById('divInc100')!.remove();
            document.getElementById('100Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('100Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('100Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('100Inc')!.style.border = '3px solid black', 500);
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

    click60Inc() {
        if (this.divInc60 == true) {
            document.getElementById('divInc60')!.remove();
            document.getElementById('60Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('60Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('60Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('60Inc')!.style.border = '3px solid black', 500);
        };
    };

    click70Inc() {
        if (this.divInc70 == true) {
            document.getElementById('divInc70')!.remove();
            document.getElementById('70Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('70Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('70Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('70Inc')!.style.border = '3px solid black', 500);
        };
    };

    click90Inc() {
        if (this.divInc90 == true) {
            document.getElementById('divInc90')!.remove();
            document.getElementById('90Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('90Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('90Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('90Inc')!.style.border = '3px solid black', 500);
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

        if(valueOfInput1 == "10") {
            document.getElementById('input1')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "20") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "30") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "40") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "50") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "60") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "70") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "80") {
            document.getElementById('input8')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "90") {
            document.getElementById('input9')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "100") {
            document.getElementById('input10')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(() => alert('Правильно!'), 500);
        }
    };
}