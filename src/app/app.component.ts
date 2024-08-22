import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sliderApp';


  slideLeft(sliderId:string){
    console.log("left" + sliderId)
    const slider = document.getElementById(sliderId) as HTMLElement | null;
    if(slider){
      slider.scrollLeft -=500;
    }
  }

  slideRight(sliderId:string){
    console.log("right" + sliderId)
    const slider = document.getElementById(sliderId) as HTMLElement | null;
    if(slider){
      slider.scrollLeft +=500;
    }
  }
}
