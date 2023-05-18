import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationCallComponent } from './pagination-call/pagination-call.component';



@NgModule({
  declarations: [
    PaginationCallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginationCallComponent]
})
export class PaginationModule { }
