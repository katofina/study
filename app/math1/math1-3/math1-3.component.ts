import { Component } from "@angular/core";

@Component({
    selector: 'math1-3',
    templateUrl: './math1-3.component.html',
    styleUrls: ['../math1-1/math1-1.component.scss']
})

export class Math1_3 {
    divSum15 = false;
    divSum10 = false;
    divSum8 = false;
    divSum4 = false;
    divSum6 = false;
    divSum15d = false;
    divSum10d = false;
    divSum8d = false;
    divSum4d = false;
    divSum6d = false;
    divInc40 = false;
    divInc15 = false;
    divInc25 = false;
    divInc50 = false;
    divInc5 = false;
    divInc10 = false;
    divInc45 = false;
    divInc20 = false;
    divInc35 = false;
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
    };

    viewDiv10() {
        document.getElementById("div9")!.style.display = "none";
        document.getElementById("div10")!.style.display = "block";
    };

    clickDivSum15() {
        this.divSum15 = true;
        this.divSum10 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum10d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum15d == true) {
            document.getElementById('divSum15')!.remove();
            document.getElementById('divSum15d')!.remove();
        };
    };

    clickDivSum10() {
        this.divSum15 = false;
        this.divSum10 = true;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum15d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum10d == true) {
            document.getElementById('divSum10')!.remove();
            document.getElementById('divSum10d')!.remove();
        };
    };

    clickDivSum8() {
        this.divSum15 = false;
        this.divSum10 = false;
        this.divSum8 = true;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum15d = false;
        this.divSum10d = false;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum8d == true) {
            document.getElementById('divSum8')!.remove();
            document.getElementById('divSum8d')!.remove();
        };
    };

    clickDivSum4() {
        this.divSum15 = false;
        this.divSum10 = false;
        this.divSum8 = false;
        this.divSum4 = true;
        this.divSum6 = false;
        this.divSum15d = false;
        this.divSum10d = false;
        this.divSum8d = false;
        this.divSum6d = false;
        if (this.divSum4d == true) {
            document.getElementById('divSum4')!.remove();
            document.getElementById('divSum4d')!.remove();
        };
    };

    clickDivSum6() {
        this.divSum15 = false;
        this.divSum10 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum6 = true;
        this.divSum15d = false;
        this.divSum10d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        if (this.divSum6d == true) {
            document.getElementById('divSum6')!.remove();
            document.getElementById('divSum6d')!.remove();
        };
    };

    clickDivSum15d() {
        this.divSum10 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum15d = true;
        this.divSum10d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum15 == true) {
            document.getElementById('divSum15d')!.remove();
            document.getElementById('divSum15')!.remove();
        };
    };

    clickDivSum10d() {
        this.divSum15 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum15d = false;
        this.divSum10d = true;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum10 == true) {
            document.getElementById('divSum10d')!.remove();
            document.getElementById('divSum10')!.remove();
        };
    };

    clickDivSum8d() {
        this.divSum15 = false;
        this.divSum10 = false;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum15d = false;
        this.divSum10d = false;
        this.divSum8d = true;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum8 == true) {
            document.getElementById('divSum8d')!.remove();
            document.getElementById('divSum8')!.remove();
        };
    };

    clickDivSum4d() {
        this.divSum15 = false;
        this.divSum10 = false;
        this.divSum8 = false;
        this.divSum6 = false;
        this.divSum15d = false;
        this.divSum10d = false;
        this.divSum8d = false;
        this.divSum4d = true;
        this.divSum6d = false;
        if (this.divSum4 == true) {
            document.getElementById('divSum4d')!.remove();
            document.getElementById('divSum4')!.remove();
        };
    };

    clickDivSum6d() {
        this.divSum15 = false;
        this.divSum10 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum15d = false;
        this.divSum10d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum6d = true;
        if (this.divSum6 == true) {
            document.getElementById('divSum6d')!.remove();
            document.getElementById('divSum6')!.remove();
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

        if(valueOfInput1 == "1") {
            document.getElementById('input1')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "3") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "2") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "2") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "4") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "0") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "6") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(checkValue === 7) {
            setTimeout(this.viewDiv4, 1000);
        }
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
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input22')).value;

        if(valueOfInput1 == "10") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "10") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "10") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "10") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "10") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "10") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "13") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "11") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "9") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "12") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "9") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "9") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 12) {
            setTimeout(this.viewDiv8, 1000);
        };
    };

    clickDivInc40() {
        this.divInc40 = true;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc15() {
        this.divInc40 = false;
        this.divInc15 = true;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc25() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = true;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc50() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = true;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc5() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = true;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc10() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = true;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc45() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = true;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc20() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = true;
        this.divInc35 = false;
        this.divInc30 = false;
    };

    clickDivInc35() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = true;
        this.divInc30 = false;
    };

    clickDivInc30() {
        this.divInc40 = false;
        this.divInc15 = false;
        this.divInc25 = false;
        this.divInc50 = false;
        this.divInc5 = false;
        this.divInc10 = false;
        this.divInc45 = false;
        this.divInc20 = false;
        this.divInc35 = false;
        this.divInc30 = true;
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

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input29')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input32')).value;

        if(valueOfInput1 == "5") {
            document.getElementById('input23')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "10") {
            document.getElementById('input24')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "15") {
            document.getElementById('input25')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "20") {
            document.getElementById('input26')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "25") {
            document.getElementById('input27')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "30") {
            document.getElementById('input28')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "35") {
            document.getElementById('input29')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "40") {
            document.getElementById('input30')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "45") {
            document.getElementById('input31')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "50") {
            document.getElementById('input32')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}