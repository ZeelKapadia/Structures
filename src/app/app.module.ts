import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceCallingModule } from './service-calling/service-calling.module';
import { PaginationModule } from './pagination/pagination.module';
import { FormsModules } from './forms-module/forms-module.module';
import { MultipleDropdownSelectWithCacheModule } from './multiple-dropdown-select-with-cache/multiple-dropdown-select-with-cache.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoOperationModule } from './photo-operation/photo-operation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceCallingModule,
    PaginationModule,
    FormsModules,
    MultipleDropdownSelectWithCacheModule,
    BrowserAnimationsModule,
    PhotoOperationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
