import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './component/select/select.component';
import { ShowComponent } from './component/show/show.component';
import { SelectMemberComponent } from './component/select/select-member/select-member.component';
import { ShowTimerComponent } from './component/show/show-timer/show-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ShowComponent,
    SelectMemberComponent,
    ShowTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
