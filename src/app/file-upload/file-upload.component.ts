import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  fileName = '';
  imageDataUrl:undefined|string = undefined;
  progress = 0;

  constructor(private http: HttpClient) {}

  callIncrementProgress(){
    if(this.progress < 100){
      console.log(this.progress);
      this.progress += 5;
      setTimeout(()=>this.callIncrementProgress(),250)
    }
  }

  onFileSelected(event:any) {

      const file:File = event.target.files[0];
      this.progress = 0;


      if (file) {

          this.fileName = file.name;
          
          this.callIncrementProgress();
          
          const reader = new FileReader();
          
          reader.onload = (e: any) => {
            this.imageDataUrl = e.target.result;
            console.log("this.imageDataUrl",this.imageDataUrl, event.target);
          }

          reader.readAsDataURL(file);

          const formData = new FormData();

          formData.append("thumbnail", file);
          console.log(file);
          
          //Get the user phone number

          // this.http.post('https://example.com/api/data', { name: 'John', age: 30 })
          // .subscribe(
          //   response => {
          //     console.log('Response received:', response);
          //   },
          //   error => {
          //     console.error('Error occurred:', error);
          //   }
          // );
      }
  }
}
