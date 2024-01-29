import { Component } from "@angular/core";

@Component({
    selector: 'math2-4',
    templateUrl: './math2-4.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_4 {
    divSum40 = false;
    divSum40d = false;
    divSum60 = false;
    divSum60d = false;
    divSum70 = false;
    divSum70d = false;
    divSum20 = false;
    divSum20d = false;
    divSum30 = false;
    divSum30d = false;
    divSum80 = false;
    divSum80d = false;
    divSum45 = false;
    divSum45d = false;
    divSum50 = false;
    divSum50d = false;
    divInc49 = false;
    divInc28 = false;
    divInc70 = false;
    divInc21 = false;
    divInc14 = false;
    divInc7 = false;
    divInc56 = false;
    divInc63 = false;
    divInc42 = false;
    divInc35 = false;

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

    clickDivSum40() {
        this.divSum40 = true;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum40d == true) {
            document.getElementById('divSum40')!.remove();
            document.getElementById('divSum40d')!.remove();
        };
    };

    clickDivSum40d() {
        this.divSum40d = true;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum40 == true) {
            document.getElementById('divSum40')!.remove();
            document.getElementById('divSum40d')!.remove();
        };
    };

    clickDivSum60() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = true;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum60d == true) {
            document.getElementById('divSum60')!.remove();
            document.getElementById('divSum60d')!.remove();
        };
    };

    clickDivSum60d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60d = true;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum60 == true) {
            document.getElementById('divSum60')!.remove();
            document.getElementById('divSum60d')!.remove();
        };
    };

    clickDivSum70() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = true;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum70d == true) {
            document.getElementById('divSum70')!.remove();
            document.getElementById('divSum70d')!.remove();
        };
    };

    clickDivSum70d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70d = true;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum70 == true) {
            document.getElementById('divSum70')!.remove();
            document.getElementById('divSum70d')!.remove();
        };
    };

    clickDivSum20() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = true;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum20d == true) {
            document.getElementById('divSum20')!.remove();
            document.getElementById('divSum20d')!.remove();
        };
    };

    clickDivSum20d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20d = true;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum20 == true) {
            document.getElementById('divSum20')!.remove();
            document.getElementById('divSum20d')!.remove();
        };
    };

    clickDivSum30() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = true;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum30d == true) {
            document.getElementById('divSum30')!.remove();
            document.getElementById('divSum30d')!.remove();
        };
    };

    clickDivSum30d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30d = true;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum30 == true) {
            document.getElementById('divSum30')!.remove();
            document.getElementById('divSum30d')!.remove();
        };
    };

    clickDivSum80() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = true;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum80d == true) {
            document.getElementById('divSum80')!.remove();
            document.getElementById('divSum80d')!.remove();
        };
    };

    clickDivSum80d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80d = true;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum80 == true) {
            document.getElementById('divSum80')!.remove();
            document.getElementById('divSum80d')!.remove();
        };
    };

    clickDivSum45() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = true;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum45d == true) {
            document.getElementById('divSum45')!.remove();
            document.getElementById('divSum45d')!.remove();
        };
    };

    clickDivSum45d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45d = true;
        this.divSum50 = false;
        this.divSum50d = false;
        if (this.divSum45 == true) {
            document.getElementById('divSum45')!.remove();
            document.getElementById('divSum45d')!.remove();
        };
    };

    clickDivSum50() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50 = true;
        if (this.divSum50d == true) {
            document.getElementById('divSum50')!.remove();
            document.getElementById('divSum50d')!.remove();
        };
    };

    clickDivSum50d() {
        this.divSum40 = false;
        this.divSum40d = false;
        this.divSum60 = false;
        this.divSum60d = false;
        this.divSum70 = false;
        this.divSum70d = false;
        this.divSum20 = false;
        this.divSum20d = false;
        this.divSum30 = false;
        this.divSum30d = false;
        this.divSum80 = false;
        this.divSum80d = false;
        this.divSum45 = false;
        this.divSum45d = false;
        this.divSum50d = true;
        if (this.divSum50 == true) {
            document.getElementById('divSum50')!.remove();
            document.getElementById('divSum50d')!.remove();
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
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input11')).value;

        if(valueOfInput1 == "50") {
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

        if(valueOfInput3 == "16") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "15") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "24") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "20") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "25") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "8") {
            document.getElementById('input8')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "6") {
            document.getElementById('input9')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "28") {
            document.getElementById('input10')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "40") {
            document.getElementById('input11')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.style.border = "3px solid red";
        };

        if(checkValue === 11) {
            setTimeout(this.viewDiv4, 1000);
        }
    };

    clickDivInc49() {
        this.divInc49 = true;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc28() {
        this.divInc49 = false;
        this.divInc28 = true;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc70() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = true;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc21() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = true;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc14() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = true;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc7() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = true;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc56() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = true;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc63() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = true;
        this.divInc42 = false;
        this.divInc35 = false;
    };

    clickDivInc42() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = true;
        this.divInc35 = false;
    };

    clickDivInc35() {
        this.divInc49 = false;
        this.divInc28 = false;
        this.divInc70 = false;
        this.divInc21 = false;
        this.divInc14 = false;
        this.divInc7 = false;
        this.divInc56 = false;
        this.divInc63 = false;
        this.divInc42 = false;
        this.divInc35 = true;
    };

    click49Inc() {
        if (this.divInc49 == true) {
            document.getElementById('divInc49')!.remove();
            document.getElementById('49Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('49Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('49Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('49Inc')!.style.border = '3px solid black', 500);
        };
    };

    click28Inc() {
        if (this.divInc28 == true) {
            document.getElementById('divInc28')!.remove();
            document.getElementById('28Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('28Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('28Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('28Inc')!.style.border = '3px solid black', 500);
        };
    };

    click21Inc() {
        if (this.divInc21 == true) {
            document.getElementById('divInc21')!.remove();
            document.getElementById('21Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('21Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('21Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('21Inc')!.style.border = '3px solid black', 500);
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

    click14Inc() {
        if (this.divInc14 == true) {
            document.getElementById('divInc14')!.remove();
            document.getElementById('14Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('14Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('14Inc')!.style.border = '3px solid black', 500);
        };
    };

    click7Inc() {
        if (this.divInc7 == true) {
            document.getElementById('divInc7')!.remove();
            document.getElementById('7Inc')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7Inc')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('7Inc')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('7Inc')!.style.border = '3px solid black', 500);
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

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input21')).value;

        if(valueOfInput1 == "7") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "14") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "21") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "28") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "35") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "42") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "49") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "56") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "63") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "70") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(() => alert('Правильно!'), 500);
        }
    };
}