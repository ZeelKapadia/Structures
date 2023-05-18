import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';



@NgModule({
  declarations: [
    PhotoUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PhotoUploadComponent]
})
export class PhotoOperationModule { }
