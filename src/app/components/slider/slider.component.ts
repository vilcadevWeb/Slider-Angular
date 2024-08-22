import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  // @Input() num!:number;

  // @Output() slideLeft = new EventEmitter<string>();
  // @Output() slideRight = new EventEmitter<string>();

  num = input.required<number>();

  slideLeft = output<string>();
  slideRight = output<string>();


  emitSlideLeft() {
    this.slideLeft.emit(`slider${this.num}`)
  }

  emitSlideRight() {
    this.slideRight.emit(`slider${this.num}`)
  }

  myItems: any [] = [
    {  path: '/assets/imgs/1.jpg' },
    { path: '/assets/imgs/2.png' },
    { path: '/assets/imgs/3.png' },
    {  path: '/assets/imgs/4.jpeg' },
    { path: '/assets/imgs/5.jpeg' },
    {  path: '/assets/imgs/6.jpeg' },

    { path: '/assets/imgs/7.jpg' },

    { path: '/assets/imgs/1.jpg' },


  ];


}
