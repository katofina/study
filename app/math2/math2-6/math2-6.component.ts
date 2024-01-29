import { Component } from "@angular/core";

@Component({
    selector: 'math2-6',
    templateUrl: './math2-6.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_6 {
    sum49 = false;
    sum42 = false;
    sum32 = false;
    sum36 = false;
    sum54 = false;
    sum40 = false;
    sum30 = false;
    sum25 = false;
    Crucian = false;
    Perch = false;
    Roach = false;
    divInc45 = false;
    divInc72 = false;
    divInc18 = false;
    divInc54 = false;
    divInc90 = false;
    divInc27 = false;
    divInc36 = false;
    divInc81 = false;
    divInc9 = false;
    divInc63 = false;

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

    viewDiv10() {
        document.getElementById("div9")!.style.display = "none";
        document.getElementById("div10")!.style.display = "block";
    }

    clickSum49() {
        this.sum49 = true;
        this.sum42 = false;
        this.sum32 = false;
        this.sum36 = false;
        this.sum54 = false;
        this.sum40 = false;
        this.sum30 = false;
        this.sum25 = false;
    };

    clickSum42() {
        this.sum49 = false;
        this.sum42 = true;
        this.sum32 = false;
        this.sum36 = false;
        this.sum54 = false;
        this.sum40 = false;
        this.sum30 = false;
        this.sum25 = false;
    };

    clickSum32() {
        this.sum49 = false;
        this.sum42 = false;
        this.sum32 = true;
        this.sum36 = false;
        this.sum54 = false;
        this.sum40 = false;
        this.sum30 = false;
        this.sum25 = false;
    };

    clickSum36() {
        this.sum49 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum36 = true;
        this.sum54 = false;
        this.sum40 = false;
        this.sum30 = false;
        this.sum25 = false;
    };

    clickSum54() {
        this.sum49 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum36 = false;
        this.sum54 = true;
        this.sum40 = false;
        this.sum30 = false;
        this.sum25 = false;
    };

    clickSum40() {
        this.sum49 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum36 = false;
        this.sum54 = false;
        this.sum40 = true;
        this.sum30 = false;
        this.sum25 = false;
    };

    clickSum30() {
        this.sum49 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum36 = false;
        this.sum54 = false;
        this.sum40 = false;
        this.sum30 = true;
        this.sum25 = false;
    };

    clickSum25() {
        this.sum49 = false;
        this.sum42 = false;
        this.sum32 = false;
        this.sum36 = false;
        this.sum54 = false;
        this.sum40 = false;
        this.sum30 = false;
        this.sum25 = true;
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

    clickInc49() {
        if (this.sum49 == true) {
            document.getElementById('inc49')!.remove();
            document.getElementById('sum49')!.remove();
        } else {
            document.getElementById('inc49')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc49')!.style.border = '3px solid black', 500);
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

    clickInc36() {
        if (this.sum36 == true) {
            document.getElementById('inc36')!.remove();
            document.getElementById('sum36')!.remove();
        } else {
            document.getElementById('inc36')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc36')!.style.border = '3px solid black', 500);
        };
    };

    clickInc54() {
        if (this.sum54 == true) {
            document.getElementById('inc54')!.remove();
            document.getElementById('sum54')!.remove();
        } else {
            document.getElementById('inc54')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc54')!.style.border = '3px solid black', 500);
        };
    };

    clickInc40() {
        if (this.sum40 == true) {
            document.getElementById('inc40')!.remove();
            document.getElementById('sum40')!.remove();
        } else {
            document.getElementById('inc40')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc40')!.style.border = '3px solid black', 500);
        };
    };

    clickInc30() {
        if (this.sum30 == true) {
            document.getElementById('inc30')!.remove();
            document.getElementById('sum30')!.remove();
        } else {
            document.getElementById('inc30')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc30')!.style.border = '3px solid black', 500);
        };
    };

    clickCrucian() {
        this.Crucian = true;
        this.Perch = false;
        this.Roach = false;
    };

    clickPerch() {
        this.Crucian = false;
        this.Perch = true;
        this.Roach = false;
    };

    clickRoach() {
        this.Crucian = false;
        this.Perch = false;
        this.Roach = true;
    };

    clickKroshka() {
        if (this.Crucian == true) {
            document.getElementById('crucian')!.remove();
            document.getElementById('Kroshka')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('Kroshka')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('Kroshka')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('Kroshka')!.style.border = '3px solid black', 500);
        };
    };

    clickTobik() {
        if (this.Perch == true) {
            document.getElementById('perch')!.remove();
            document.getElementById('Tobik')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('Tobik')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('Tobik')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('Tobik')!.style.border = '3px solid black', 500);
        };
    };

    clickPushok() {
        if (this.Roach == true) {
            document.getElementById('roach')!.remove();
            document.getElementById('Pushok')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('Pushok')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('Pushok')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('Pushok')!.style.border = '3px solid black', 500);
        };
    };

    clickDivInc45() {
        this.divInc45 = true;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc72() {
        this.divInc45 = false;
        this.divInc72 = true;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc18() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = true;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc54() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = true;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc90() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = true;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc27() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = true;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc36() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = true;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc81() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = true;
        this.divInc9 = false;
        this.divInc63 = false;
    };

    clickDivInc9() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = true;
        this.divInc63 = false;
    };

    clickDivInc63() {
        this.divInc45 = false;
        this.divInc72 = false;
        this.divInc18 = false;
        this.divInc54 = false;
        this.divInc90 = false;
        this.divInc27 = false;
        this.divInc36 = false;
        this.divInc81 = false;
        this.divInc9 = false;
        this.divInc63 = true;
    };

    click63Inc() {
        if (this.divInc63 == true) {
            document.getElementById('divInc63')!.remove();
            document.getElementById('63Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('63Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('63Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('63Inc')!.style.border = '3px solid black', 500);
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

    click18Inc() {
        if (this.divInc18 == true) {
            document.getElementById('divInc18')!.remove();
            document.getElementById('18Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('18Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('18Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('18Inc')!.style.border = '3px solid black', 500);
        };
    };

    click54Inc() {
        if (this.divInc54 == true) {
            document.getElementById('divInc54')!.remove();
            document.getElementById('54Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('54Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('54Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('54Inc')!.style.border = '3px solid black', 500);
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

    click27Inc() {
        if (this.divInc27 == true) {
            document.getElementById('divInc27')!.remove();
            document.getElementById('27Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('27Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('27Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('27Inc')!.style.border = '3px solid black', 500);
        };
    };

    click36Inc() {
        if (this.divInc36 == true) {
            document.getElementById('divInc36')!.remove();
            document.getElementById('36Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('36Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('36Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('36Inc')!.style.border = '3px solid black', 500);
        };
    };

    click81Inc() {
        if (this.divInc81 == true) {
            document.getElementById('divInc81')!.remove();
            document.getElementById('81Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('81Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('81Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('81Inc')!.style.border = '3px solid black', 500);
        };
    };

    click9Inc() {
        if (this.divInc9 == true) {
            document.getElementById('divInc9')!.remove();
            document.getElementById('9Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('9Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('9Inc')!.style.border = '3px solid black', 500);
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

        if(valueOfInput1 == "9") {
            document.getElementById('input1')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "18") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "27") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "36") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "45") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "54") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "63") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "72") {
            document.getElementById('input8')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "81") {
            document.getElementById('input9')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "90") {
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