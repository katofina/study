import { Component } from "@angular/core";

@Component({
    selector: 'math4',
    templateUrl: './math-4.component.html',
    styleUrls: ['./../math-1/math-1.component.scss']
})

export class Math4 {
    img10Car = false;
    img11Car = false;
    img12Car = false;
    img13Car = false;
    img14Car = false;
    img15Car = false;
    img1Car = false;
    img2Car = false;
    img3Car = false;
    img4Car = false;
    img5Car = false;

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

    clickImg10Car() {
        this.img10Car = true;
        this.img11Car = false;
        this.img12Car = false;
        this.img13Car = false;
        this.img14Car = false;
        this.img15Car = false;
    };

    clickImg11Car() {
        this.img10Car = false;
        this.img11Car = true;
        this.img12Car = false;
        this.img13Car = false;
        this.img14Car = false;
        this.img15Car = false;
    };

    clickImg12Car() {
        this.img10Car = false;
        this.img11Car = false;
        this.img12Car = true;
        this.img13Car = false;
        this.img14Car = false;
        this.img15Car = false;
    };

    clickImg13Car() {
        this.img10Car = false;
        this.img11Car = false;
        this.img12Car = false;
        this.img13Car = true;
        this.img14Car = false;
        this.img15Car = false;
    };

    clickImg14Car() {
        this.img10Car = false;
        this.img11Car = false;
        this.img12Car = false;
        this.img13Car = false;
        this.img14Car = true;
        this.img15Car = false;
    };

    clickImg15Car() {
        this.img10Car = false;
        this.img11Car = false;
        this.img12Car = false;
        this.img13Car = false;
        this.img14Car = false;
        this.img15Car = true;
    };

