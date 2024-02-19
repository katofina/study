import { Component } from "@angular/core";

@Component({
    selector: 'russian36',
    templateUrl: './russian-36.component.html',
    styleUrls: ['../russian-1/russian-1.component.scss']
})

export class Russian36 {
    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "flex";
    };

    viewDiv3() {
        document.getElementById("div2")!.style.display = "none";
        document.getElementById("div3")!.style.display = "flex";
    };

    viewDiv4() {
        document.getElementById("div3")!.style.display = "none";
        document.getElementById("div4")!.style.display = "flex";
    };

    viewDiv5() {
        document.getElementById("div4")!.style.display = "none";
        document.getElementById("div5")!.style.display = "flex";
    }

    viewDiv6() {
        document.getElementById("div5")!.style.display = "none";
        document.getElementById("div6")!.style.display = "flex";
    };

    viewDiv7() {
        document.getElementById("div6")!.style.display = "none";
        document.getElementById("div7")!.style.display = "flex";
    };

    viewDiv8() {
        document.getElementById("div7")!.style.display = "none";
        document.getElementById("div8")!.style.display = "flex";
    };

    viewDiv9() {
        document.getElementById("div8")!.style.display = "none";
        document.getElementById("div9")!.style.display = "flex";
    };

    viewDiv10() {
        document.getElementById("div9")!.style.display = "none";
        document.getElementById("div10")!.style.display = "flex";
    };

    viewDiv11() {
        document.getElementById("div10")!.style.display = "none";
        document.getElementById("div11")!.style.display = "flex";
    };

    viewDiv12() {
        document.getElementById("div11")!.style.display = "none";
        document.getElementById("div12")!.style.display = "flex";
    };

    viewDiv13() {
        document.getElementById("div12")!.style.display = "none";
        document.getElementById("div13")!.style.display = "flex";
    };

    viewDiv14() {
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "flex";
    };

    viewDiv15() {
        document.getElementById("div14")!.style.display = "none";
        document.getElementById("div15")!.style.display = "flex";
    };

    viewDiv16() {
        document.getElementById("div15")!.style.display = "none";
        document.getElementById("div16")!.style.display = "flex";
    };

    viewDiv17() {
        document.getElementById("div16")!.style.display = "none";
        document.getElementById("div17")!.style.display = "flex";
    };

    viewDiv18() {
        document.getElementById("div17")!.style.display = "none";
        document.getElementById("div18")!.style.display = "flex";
    };

    viewDiv19() {
        document.getElementById("div18")!.style.display = "none";
        document.getElementById("div19")!.style.display = "flex";
    };

    viewDiv20() {
        document.getElementById("div19")!.style.display = "none";
        document.getElementById("div20")!.style.display = "flex";
    };

    viewDiv21() {
        document.getElementById("div20")!.style.display = "none";
        document.getElementById("div21")!.style.display = "flex";
    };

    viewDiv22() {
        document.getElementById("div21")!.style.display = "none";
        document.getElementById("div22")!.style.display = "flex";
    };

    viewDiv23() {
        document.getElementById("div22")!.style.display = "none";
        document.getElementById("div23")!.style.display = "flex";
    };

    viewDiv24() {
        document.getElementById("div23")!.style.display = "none";
        document.getElementById("div24")!.style.display = "flex";
    };

    checkInp1() {
        let check = 0;
        const arr1 = ['й', 'х', 'ц', 'ч', 'зс', 'н', 'гк', 'бп', 'м', 'еэ', 'ая', 'оё', 'ую', 'иы', 'р', 'л', 'жш', 'дт', 'вф', 'ь'];
        const arr2 = document.getElementById('div2')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        
        setTimeout(() => {if (check == 20) {
            this.viewDiv3();
        } else alert('Исправьте ошибки!')})
    };

    addEvent1() {
        const imgs1 = document.getElementById('divIm1')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm2')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['d1','d2','d3'];
        const arrAlts = ['melon' ,'tree', 'dolphin','house','woodpecker','dragon','child','radish','forgetMeNot',
        'bucket','panda','jellyfish','sunflower', 'leopard','camel','grapes','iodine','cycle'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if ((index === 0 && index2 < 7) || (index === 1 && index2 > 6 && index2 < 13) ||
                (index === 2 && index2 > 12)) {
                    target2.style.border = '3px solid green';
                    setTimeout(() => target2.style.border = '1px solid black', 200)
                    target.remove();
                };
        })});

        imgs2.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent2() {
        const imgs1 = document.getElementById('divIm3')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm4')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['a','a2','a3'];
        const arrAlts = ['bus' ,'watermelon', 'aloe','stork','orange','sofa','loaf','giraffe','crane','dragon',
        'cactus','grapes','cuckoo','squirrel','hyena', 'blackberry','barrel'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if ((index === 0 && index2 < 5) || (index === 1 && index2 > 4 && index2 < 12)
                || (index === 2 && index2 > 11)) {
                    target2.style.border = '3px solid green';
                    setTimeout(() => target2.style.border = '1px solid black', 200)
                    target.remove();
                };
        })});

        imgs2.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent3() {
        const imgs1 = document.getElementById('divIm5')!.querySelectorAll('img')!;
        const imgs2 = document.getElementById('divIm6')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts1 = ['yi','yi2'];
        const arrAlts = ['moose' ,'pour', 'horse','goose','coat','eat','drive','eating','driving'];

        imgs1.forEach(function(img) {
            img.addEventListener('click', (event) => {
                let target2 = event.target as HTMLElement;
                let alt = target2.getAttribute('alt');
                let index = arrAlts1.indexOf(alt!);
                if ((index === 0 && index2 < 5) || (index === 1 && index2 > 4)) {
                    target2.style.border = '3px solid green';
                    setTimeout(() => target2.style.border = '1px solid black', 200)
                    target.remove();
                };
        })});

        imgs2.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent4() {
        const divs = document.getElementById('div9')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div9')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['p', 'o', 'd', 'yi', 'yo', 'm', 'n', 'i', 'k'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent5() {
        const divs = document.getElementById('div12')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div12')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['v', 'z', 'yi', 'e', 'r', 'o', 'sh', 'e2', 'n', 'n2', 'y', 'i'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 3) && (index2 == 7)) || ((index1 == 7) && (index2 == 3))
                || ((index1 == 8) && (index2 == 9)) || ((index1 == 9) && (index2 == 8))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent6() {
        const divs = document.getElementById('div15')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div15')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['s', 'iye', 'e', 'd', 'o', 'b', 'n', 'eiy', 'y'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent7() {
        const divs = document.getElementById('div18')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div18')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['n', 'e', 's', 'iye', 'e2', 'd', 'o', 'b', 'n2', 'eiy', 'y'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if ((index1 == index2) || ((index1 == 1) && (index2 == 4)) || ((index1 == 4) && (index2 == 1))
                || ((index1 == 0) && (index2 == 8)) || ((index1 == 8) && (index2 == 0))) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    addEvent8() {
        const divs = document.getElementById('div21')!.getElementsByClassName('divInDiv');
        const imgs = document.getElementById('div21')!.querySelectorAll('img')!;
        let index2: any;
        let target: HTMLElement;
        const arrAlts = ['o', 'b', 'yi', 'e', 'd', 'a', 'yu', 't'];

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', (event) => {
                let target1 = event.target as HTMLElement;
                let index1 = i;
                if (index1 == index2) {
                    target.style.border = 'none';
                    target1.parentElement!.style.border = '3px solid green';
                    target1.append(target);
                };
        })
        };

        imgs.forEach(function(img) {
            img.addEventListener('click', (event) => {
                target = event.target as HTMLElement;
                let alt = target.getAttribute('alt');
                index2 = arrAlts.indexOf(alt!);
        })});
    };

    checkInp2() {
        let check = 0;
        const arr1 = ['съел', 'сел', 'съем', 'семь', 'въезд', 'выезд', 'подъём', 'подъем', 'объём', 'объем', 'семья', 'бьёт'];
        const arr2 = document.getElementById('div22')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        
        setTimeout(() => {if (check == 12) {
            this.viewDiv23();
        } else alert('Исправьте ошибки!')})
    };

    checkInp3() {
        let check = 0;
        const arr1 = ['мальчик', 'восемь', 'пять', 'шесть', 'семь', 'девять', 'десять', 'деревья'];
        const arr2 = document.getElementById('div24')!.querySelectorAll('input');
        const arr3: string[] = [];
        arr2.forEach (function(el) {
            arr3.push(el.value.toLowerCase());
        })
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] == arr3[i]) {
                arr2[i].parentElement!.style.border = '3px solid green';
                check++;
            } else {
                arr2[i].parentElement!.style.border = '3px solid red';
            };
        };
        
        setTimeout(() => {if (check == 8) {
            alert('Правильно.');
        } else alert('Исправьте ошибки!')});
    };
}