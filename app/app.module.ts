import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { GifModule } from "./gif/gif.module";

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        RouterModule,
        AppRoutingModule,
        GifModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})

export class AppModule { }