    click10Count() {
        if (this.img10Car == true) {
            document.getElementById('img10Car')!.remove();
            document.getElementById('10count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10count')!.style.border = '3px solid black', 500);
        };
    };

    click11Count() {
        if (this.img11Car== true) {
            document.getElementById('img11Car')!.remove();
            document.getElementById('11count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11count')!.style.border = '3px solid black', 500);
        };
    };

    click12Count() {
        if (this.img12Car == true) {
            document.getElementById('img12Car')!.remove();
            document.getElementById('12count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12count')!.style.border = '3px solid black', 500);
        };
    };

    click13Count() {
        if (this.img13Car == true) {
            document.getElementById('img13Car')!.remove();
            document.getElementById('13count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13count')!.style.border = '3px solid black', 500);
        };
    };

    click14Count() {
        if (this.img14Car == true) {
            document.getElementById('img14Car')!.remove();
            document.getElementById('14count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14count')!.style.border = '3px solid black', 500);
        };
    };

    click15Count() {
        if (this.img15Car == true) {
            document.getElementById('img15Car')!.remove();
            document.getElementById('15count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15count')!.style.border = '3px solid black', 500);
        };
    };

    clickImg1Car() {
        this.img1Car = true;
        this.img2Car = false;
        this.img3Car = false;
        this.img4Car = false;
        this.img5Car = false;
    };

    clickImg2Car() {
        this.img1Car = false;
        this.img2Car = true;
        this.img3Car = false;
        this.img4Car = false;
        this.img5Car = false;
    };

    clickImg3Car() {
        this.img1Car = false;
        this.img2Car = false;
        this.img3Car = true;
        this.img4Car = false;
        this.img5Car = false;
    };

    clickImg4Car() {
        this.img1Car = false;
        this.img2Car = false;
        this.img3Car = false;
        this.img4Car = true;
        this.img5Car = false;
    };

    clickImg5Car() {
        this.img1Car = false;
        this.img2Car = false;
        this.img3Car = false;
        this.img4Car = false;
        this.img5Car = true;
    };

    click16Count() {
        if (this.img1Car == true) {
            document.getElementById('img16Car')!.remove();
            document.getElementById('16count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('16count')!.style.border = '3px solid black', 500);
        };
    };

    click17Count() {
        if (this.img2Car == true) {
            document.getElementById('img17Car')!.remove();
            document.getElementById('17count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('17count')!.style.border = '3px solid black', 500);
        };
    };

    click18Count() {
        if (this.img3Car == true) {
            document.getElementById('img18Car')!.remove();
            document.getElementById('18count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('18count')!.style.border = '3px solid black', 500);
        };
    };

    click19Count() {
        if (this.img4Car == true) {
            document.getElementById('img19Car')!.remove();
            document.getElementById('19count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('19count')!.style.border = '3px solid black', 500);
        };
    };

    click20Count() {
        if (this.img5Car == true) {
            document.getElementById('img20Car')!.remove();
            document.getElementById('20count')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('20count')!.style.border = '3px solid black', 500);
        };
        this.img5Car = false;
    };

    click7CountSum() {
        if (this.img1Car == true) {
            document.getElementById('img7CountCar')!.remove();
            document.getElementById('7countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7countSum')!.style.border = '3px solid black', 500);
        };
    };

    click10CountSum() {
        if (this.img2Car == true) {
            document.getElementById('img10CountCar')!.remove();
            document.getElementById('10countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('10countSum')!.style.border = '3px solid black', 500);
        };
    };

    click11CountSum() {
        if (this.img3Car == true) {
            document.getElementById('img11CountCar')!.remove();
            document.getElementById('11countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11countSum')!.style.border = '3px solid black', 500);
        };
    };

    click13CountSum() {
        if (this.img4Car == true) {
            document.getElementById('img13CountCar')!.remove();
            document.getElementById('13countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13countSum')!.style.border = '3px solid black', 500);
        };
    };

    click15CountSum() {
        if (this.img5Car == true) {
            document.getElementById('img15CountCar')!.remove();
            document.getElementById('15countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15countSum')!.style.border = '3px solid black', 500);
        };
        this.img5Car = false;
    };

    click11CCountSum() {
        if (this.img1Car == true) {
            document.getElementById('img11CCountCar')!.remove();
            document.getElementById('11ccountSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('11ccountSum')!.style.border = '3px solid black', 500);
        };
    };

    click12CountSum() {
        if (this.img2Car== true) {
            document.getElementById('img12CountCar')!.remove();
            document.getElementById('12countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('12countSum')!.style.border = '3px solid black', 500);
        };
    };

    click13CCountSum() {
        if (this.img3Car == true) {
            document.getElementById('img13CCountCar')!.remove();
            document.getElementById('13ccountSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('13ccountSum')!.style.border = '3px solid black', 500);
        };
    };

    click14CountSum() {
        if (this.img4Car == true) {
            document.getElementById('img14CountCar')!.remove();
            document.getElementById('14countSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('14countSum')!.style.border = '3px solid black', 500);
        };
    };

    click15CCountSum() {
        if (this.img5Car == true) {
            document.getElementById('img15CCountCar')!.remove();
            document.getElementById('15ccountSum')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('15ccountSum')!.style.border = '3px solid black', 500);
        };
        this.img5Car = false;
    };

    click4Diff() {
        if (this.img1Car == true) {
            document.getElementById('img4DiffCar')!.remove();
            document.getElementById('4Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('4Diff')!.style.border = '3px solid black', 500);
        };
    };

    click5Diff() {
        if (this.img2Car == true) {
            document.getElementById('img5DiffCar')!.remove();
            document.getElementById('5Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('5Diff')!.style.border = '3px solid black', 500);
        };
    };

    click6Diff() {
        if (this.img3Car == true) {
            document.getElementById('img6DiffCar')!.remove();
            document.getElementById('6Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('6Diff')!.style.border = '3px solid black', 500);
        };
    };

    click7Diff() {
        if (this.img4Car == true) {
            document.getElementById('img7DiffCar')!.remove();
            document.getElementById('7Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('7Diff')!.style.border = '3px solid black', 500);
        };
    };

    click8Diff() {
        if (this.img5Car == true) {
            document.getElementById('img8DiffCar')!.remove();
            document.getElementById('8Diff')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('8Diff')!.style.border = '3px solid black', 500);
        };
        this.img5Car = false;
    };

    clickDivFor10() {
        if (this.img1Car == true) {
            document.getElementById('count10')!.style.border = 'none';
            document.getElementById('divFor10')!.append(document.getElementById('count10')!);
            document.getElementById('divFor10')!.style.border! = "3px solid green";
        };
    };

    clickDivFor11() {
        if (this.img2Car == true) {
            document.getElementById('count11')!.style.border = 'none';
            document.getElementById('divFor11')!.append(document.getElementById('count11')!);
            document.getElementById('divFor11')!.style.border! = "3px solid green";
        };
    };

    clickDivFor12() {
        if (this.img3Car == true) {
            document.getElementById('count12')!.style.border = 'none';
            document.getElementById('divFor12')!.append(document.getElementById('count12')!);
            document.getElementById('divFor12')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor13() {
        if (this.img4Car == true) {
            document.getElementById('count13')!.style.border = 'none';
            document.getElementById('divFor13')!.append(document.getElementById('count13')!);
            document.getElementById('divFor13')!.style.border! = "3px solid green";
        };
    };

    clickDivFor14() {
        if (this.img5Car == true) {
            document.getElementById('count14')!.style.border = 'none';
            document.getElementById('divFor14')!.append(document.getElementById('count14')!);
            document.getElementById('divFor14')!.style.border! = "3px solid green"; 
        };
        this.img5Car = false;
    };

    clickDivFor16() {
        if (this.img1Car == true) {
            document.getElementById('count16')!.style.border = 'none';
            document.getElementById('divFor16')!.append(document.getElementById('count16')!);
            document.getElementById('divFor16')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor17() {
        if (this.img2Car == true) {
            document.getElementById('count17')!.style.border = 'none';
            document.getElementById('divFor17')!.append(document.getElementById('count17')!);
            document.getElementById('divFor17')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor18() {
        if (this.img3Car == true) {
            document.getElementById('count18')!.style.border = 'none';
            document.getElementById('divFor18')!.append(document.getElementById('count18')!);
            document.getElementById('divFor18')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor19() {
        if (this.img4Car == true) {
            document.getElementById('count19')!.style.border = 'none';
            document.getElementById('divFor19')!.append(document.getElementById('count19')!);
            document.getElementById('divFor19')!.style.border! = "3px solid green"; 
        };
    };

    clickDivFor20() {
        if (this.img5Car == true) {
            document.getElementById('count20')!.style.border = 'none';
            document.getElementById('divFor20')!.append(document.getElementById('count20')!);
            document.getElementById('divFor20')!.style.border! = "3px solid green"; 
        };
    };
}