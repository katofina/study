import { Component } from "@angular/core";
import { checkServerIdentity } from "tls";
import { threadId } from "worker_threads";

@Component({
    selector: 'math2-8',
    templateUrl: './math2-8.component.html',
    styleUrls: ['./../math2-1/math2-1.component.scss']
})

export class Math2_8 {
    sum36 = false;
    sum30 = false;
    sum21 = false;
    sum12 = false;
    sum48 = false;
    sum54 = false;
    sum49 = false;
    sum54d = false;
    sum1 = false;
    sum2 = false;
    sum3 = false;
    sum4 = false;
    sum5 = false;
    sum6 = false;
    sum7 = false;
    diff1 = false;
    diff2 = false;
    diff3 = false;
    diff4 = false;
    diff5 = false;
    diff6 = false;
    diff7 = false;
    num54 = false;
    num48 = false;
    num24 = false;

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

    clickSum36() {
        this.sum36 = true;
        this.sum30 = false;
        this.sum21 = false;
        this.sum12 = false;
        this.sum48 = false;
        this.sum54 = false;
        this.sum49 = false;
        this.sum54d = false;
    };

    clickSum30() {
        this.sum36 = false;
        this.sum30 = true;
        this.sum21 = false;
        this.sum12 = false;
        this.sum48 = false;
        this.sum54 = false;
        this.sum49 = false;
        this.sum54d = false;
    };

    clickSum21() {
        this.sum36 = false;
        this.sum30 = false;
        this.sum21 = true;
        this.sum12 = false;
        this.sum48 = false;
        this.sum54 = false;
        this.sum49 = false;
        this.sum54d = false;
    };

    clickSum12() {
        this.sum36 = false;
        this.sum30 = false;
        this.sum21 = false;
        this.sum12 = true;
        this.sum48 = false;
        this.sum54 = false;
        this.sum49 = false;
        this.sum54d = false;
    };

    clickSum48() {
        this.sum36 = false;
        this.sum30 = false;
        this.sum21 = false;
        this.sum12 = false;
        this.sum48 = true;
        this.sum54 = false;
        this.sum49 = false;
        this.sum54d = false;
    };

    clickSum54() {
        this.sum36 = false;
        this.sum30 = false;
        this.sum21 = false;
        this.sum12 = false;
        this.sum48 = false;
        this.sum54 = true;
        this.sum49 = false;
        this.sum54d = false;
    };

    clickSum49() {
        this.sum36 = false;
        this.sum30 = false;
        this.sum21 = false;
        this.sum12 = false;
        this.sum48 = false;
        this.sum54 = false;
        this.sum49 = true;
        this.sum54d = false;
    };

