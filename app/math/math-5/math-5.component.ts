import { Component } from "@angular/core";

@Component({
    selector: 'math5',
    templateUrl: './math-5.component.html',
    styleUrls: ['./../math-1/math-1.component.scss']
})

export class Math5 {
    img10Dog = false;
    img11Dog = false;
    img12Dog = false;
    img13Dog = false;
    img16Dog = false;
    img17Dog = false;
    img1Dog = false;
    img2Dog = false;
    img3Dog = false;
    img4Dog = false;
    img5Dog = false;

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

    viewDiv12() {
        document.getElementById("div11")!.style.display = "none";
        document.getElementById("div12")!.style.display = "block";
    };

    clickImg10Dog() {
        this.img10Dog = true;
        this.img11Dog = false;
        this.img12Dog = false;
        this.img13Dog = false;
        this.img16Dog = false;
        this.img17Dog = false;
    };

    clickImg11Dog() {
        this.img10Dog = false;
        this.img11Dog = true;
        this.img12Dog = false;
        this.img13Dog = false;
        this.img16Dog = false;
        this.img17Dog = false;
    };

    clickImg12Dog() {
        this.img10Dog = false;
        this.img11Dog = false;
        this.img12Dog = true;
        this.img13Dog = false;
        this.img16Dog = false;
        this.img17Dog = false;
    };

    clickImg13Dog() {
        this.img10Dog = false;
        this.img11Dog = false;
        this.img12Dog = false;
        this.img13Dog = true;
        this.img16Dog = false;
        this.img17Dog = false;
    };

    clickImg16Dog() {
        this.img10Dog = false;
        this.img11Dog = false;
        this.img12Dog = false;
        this.img13Dog = false;
        this.img16Dog = true;
        this.img17Dog = false;
    };

    clickImg17Dog() {
        this.img10Dog = false;
        this.img11Dog = false;
        this.img12Dog = false;
        this.img13Dog = false;
        this.img16Dog = false;
        this.img17Dog = true;
    };

