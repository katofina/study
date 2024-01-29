import { Component } from "@angular/core";

@Component({
    selector: 'math2-1',
    templateUrl: './math2-1.component.html',
    styleUrls: ['./math2-1.component.scss']
})

export class Math2_1 {
    divSum27 = false;
    divSum7 = false;
    divSum6 = false;
    divSum30 = false;
    divSum29 = false;
    divSum7d = false;
    divSum12 = false;
    divSum6d = false;
    divSum27d = false;
    divSum15 = false;
    divSum12d = false;
    divSum29d = false;
    divSum30d = false;
    divSum15d = false;
    divSum16 = false;
    divSum16d = false;
    divInc24 = false;
    divInc36 = false;
    divInc32 = false;
    divInc40 = false;
    divInc12 = false;
    divInc16 = false;
    divInc28 = false;
    divInc20 = false;
    divInc8 = false;
    divIncr18 = false;
    divIncr48 = false;
    divIncr42 = false;
    divIncr24 = false;
    divIncr6 = false;
    divIncr36 = false;
    divIncr30 = false;
    divIncr54 = false;
    divIncr60 = false;
    divIncr12 = false;

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

    clickDivSum27() {
        this.divSum27 = true;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum27d == true) {
            document.getElementById('divSum27')!.remove();
            document.getElementById('divSum27d')!.remove();
        };
    };

    clickDivSum7() {
        this.divSum27 = false;
        this.divSum7 = true;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum7d == true) {
            document.getElementById('divSum7')!.remove();
            document.getElementById('divSum7d')!.remove();
        };
    };

    clickDivSum6() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = true;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum6d == true) {
            document.getElementById('divSum6')!.remove();
            document.getElementById('divSum6d')!.remove();
        };
    };

    clickDivSum30() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = true;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum30d == true) {
            document.getElementById('divSum30')!.remove();
            document.getElementById('divSum30d')!.remove();
        };
    };

    clickDivSum29() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = true;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum29d == true) {
            document.getElementById('divSum29')!.remove();
            document.getElementById('divSum29d')!.remove();
        };
    };

    clickDivSum7d() {
        this.divSum27 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = true;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum7 == true) {
            document.getElementById('divSum7')!.remove();
            document.getElementById('divSum7d')!.remove();
        };
    };

    clickDivSum12() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = true;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum12d == true) {
            document.getElementById('divSum12')!.remove();
            document.getElementById('divSum12d')!.remove();
        };
    };

    clickDivSum6d() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = true;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum6 == true) {
            document.getElementById('divSum6')!.remove();
            document.getElementById('divSum6d')!.remove();
        };
    };

    clickDivSum27d() {
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = true;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum27 == true) {
            document.getElementById('divSum27')!.remove();
            document.getElementById('divSum27d')!.remove();
        };
    };

    clickDivSum15() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = true;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum15d == true) {
            document.getElementById('divSum15')!.remove();
            document.getElementById('divSum15d')!.remove();
        };
    };

    clickDivSum12d() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = true;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum12 == true) {
            document.getElementById('divSum12')!.remove();
            document.getElementById('divSum12d')!.remove();
        };
    };

    clickDivSum29d() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = true;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum29 == true) {
            document.getElementById('divSum29')!.remove();
            document.getElementById('divSum29d')!.remove();
        };
    };

    clickDivSum30d() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = true;
        this.divSum15d = false;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum30 == true) {
            document.getElementById('divSum30')!.remove();
            document.getElementById('divSum30d')!.remove();
        };
    };

    clickDivSum15d() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = true;
        this.divSum16 = false;
        this.divSum16d = false;
        if (this.divSum15 == true) {
            document.getElementById('divSum15')!.remove();
            document.getElementById('divSum15d')!.remove();
        };
    };

    clickDivSum16() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16 = true;
        if (this.divSum16d == true) {
            document.getElementById('divSum16')!.remove();
            document.getElementById('divSum16d')!.remove();
        };
    };

    clickDivSum16d() {
        this.divSum27 = false;
        this.divSum7 = false;
        this.divSum6 = false;
        this.divSum30 = false;
        this.divSum29 = false;
        this.divSum7d = false;
        this.divSum12 = false;
        this.divSum6d = false;
        this.divSum27d = false;
        this.divSum15 = false;
        this.divSum12d = false;
        this.divSum29d = false;
        this.divSum30d = false;
        this.divSum15d = false;
        this.divSum16d = true;
        if (this.divSum16 == true) {
            document.getElementById('divSum16')!.remove();
            document.getElementById('divSum16d')!.remove();
        };
    };

    clickDivInc24() {
        this.divInc24 = true;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc36() {
        this.divInc24 = false;
        this.divInc36 = true;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc32() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = true;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc40() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = true;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc12() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = true;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc16() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = true;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc28() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = true;
        this.divInc20 = false;
        this.divInc8 = false;
    };

    clickDivInc20() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = true;
        this.divInc8 = false;
    };

    clickDivInc8() {
        this.divInc24 = false;
        this.divInc36 = false;
        this.divInc32 = false;
        this.divInc40 = false;
        this.divInc12 = false;
        this.divInc16 = false;
        this.divInc28 = false;
        this.divInc20 = false;
        this.divInc8 = true;
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

        if(valueOfInput1 == "54") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "42") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "36") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "30") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "18") {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "12") {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "24") {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "48") {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "60") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 9) {
            setTimeout(this.viewDiv8, 1000);
        }
    };

    clickDivIncr18() {
        this.divIncr18 = true;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr48() {
        this.divIncr18 = false;
        this.divIncr48 = true;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr42() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = true;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr24() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = true;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr6() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = true;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr36() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = true;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr30() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = true;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr54() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = true;
        this.divIncr60 = false;
        this.divIncr12 = false;
    };

    clickDivIncr60() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = true;
        this.divIncr12 = false;
    };

    clickDivIncr12() {
        this.divIncr18 = false;
        this.divIncr48 = false;
        this.divIncr42 = false;
        this.divIncr24 = false;
        this.divIncr6 = false;
        this.divIncr36 = false;
        this.divIncr30 = false;
        this.divIncr54 = false;
        this.divIncr60 = false;
        this.divIncr12 = true;
    };

    click36Incr() {
        if (this.divIncr36 == true) {
            document.getElementById('divIncr36')!.remove();
            document.getElementById('36Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('36Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('36Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('36Incr')!.style.border = '3px solid black', 500);
        };
    };

    click18Incr() {
        if (this.divIncr18 == true) {
            document.getElementById('divIncr18')!.remove();
            document.getElementById('18Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('18Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('18Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('18Incr')!.style.border = '3px solid black', 500);
        };
    };

    click48Incr() {
        if (this.divIncr48 == true) {
            document.getElementById('divIncr48')!.remove();
            document.getElementById('48Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('48Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('48Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('48Incr')!.style.border = '3px solid black', 500);
        };
    };

    click12Incr() {
        if (this.divIncr12 == true) {
            document.getElementById('divIncr12')!.remove();
            document.getElementById('12Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('12Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('12Incr')!.style.border = '3px solid black', 500);
        };
    };

    click42Incr() {
        if (this.divIncr42 == true) {
            document.getElementById('divIncr42')!.remove();
            document.getElementById('42Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('42Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('42Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('42Incr')!.style.border = '3px solid black', 500);
        };
    };

    click24Incr() {
        if (this.divIncr24 == true) {
            document.getElementById('divIncr24')!.remove();
            document.getElementById('24Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('24Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('24Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('24Incr')!.style.border = '3px solid black', 500);
        };
    };

    click30Incr() {
        if (this.divIncr30 == true) {
            document.getElementById('divIncr30')!.remove();
            document.getElementById('30Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('30Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('30Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('30Incr')!.style.border = '3px solid black', 500);
        };
    };

    click54Incr() {
        if (this.divIncr54 == true) {
            document.getElementById('divIncr54')!.remove();
            document.getElementById('54Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('54Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('54Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('54Incr')!.style.border = '3px solid black', 500);
        };
    };

    click60Incr() {
        if (this.divIncr60 == true) {
            document.getElementById('divIncr60')!.remove();
            document.getElementById('60Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('60Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('60Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('60Incr')!.style.border = '3px solid black', 500);
        };
    };

    click6Incr() {
        if (this.divIncr6 == true) {
            document.getElementById('divIncr6')!.remove();
            document.getElementById('6Incr')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6Incr')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('6Incr')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('6Incr')!.style.border = '3px solid black', 500);
        };
    };
}