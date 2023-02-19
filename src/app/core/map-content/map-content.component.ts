import { Component } from '@angular/core';

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.scss']
})
export class MapContentComponent {

  
  printChild(event:any){
    console.log("event: ",event);
  }
}
