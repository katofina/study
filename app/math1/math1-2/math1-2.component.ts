import { Component } from "@angular/core";

@Component({
    selector: 'math1-2',
    templateUrl: './math1-2.component.html',
    styleUrls: ['../math1-1/math1-1.component.scss']
})

export class Math1_2 {
    divSum9 = false;
    divSum3 = false;
    divSum5 = false;
    divSum7 = false;
    divSum8 = false;
    divSum4 = false;
    divSum2 = false;
    divSum6 = false;
    divSum9d = false;
    divSum3d = false;
    divSum5d = false;
    divSum7d = false;
    divSum8d = false;
    divSum4d = false;
    divSum2d = false;
    divSum6d = false;
    imgNumber4 = false;
    imgNumber16 = false;
    imgNumber24 = false;
    imgNumber10 = false;
    imgNumber6 = false;
    imgNumber8 = false;
    imgNumber12 = false;
    imgNumber28 = false;
    imgNumber30 = false;
    imgNumber36 = false;
    imgNumber15 = false;
    imgNumber11 = false;
    imgNumber23 = false;
    imgNumber21 = false;
    imgNumber19 = false;
    imgNumber17 = false;
    imgNumber7 = false;
    imgNumber3 = false;
    imgNumber1 = false;
    imgNumber5 = false;

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
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum9d == true) {
            document.getElementById('divSum9')!.remove();
            document.getElementById('divSum9d')!.remove();
        };
    };

    clickDivSum3() {
        this.divSum9 = false;
        this.divSum3 = true;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum3d == true) {
            document.getElementById('divSum3')!.remove();
            document.getElementById('divSum3d')!.remove();
        };
    };

    clickDivSum5() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = true;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum5d == true) {
            document.getElementById('divSum5')!.remove();
            document.getElementById('divSum5d')!.remove();
        };
    };

    clickDivSum7() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = true;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum7d == true) {
            document.getElementById('divSum7')!.remove();
            document.getElementById('divSum7d')!.remove();
        };
    };

    clickDivSum8() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = true;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum8d == true) {
            document.getElementById('divSum8')!.remove();
            document.getElementById('divSum8d')!.remove();
        };
    };

    clickDivSum4() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = true;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum4d == true) {
            document.getElementById('divSum4')!.remove();
            document.getElementById('divSum4d')!.remove();
        };
    };

    clickDivSum2() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = true;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum6d = false;
        if (this.divSum2d == true) {
            document.getElementById('divSum2')!.remove();
            document.getElementById('divSum2d')!.remove();
        };
    };

    clickDivSum6() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = true;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        if (this.divSum6d == true) {
            document.getElementById('divSum6')!.remove();
            document.getElementById('divSum6d')!.remove();
        };
    };

    clickDivSum9d() {
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = true;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum9 == true) {
            document.getElementById('divSum9d')!.remove();
            document.getElementById('divSum9')!.remove();
        };
    };

    clickDivSum3d() {
        this.divSum9 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = true;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum3 == true) {
            document.getElementById('divSum3d')!.remove();
            document.getElementById('divSum3')!.remove();
        };
    };

    clickDivSum5d() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = true;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum5 == true) {
            document.getElementById('divSum5d')!.remove();
            document.getElementById('divSum5')!.remove();
        };
    };

    clickDivSum7d() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = true;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum7 == true) {
            document.getElementById('divSum7d')!.remove();
            document.getElementById('divSum7')!.remove();
        };
    };

    clickDivSum8d() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = true;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum8 == true) {
            document.getElementById('divSum8d')!.remove();
            document.getElementById('divSum8')!.remove();
        };
    };

    clickDivSum4d() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum2 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = true;
        this.divSum2d = false;
        this.divSum6d = false;
        if (this.divSum4 == true) {
            document.getElementById('divSum4d')!.remove();
            document.getElementById('divSum4')!.remove();
        };
    };

    clickDivSum2d() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum6 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = true;
        this.divSum6d = false;
        if (this.divSum2 == true) {
            document.getElementById('divSum2d')!.remove();
            document.getElementById('divSum2')!.remove();
        };
    };

    clickDivSum6d() {
        this.divSum9 = false;
        this.divSum3 = false;
        this.divSum5 = false;
        this.divSum7 = false;
        this.divSum8 = false;
        this.divSum4 = false;
        this.divSum2 = false;
        this.divSum9d = false;
        this.divSum3d = false;
        this.divSum5d = false;
        this.divSum7d = false;
        this.divSum8d = false;
        this.divSum4d = false;
        this.divSum2d = false;
        this.divSum6d = true;
        if (this.divSum6 == true) {
            document.getElementById('divSum6d')!.remove();
            document.getElementById('divSum6')!.remove();
        }
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

        if(valueOfInput2 == "6") {
            document.getElementById('input2')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "0") {
            document.getElementById('input3')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "0") {
            document.getElementById('input4')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "7") {
            document.getElementById('input5')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "2") {
            document.getElementById('input6')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "3") {
            document.getElementById('input7')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "3") {
            document.getElementById('input8')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "8") {
            document.getElementById('input9')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "8") {
            document.getElementById('input10')!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
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

    clickImgNumber4() {
        this.imgNumber4 = true;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber16() {
        this.imgNumber4 = false;
        this.imgNumber16 = true;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber24() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = true;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber10() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = true;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber6() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = true;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber8() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = true;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber12() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = true;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber28() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = true;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber30() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = true;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber36() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = true;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber15() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = true;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber11() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = true;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber23() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = true;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber21() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = true;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber19() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = true;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber17() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = true;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber7() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = true;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber3() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = true;
        this.imgNumber1 = false;
        this.imgNumber5 = false;
    };

    clickImgNumber1() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = true;
        this.imgNumber5 = false;
    };

    clickImgNumber5() {
        this.imgNumber4 = false;
        this.imgNumber16 = false;
        this.imgNumber24 = false;
        this.imgNumber10 = false;
        this.imgNumber6 = false;
        this.imgNumber8 = false;
        this.imgNumber12 = false;
        this.imgNumber28 = false;
        this.imgNumber30 = false;
        this.imgNumber36 = false;
        this.imgNumber15 = false;
        this.imgNumber11 = false;
        this.imgNumber23 = false;
        this.imgNumber21 = false;
        this.imgNumber19 = false;
        this.imgNumber17 = false;
        this.imgNumber7 = false;
        this.imgNumber3 = false;
        this.imgNumber1 = false;
        this.imgNumber5 = true;
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
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input34')).value;

        if(valueOfInput1 == "10") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "20") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "10") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "14") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "10") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "20") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "10") {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "15") {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "9") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "13") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "16") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "9") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 12) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}