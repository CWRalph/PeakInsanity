import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';

export interface MapPosition{
  x:number;
  y:number;
  width:number;
  height:number;
}

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit, AfterViewInit{
  @ViewChild('mapImage') mapImage!:ElementRef;
  @Output() mapPosition = new EventEmitter<MapPosition>();

  constructor(){}

  ngOnInit(): void {
    console.log("Map launched")
  }

  waitForNonZeroWidth(){
    const nativeChildElementHitbox = this.mapImage.nativeElement.getBoundingClientRect();
    if(nativeChildElementHitbox.width > 0){
      this.mapPosition.emit(
        {
          x:nativeChildElementHitbox.x,
          y:nativeChildElementHitbox.y,
          width: nativeChildElementHitbox.width,
          height:nativeChildElementHitbox.height,
        }
      )
    }
    else setTimeout(()=>this.waitForNonZeroWidth(),100);
  }

  ngAfterViewInit(): void {
    this.waitForNonZeroWidth();
  }
}