    clickSum54d() {
        this.sum36 = false;
        this.sum30 = false;
        this.sum21 = false;
        this.sum12 = false;
        this.sum48 = false;
        this.sum54 = false;
        this.sum49 = false;
        this.sum54d = true;
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

    clickInc30() {
        if (this.sum30 == true) {
            document.getElementById('inc30')!.remove();
            document.getElementById('sum30')!.remove();
        } else {
            document.getElementById('inc30')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc30')!.style.border = '3px solid black', 500);
        };
    };

    clickInc21() {
        if (this.sum21 == true) {
            document.getElementById('inc21')!.remove();
            document.getElementById('sum21')!.remove();
        } else {
            document.getElementById('inc21')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc21')!.style.border = '3px solid black', 500);
        };
    };

    clickInc12() {
        if (this.sum12 == true) {
            document.getElementById('inc12')!.remove();
            document.getElementById('sum12')!.remove();
        } else {
            document.getElementById('inc12')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc12')!.style.border = '3px solid black', 500);
        };
    };

    clickInc48() {
        if (this.sum48 == true) {
            document.getElementById('inc48')!.remove();
            document.getElementById('sum48')!.remove();
        } else {
            document.getElementById('inc48')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc48')!.style.border = '3px solid black', 500);
        };
    };

    clickInc54() {
        if (this.sum54 == true) {
            document.getElementById('inc54')!.remove();
            document.getElementById('sum54')!.remove();
        } else if (this.sum54d == true) {
            document.getElementById('inc54')!.remove();
            document.getElementById('sum54d')!.remove();
        } else {
            document.getElementById('inc54')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc54')!.style.border = '3px solid black', 500);
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

    clickInc54d() {
        if (this.sum54d == true) {
            document.getElementById('inc54d')!.remove();
            document.getElementById('sum54d')!.remove();
        } else if (this.sum54 == true) {
            document.getElementById('inc54d')!.remove();
            document.getElementById('sum54')!.remove();
        } else {
            document.getElementById('inc54d')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('inc54d')!.style.border = '3px solid black', 500);
        };
    };

    clickSum1() {
        this.sum1 = true;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickSum2() {
        this.sum1 = false;
        this.sum2 = true;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickSum3() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = true;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickSum4() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = true;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickSum5() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = true;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickSum6() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = true;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickSum7() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = true;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickDiff1() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = true;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickDiff2() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = true;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickDiff3() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = true;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickDiff4() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = true;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickDiff5() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = true;
        this.diff6 = false;
        this.diff7 = false;
    };

    clickDiff6() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = true;
        this.diff7 = false;
    };

    clickDiff7() {
        this.sum1 = false;
        this.sum2 = false;
        this.sum3 = false;
        this.sum4 = false;
        this.sum5 = false;
        this.sum6 = false;
        this.sum7 = false;
        this.diff1 = false;
        this.diff2 = false;
        this.diff3 = false;
        this.diff4 = false;
        this.diff5 = false;
        this.diff6 = false;
        this.diff7 = true;
    };

    clickDiff() {
        if (this.diff1 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff1')!.remove();
        } else if (this.diff2 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff2')!.remove();
        } else if (this.diff3 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff3')!.remove();
        } else if (this.diff4 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff4')!.remove();
        } else if (this.diff5 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff5')!.remove();
        } else if (this.diff6 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff6')!.remove();
        } else if (this.diff7 == true) {
            document.getElementById('diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('diff')!.style.border = '3px solid black', 500);
            document.getElementById('diff7')!.remove();
        };
    };

    clickSum() {
        if (this.sum1 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum1')!.remove();
        } else if (this.sum2 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum2')!.remove();
        } else if (this.sum3 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum3')!.remove();
        } else if (this.sum4 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum4')!.remove();
        } else if (this.sum5 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum5')!.remove();
        } else if (this.sum6 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum6')!.remove();
        } else if (this.sum7 == true) {
            document.getElementById('sum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('sum')!.style.border = '3px solid black', 500);
            document.getElementById('sum7')!.remove();
        };
    };

    clickNum24() {
        this.num24 = true;
        this.num48 = false;
        this.num54 = false;
        document.getElementById('num24')!.style.backgroundColor = 'blue';
        document.getElementById('num48')!.style.backgroundColor = 'rgb(75, 73, 73)';
        document.getElementById('num54')!.style.backgroundColor = 'rgb(75, 73, 73)';
    };

    clickNum48() {
        this.num24 = false;
        this.num48 = true;
        this.num54 = false;
        document.getElementById('num48')!.style.backgroundColor = 'blue';
        document.getElementById('num54')!.style.backgroundColor = 'rgb(75, 73, 73)';
        document.getElementById('num24')!.style.backgroundColor = 'rgb(75, 73, 73)';
    };

    clickNum54() {
        this.num24 = false;
        this.num48 = false;
        this.num54 = true;
        document.getElementById('num54')!.style.backgroundColor = 'blue';
        document.getElementById('num48')!.style.backgroundColor = 'rgb(75, 73, 73)';
        document.getElementById('num24')!.style.backgroundColor = 'rgb(75, 73, 73)';
    };

    clickTd1() {
        if (this.num54 == true) {
            document.getElementById('td1')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd2() {
        if (this.num54 == true) {
            document.getElementById('td2')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd3() {
        if (this.num24 == true) {
            document.getElementById('td3')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd4() {
        if (this.num48 == true) {
            document.getElementById('td4')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd5() {
        if (this.num48 == true) {
            document.getElementById('td5')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd6() {
        if (this.num24 == true) {
            document.getElementById('td6')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd7() {
        if (this.num54 == true) {
            document.getElementById('td7')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd8() {
        if (this.num24 == true) {
            document.getElementById('td8')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd9() {
        if (this.num24 == true) {
            document.getElementById('td9')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd10() {
        if (this.num48 == true) {
            document.getElementById('td10')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd11() {
        if (this.num54 == true) {
            document.getElementById('td11')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd12() {
        if (this.num24 == true) {
            document.getElementById('td12')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd13() {
        if (this.num48 == true) {
            document.getElementById('td13')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd14() {
        if (this.num48 == true) {
            document.getElementById('td14')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd15() {
        if (this.num24 == true) {
            document.getElementById('td15')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd16() {
        if (this.num24 == true) {
            document.getElementById('td16')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd17() {
        if (this.num54 == true) {
            document.getElementById('td17')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd18() {
        if (this.num24 == true) {
            document.getElementById('td18')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd19() {
        if (this.num24 == true) {
            document.getElementById('td19')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd20() {
        if (this.num24 == true) {
            document.getElementById('td20')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd21() {
        if (this.num48 == true) {
            document.getElementById('td21')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd22() {
        if (this.num24 == true) {
            document.getElementById('td22')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd23() {
        if (this.num48 == true) {
            document.getElementById('td23')!.style.opacity = '0';
        } else alert('Неправильно!');
    };

    clickTd24() {
        if (this.num54 == true) {
            document.getElementById('td24')!.style.opacity = '0';
        } else alert('Неправильно!');
    };
}

