import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-detail-slider',
  templateUrl: './detail-slider.component.html',
  styleUrls: ['./detail-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailSliderComponent implements OnInit {

  @Input() sliderInfo: any;
  public carouselOne: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

  getImage(id) {
    return environment.server_api + 'api/pictures/' + id;
  }

}
