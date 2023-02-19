import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

export interface MapDimensions{
  xpos:number;
  ypos:number;
  width:number;
  height:number;
}

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit{
  @ViewChild('map-image') mapImage!:ElementRef;
  
  mapDimensions?:MapDimensions;

  ngOnInit(): void {
    console.log("Map launched")
  }
  

  setMapDimensions(dimensions:MapDimensions){
    this.mapDimensions = dimensions;
  }
}

