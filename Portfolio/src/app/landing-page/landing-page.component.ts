import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { Slide } from './slider-component/slider-component.component';
interface SlideCategory {
  title: string;
  slides: Slide[]
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  sliderCategories: SlideCategory[];
  currentSlides: Slide[];

  scroll: any;
  elementsToShow: any;


  constructor() { }

  ngOnInit() {
    this.sliderCategories = [{
      title: "Category 1",
      slides: [
        { title: "Sample 1", link: "/assets/SampleWork/Call_center.PNG" }, 
{ title: "Sample 2", link: "/assets/SampleWork/Call_center_2.PNG" },  
{ title: "Sample 3", link: "/assets/SampleWork/Call_center_3.PNG" },                        
{ title: "Sample 4", link: "/assets/SampleWork/adkey-integration.PNG" },                   
{ title: "Sample 5", link: "/assets/SampleWork/adkey-sample-report.PNG" },    
{ title: "Sample 6", link: "/assets/SampleWork/mobile_version.PNG" },             
{ title: "Sample 7", link: "/assets/SampleWork/mobile_version_2.PNG" },          
{ title: "Sample 8", link: "/assets/SampleWork/desktop_version.PNG" },   
{ title: "Sample 9", link: "/assets/SampleWork/desktop_version_2.PNG" },                  
{ title: "Sample 10", link: "/assets/SampleWork/portfolio-media-view-sample.PNG" },
{ title: "Sample 11", link: "/assets/SampleWork/Portfolio_integration.PNG" },                            
{ title: "Sample 12", link: "/assets/SampleWork/portfolio.PNG" },
{ title: "Sample 13", link: "/assets/SampleWork/Portfolio_integration_2.PNG" },   
{ title: "Sample 14", link: "/assets/SampleWork/Portfolio_integration_4.PNG" },           
{ title: "Sample 15", link: "/assets/SampleWork/facebook-chat-integrationPNG.PNG" },        
{ title: "Sample 16", link: "/assets/SampleWork/sample-standaolone-form.PNG" },           
{ title: "Sample 17", link: "/assets/SampleWork/grid-front-end.PNG" },                      
{ title: "Sample 18", link: "/assets/SampleWork/signage-newsletter.PNG" }
      ],
    }, {
      title: "Category 2",
      slides: [
        { title: "Sample 1", link: "/assets/Images/149559.jpeg" },
        { title: "Sample 2", link: "/assets/Images/11.jpg" },
        { title: "Sample 3", link: "/assets/Images/mountain.jpeg" }
      ],
    },
    {
      title: "Category 3",
      slides: [
        { title: "Sample 1", link: "/assets/Images/11.jpg" },
        { title: "Sample 2", link: "/assets/Images/mountain.jpeg" },
        { title: "Sample 3", link: "/assets/Images/149559.jpg" }
      ],
    }];
    this.initSlider(this.sliderCategories[0]);

    // this.currentSlides = [
    //   { title: "Sample 1", link: "/assets/Images/mountain.jpeg" },
    //   { title: "Sample 2", link: "/assets/Images/11.jpg" },
    //   { title: "Sample 3", link: "/assets/Images/149559.jpg" }
    // ];

    this.setScroll();
  }

  initSlider(data: SlideCategory) {
    this.currentSlides = data.slides;
  }

  setCategory(category: SlideCategory) {
    this.currentSlides = category.slides;
  }

  intro(){
    window.location.href = "#intro";
  }

//SCROLL START
  setScroll() {
    //this.scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };
    //this.elementsToShow = document.querySelectorAll('.stars'); //Looks for all element that have class 'show-on-scroll'
    window.addEventListener('scroll', this.loop);

  }

  loop() {
    this.elementsToShow = document.querySelectorAll('[class*="stars"]'); //Looks for all element that have class 'show-on-scroll'
    
    this.elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    // Check if element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  }
//SROLL END


}
