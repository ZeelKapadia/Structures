import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  selectedFileURL: any;
  selectedFilesURL: any;
  file: File;
  constructor() { }

  @ViewChild('fileInput') fileInput: ElementRef;

  ngOnInit(): void {
  }

  // For single File
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.readFile(this.file);
  }

  private readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const fileContent: string = e.target.result;
      localStorage.setItem('fileContent', fileContent)
      this.selectedFileURL = reader.result;
    };
    reader.readAsDataURL(file);
  }

  showImage() {
    console.log("here is a cursor");
    window.open(this.selectedFileURL, '_blank')
  }

  onDelete() {
    this.selectedFileURL = null;
    this.file = null
    this.fileInput.nativeElement.value = "";
    localStorage.removeItem('fileContent')
  }

  // For multiple File
  onMultiFilesSelected(event: any) {
    const files = event.target.files
    this.readFiles(files);
  }

  readFiles(files: File[]) {
    const reader = new FileReader();
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileContent: string = e.target.result;
        localStorage.setItem('fileContent', fileContent);
        this.selectedFilesURL = [...reader.result as string];
      };
      reader.readAsDataURL(file);
    }
  }

}
