import { Component } from "@angular/core";

@Component({
    selector: 'math2-3',
    templateUrl: './math2-3.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_3 {
    divSum21 = false;
    divSum16 = false;
    divSum9 = false;
    divSum30 = false;
    divSum21d = false;
    divSum16d = false;
    divSum9d = false;
    divSum30d = false;
    divSum10 = false;
    divSum20 = false;
    divSum10d = false;
    divSum20d = false;
    divSum11 = false;
    divSum27 = false;
    divSum11d = false;
    divSum27d = false;
    divInc30 = false;
    divInc36 = false;
    divInc24 = false;
    divInc6 = false;
    divInc18 = false;
    divInc12 = false;
    divInc48 = false;
    divInc60 = false;
    divInc42 = false;
    divInc54 = false;

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

    clickDivSum21() {
        this.divSum21 = true;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum21d == true) {
            document.getElementById('divSum21')!.remove();
            document.getElementById('divSum21d')!.remove();
        };
    };

    clickDivSum16() {
        this.divSum21 = false;
        this.divSum16 = true;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum16d == true) {
            document.getElementById('divSum16')!.remove();
            document.getElementById('divSum16d')!.remove();
        };
    };

    clickDivSum9() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = true;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum9d == true) {
            document.getElementById('divSum9')!.remove();
            document.getElementById('divSum9d')!.remove();
        };
    };

    clickDivSum30() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = true;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum30d == true) {
            document.getElementById('divSum30')!.remove();
            document.getElementById('divSum30d')!.remove();
        };
    };

    clickDivSum21d() {
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = true;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum21 == true) {
            document.getElementById('divSum21')!.remove();
            document.getElementById('divSum21d')!.remove();
        };
    };

    clickDivSum16d() {
        this.divSum21 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = true;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum16 == true) {
            document.getElementById('divSum16')!.remove();
            document.getElementById('divSum16d')!.remove();
        };
    };

    clickDivSum9d() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = true;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum9 == true) {
            document.getElementById('divSum9')!.remove();
            document.getElementById('divSum9d')!.remove();
        };
    };

    clickDivSum30d() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = true;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum30 == true) {
            document.getElementById('divSum30')!.remove();
            document.getElementById('divSum30d')!.remove();
        };
    };

    clickDivSum10() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = true;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum10d == true) {
            document.getElementById('divSum10')!.remove();
            document.getElementById('divSum10d')!.remove();
        };
    };

    clickDivSum20() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = true;
        this.divSum10d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum20d == true) {
            document.getElementById('divSum20')!.remove();
            document.getElementById('divSum20d')!.remove();
        };
    };

    clickDivSum10d() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum20 = false;
        this.divSum10d = true;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum10 == true) {
            document.getElementById('divSum10')!.remove();
            document.getElementById('divSum10d')!.remove();
        };
    };

    clickDivSum20d() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum10d = false;
        this.divSum20d = true;
        this.divSum11 = false;
        this.divSum27 = false;
        this.divSum11d = false;
        this.divSum27d = false;
        if (this.divSum20 == true) {
            document.getElementById('divSum20')!.remove();
            document.getElementById('divSum20d')!.remove();
        };
    };

    clickDivSum11() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = true;
        this.divSum27 = false;
        this.divSum27d = false;
        if (this.divSum11d == true) {
            document.getElementById('divSum11')!.remove();
            document.getElementById('divSum11d')!.remove();
        };
    };

    clickDivSum27() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum27 = true;
        this.divSum11d = false;
        if (this.divSum27d == true) {
            document.getElementById('divSum27')!.remove();
            document.getElementById('divSum27d')!.remove();
        };
    };

    clickDivSum11d() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum27 = false;
        this.divSum11d = true;
        this.divSum27d = false;
        if (this.divSum11 == true) {
            document.getElementById('divSum11')!.remove();
            document.getElementById('divSum11d')!.remove();
        };
    };

    clickDivSum27d() {
        this.divSum21 = false;
        this.divSum16 = false;
        this.divSum9 = false;
        this.divSum30 = false;
        this.divSum21d = false;
        this.divSum16d = false;
        this.divSum9d = false;
        this.divSum30d = false;
        this.divSum10 = false;
        this.divSum20 = false;
        this.divSum10d = false;
        this.divSum20d = false;
        this.divSum11 = false;
        this.divSum11d = false;
        this.divSum27d = true;
        if (this.divSum27 == true) {
            document.getElementById('divSum27')!.remove();
            document.getElementById('divSum27d')!.remove();
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

        if(valueOfInput1 == "50") {
            document.getElementById('input1')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "45") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "40") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "35") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "30") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "25") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "20") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "15") {
            document.getElementById('input8')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "10") {
            document.getElementById('input9')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "5") {
            document.getElementById('input10')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(this.viewDiv4, 1000);
        }
    };

    clickDivInc30() {
        this.divInc30 = true;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc36() {
        this.divInc30 = false;
        this.divInc36 = true;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc24() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = true;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc6() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = true;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc18() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = true;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc12() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = true;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc48() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = true;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc60() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = true;
        this.divInc42 = false;
        this.divInc54 = false;
    };

    clickDivInc42() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = true;
        this.divInc54 = false;
    };

    clickDivInc54() {
        this.divInc30 = false;
        this.divInc36 = false;
        this.divInc24 = false;
        this.divInc6 = false;
        this.divInc18 = false;
        this.divInc12 = false;
        this.divInc48 = false;
        this.divInc60 = false;
        this.divInc42 = false;
        this.divInc54 = true;
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

    click6Inc() {
        if (this.divInc6 == true) {
            document.getElementById('divInc6')!.remove();
            document.getElementById('6Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('6Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('6Inc')!.style.border = '3px solid black', 500);
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

    click12Inc() {
        if (this.divInc12 == true) {
            document.getElementById('divInc12')!.remove();
            document.getElementById('12Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('12Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('12Inc')!.style.border = '3px solid black', 500);
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

    click42Inc() {
        if (this.divInc42 == true) {
            document.getElementById('divInc42')!.remove();
            document.getElementById('42Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('42Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('42Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('42Inc')!.style.border = '3px solid black', 500);
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

        if(valueOfInput1 == "6") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "12") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "18") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "24") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "30") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "36") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "42") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "48") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "54") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "60") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(() => alert('Правильно!'), 500);
        }
    };
}