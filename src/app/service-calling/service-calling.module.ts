import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './service-call/services.component';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ServicesComponent]
})
export class ServiceCallingModule { }