    click10Count() {
        if (this.img10Dog == true) {
            document.getElementById('img10Dog')!.remove();
            document.getElementById('10count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10count')!.style.border = '3px solid black', 500);
        };
    };

    click11Count() {
        if (this.img11Dog == true) {
            document.getElementById('img11Dog')!.remove();
            document.getElementById('11count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11count')!.style.border = '3px solid black', 500);
        };
    };

    click12Count() {
        if (this.img12Dog == true) {
            document.getElementById('img12Dog')!.remove();
            document.getElementById('12count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12count')!.style.border = '3px solid black', 500);
        };
    };

    click13Count() {
        if (this.img13Dog == true) {
            document.getElementById('img13Dog')!.remove();
            document.getElementById('13count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13count')!.style.border = '3px solid black', 500);
        };
    };

    click16Count() {
        if (this.img16Dog == true) {
            document.getElementById('img16Dog')!.remove();
            document.getElementById('16count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('16count')!.style.border = '3px solid black', 500);
        };
    };

    click17Count() {
        if (this.img17Dog == true) {
            document.getElementById('img17Dog')!.remove();
            document.getElementById('17count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('17count')!.style.border = '3px solid black', 500);
        };
        this.img17Dog = false;
    };

    click18Count() {
        if (this.img10Dog == true) {
            document.getElementById('img18Dog')!.remove();
            document.getElementById('18count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('18count')!.style.border = '3px solid black', 500);
        };
    };

    click19Count() {
        if (this.img11Dog == true) {
            document.getElementById('img19Dog')!.remove();
            document.getElementById('19count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('19count')!.style.border = '3px solid black', 500);
        };
    };

    click20Count() {
        if (this.img12Dog == true) {
            document.getElementById('img20Dog')!.remove();
            document.getElementById('20count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('20count')!.style.border = '3px solid black', 500);
        };
    };

    click21Count() {
        if (this.img13Dog == true) {
            document.getElementById('img21Dog')!.remove();
            document.getElementById('21count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('21count')!.style.border = '3px solid black', 500);
        };
    };

    click22Count() {
        if (this.img16Dog == true) {
            document.getElementById('img22Dog')!.remove();
            document.getElementById('22count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('22count')!.style.border = '3px solid black', 500);
        };
    };

    click23Count() {
        if (this.img17Dog == true) {
            document.getElementById('img23Dog')!.remove();
            document.getElementById('23count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('23count')!.style.border = '3px solid black', 500);
        };
    };

    clickImg1Dog() {
        this.img1Dog = true;
        this.img2Dog = false;
        this.img3Dog = false;
        this.img4Dog = false;
        this.img5Dog = false;
    };

    clickImg2Dog() {
        this.img1Dog = false;
        this.img2Dog = true;
        this.img3Dog = false;
        this.img4Dog = false;
        this.img5Dog = false;
    };

    clickImg3Dog() {
        this.img1Dog = false;
        this.img2Dog = false;
        this.img3Dog = true;
        this.img4Dog = false;
        this.img5Dog = false;
    };

    clickImg4Dog() {
        this.img1Dog = false;
        this.img2Dog = false;
        this.img3Dog = false;
        this.img4Dog = true;
        this.img5Dog = false;
    };

    clickImg5Dog() {
        this.img1Dog = false;
        this.img2Dog = false;
        this.img3Dog = false;
        this.img4Dog = false;
        this.img5Dog = true;
    };

    click6CountSum() {
        if (this.img1Dog == true) {
            document.getElementById('img6CountDog')!.remove();
            document.getElementById('6countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6countSum')!.style.border = '3px solid black', 500);
        };
    };

    click8CountSum() {
        if (this.img2Dog == true) {
            document.getElementById('img8CountDog')!.remove();
            document.getElementById('8countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8countSum')!.style.border = '3px solid black', 500);
        };
    };

    click10CountSum() {
        if (this.img3Dog == true) {
            document.getElementById('img10CountDog')!.remove();
            document.getElementById('10countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10countSum')!.style.border = '3px solid black', 500);
        };
    };

    click12CountSum() {
        if (this.img4Dog == true) {
            document.getElementById('img12CountDog')!.remove();
            document.getElementById('12countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12countSum')!.style.border = '3px solid black', 500);
        };
    };

    click14CountSum() {
        if (this.img5Dog == true) {
            document.getElementById('img14CountDog')!.remove();
            document.getElementById('14countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Dog = false;
    };

    click16CountSum() {
        if (this.img1Dog == true) {
            document.getElementById('img16CountDog')!.remove();
            document.getElementById('16countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('16countSum')!.style.border = '3px solid black', 500);
        };
    };

    click18CountSum() {
        if (this.img2Dog == true) {
            document.getElementById('img18CountDog')!.remove();
            document.getElementById('18countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('18countSum')!.style.border = '3px solid black', 500);
        };
    };

    click20CountSum() {
        if (this.img3Dog == true) {
            document.getElementById('img20CountDog')!.remove();
            document.getElementById('20countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('20countSum')!.style.border = '3px solid black', 500);
        };
    };

    click22CountSum() {
        if (this.img4Dog == true) {
            document.getElementById('img22CountDog')!.remove();
            document.getElementById('22countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('22countSum')!.style.border = '3px solid black', 500);
        };
    };

    click24CountSum() {
        if (this.img5Dog == true) {
            document.getElementById('img24CountDog')!.remove();
            document.getElementById('24countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('24countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Dog = false;
    };

    click10Diff() {
        if (this.img1Dog == true) {
            document.getElementById('img10DiffDog')!.remove();
            document.getElementById('10Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10Diff')!.style.border = '3px solid black', 500);
        };
    };

    click11Diff() {
        if (this.img2Dog == true) {
            document.getElementById('img11DiffDog')!.remove();
            document.getElementById('11Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11Diff')!.style.border = '3px solid black', 500);
        };
    };

    click12Diff() {
        if (this.img3Dog == true) {
            document.getElementById('img12DiffDog')!.remove();
            document.getElementById('12Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12Diff')!.style.border = '3px solid black', 500);
        };
    };

    click13Diff() {
        if (this.img4Dog == true) {
            document.getElementById('img13DiffDog')!.remove();
            document.getElementById('13Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13Diff')!.style.border = '3px solid black', 500);
        };
    };

    click14Diff() {
        if (this.img5Dog == true) {
            document.getElementById('img14DiffDog')!.remove();
            document.getElementById('14Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14Diff')!.style.border = '3px solid black', 500);
        };
        this.img5Dog = false;
    };

    clickDivFor20() {
        if (this.img1Dog == true) {
            document.getElementById('count20')!.style.border = 'none';
            document.getElementById('divFor20')!.append(document.getElementById('count20')!);
            document.getElementById('divFor20')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor21() {
        if (this.img2Dog == true) {
            document.getElementById('count21')!.style.border = 'none';
            document.getElementById('divFor21')!.append(document.getElementById('count21')!);
            document.getElementById('divFor21')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor22() {
        if (this.img3Dog == true) {
            document.getElementById('count22')!.style.border = 'none';
            document.getElementById('divFor22')!.append(document.getElementById('count22')!);
            document.getElementById('divFor22')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor23() {
        if (this.img4Dog == true) {
            document.getElementById('count23')!.style.border = 'none';
            document.getElementById('divFor23')!.append(document.getElementById('count23')!);
            document.getElementById('divFor23')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor24() {
        if (this.img5Dog == true) {
            document.getElementById('count24')!.style.border = 'none';
            document.getElementById('divFor24')!.append(document.getElementById('count24')!);
            document.getElementById('divFor24')!.style.border! = "3px solid green"; 
        };
        this.img5Dog = false;
    };

    clickDivFor25() {
        if (this.img1Dog == true) {
            document.getElementById('count25')!.style.border = 'none';
            document.getElementById('divFor25')!.append(document.getElementById('count25')!);
            document.getElementById('divFor25')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor26() {
        if (this.img2Dog == true) {
            document.getElementById('count26')!.style.border = 'none';
            document.getElementById('divFor26')!.append(document.getElementById('count26')!);
            document.getElementById('divFor26')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor27() {
        if (this.img3Dog == true) {
            document.getElementById('count27')!.style.border = 'none';
            document.getElementById('divFor27')!.append(document.getElementById('count27')!);
            document.getElementById('divFor27')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor28() {
        if (this.img4Dog == true) {
            document.getElementById('count28')!.style.border = 'none';
            document.getElementById('divFor28')!.append(document.getElementById('count28')!);
            document.getElementById('divFor28')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor29() {
        if (this.img5Dog == true) {
            document.getElementById('count29')!.style.border = 'none';
            document.getElementById('divFor29')!.append(document.getElementById('count29')!);
            document.getElementById('divFor29')!.style.border! = "3px solid green"; 
        };
    };
}