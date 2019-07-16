import { Component, OnInit, Input } from '@angular/core';

export interface Slide {
  title: String;
  link: String;
}

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})

export class SliderComponent implements OnInit {

  currentIndex: number = 0;
  @Input() dataSlides: Slide[] = [];

  constructor() { }

  ngOnInit() {
    // this.dataSlides = [
    //   { title: "Sample 1", link: "/assets/Images/mountain.jpeg" },
    //   { title: "Sample 2", link: "/assets/Images/11.jpg" },
    //   { title: "Sample 3", link: "/assets/Images/149559.jpg" }
    // ];
  }

  nextSlide() {
    this.currentIndex++;
  }

  previousSlide() {
    this.currentIndex--;
  }
}
