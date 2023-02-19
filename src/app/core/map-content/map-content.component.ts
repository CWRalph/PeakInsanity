import { Component } from '@angular/core';
import { MapPosition } from '../main-map/main-map.component';

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.scss']
})
export class MapContentComponent {
  showShader = false;
  shaderPosition?:MapPosition;
  
  printChild(event:MapPosition){
    console.log("event: ",event);
    this.shaderPosition = event;
    this.showShader = true;
  }
}
