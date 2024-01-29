import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    clickButton() {
        if(document.getElementById('drop')!.style.display == 'block'){
            document.getElementById('drop')!.style.display = 'none';
        } else {
            document.getElementById('drop')!.style.display = 'block';
        };
    };
}