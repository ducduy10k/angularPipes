import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { TopRecordPipe } from './top-record.pipe';

registerLocaleData(localeVi);

@NgModule({
  declarations: [AppComponent, TopRecordPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'vi-VN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
