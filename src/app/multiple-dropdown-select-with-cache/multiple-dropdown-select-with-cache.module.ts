import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './cache/state/product.state';


@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxsModule.forRoot([ProductState])
  ],
  exports: [
    MultiSelectComponent
  ]
})
export class MultipleDropdownSelectWithCacheModule { }
