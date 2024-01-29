import { Component } from "@angular/core";

@Component({
    selector: 'math1-1',
    templateUrl: './math1-1.component.html',
    styleUrls: ['./math1-1.component.scss']
})

export class Math1_1 {
    divSum9 = false;
    divSum12 = false;
    divSum9d = false;
    divSum6 = false;
    divSum5 = false;
    divSum10 = false;

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

    clickDivSum9() {
        this.divSum9 = true;
        this.divSum12 = false;
        this.divSum9d = false;
        this.divSum6 = false;
        this.divSum5 = false;
        this.divSum10 = false;
    };

    clickDivSum12() {
        this.divSum9 = false;
        this.divSum12 = true;
        this.divSum9d = false;
        this.divSum6 = false;
        this.divSum5 = false;
        this.divSum10 = false;
    };

    clickDivSum9d() {
        this.divSum9 = false;
        this.divSum12 = false;
        this.divSum9d = true;
        this.divSum6 = false;
        this.divSum5 = false;
        this.divSum10 = false;
    };

    clickDivSum6() {
        this.divSum9 = false;
        this.divSum12 = false;
        this.divSum9d = false;
        this.divSum6 = true;
        this.divSum5 = false;
        this.divSum10 = false;
    };

    clickDivSum5() {
        this.divSum9 = false;
        this.divSum12 = false;
        this.divSum9d = false;
        this.divSum6 = false;
        this.divSum5 = true;
        this.divSum10 = false;
    };

    clickDivSum10() {
        this.divSum9 = false;
        this.divSum12 = false;
        this.divSum9d = false;
        this.divSum6 = false;
        this.divSum5 = false;
        this.divSum10 = true;
    };

    click5Sum() {
        if (this.divSum5 == true) {
            document.getElementById('divSum5')!.remove();
            document.getElementById('5Sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5Sum')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('5Sum')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('5Sum')!.style.border = '3px solid black', 500);
        };
    };

    click9Sum() {
        if (this.divSum9 == true) {
            document.getElementById('divSum9')!.remove();
            document.getElementById('9Sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9Sum')!.style.border = '3px solid black', 500);
        } else if (this.divSum9d == true) {
            document.getElementById('divSum9d')!.remove();
            document.getElementById('9Sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('9Sum')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('9Sum')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('9Sum')!.style.border = '3px solid black', 500);
        }; 
    };

    click6Sum() {
        if (this.divSum6 == true) {
            document.getElementById('divSum6')!.remove();
            document.getElementById('6Sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6Sum')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('6Sum')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('6Sum')!.style.border = '3px solid black', 500);
        };
    };

    click10Sum() {
        if (this.divSum10 == true) {
            document.getElementById('divSum10')!.remove();
            document.getElementById('10Sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10Sum')!.style.border = '3px solid black', 500);
        } else {
            document.getElementById('10Sum')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('10Sum')!.style.border = '3px solid black', 500);
        };
    };

    click8Sum() {
        document.getElementById('8Sum')!.style.border = '3px solid red';
        setTimeout(() => document.getElementById('8Sum')!.style.border = '3px solid black', 500);
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

        if(valueOfInput1 == "5") {
            document.getElementById('input1')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "1") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "8") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "4") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "9") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "3") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "2") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "7") {
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

        if(checkValue === 9) {
            setTimeout(this.viewDiv4, 1000);
        }
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input10')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input19')).value;

        if(valueOfInput1 == "11") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "12") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "13") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "14") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "15") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "16") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "17") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "18") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "19") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "20") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(this.viewDiv8, 1000);
        };
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input29')).value;

        if(valueOfInput1 == "14") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "13") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "12") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "11") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "10") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "9") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "8") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "7") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "6") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "5") {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(this.viewDiv10, 1000);
        };
    };

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input34')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input35')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input36')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input37')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input38')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input39')).value;
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input40')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input41')).value;

        if(valueOfInput1 == "13") {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "12") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "11") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "3") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "19") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "5") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "8") {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "17") {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "13") {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "7") {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "15") {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "10") {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 12) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}