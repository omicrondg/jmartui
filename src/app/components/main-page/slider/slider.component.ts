import {Component, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  isLogin: boolean;
  public carouselOne: NgxCarousel;

  constructor(private _eventsService: EventsService, private cdr: ChangeDetectorRef) {
    _eventsService.listen("isLogin").subscribe(data=>{
      this.isLogin = data.data as boolean;
      this.cdr.detectChanges();
     });
   }

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

  public getPersonalResults(event: Event){
    
  }
}
