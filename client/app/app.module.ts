// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// reference our app component
import { DashboardComponent } from './components/dashboard.component';

@NgModule({
    declarations: [ DashboardComponent ],
    imports: [ BrowserModule, FormsModule, HttpModule],
    providers: [],
    bootstrap: [ DashboardComponent ]
})

export class AppModule {}
