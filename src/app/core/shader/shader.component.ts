import { Component, Input } from '@angular/core';
import { MapPosition } from '../main-map/main-map.component';

@Component({
  selector: 'app-shader',
  templateUrl: './shader.component.html',
  styleUrls: ['./shader.component.scss']
})
export class ShaderComponent {
  @Input('ShaderPosition') shaderPosition!: MapPosition | undefined;
  @Input('ShowShader') showShader!:boolean;
}
