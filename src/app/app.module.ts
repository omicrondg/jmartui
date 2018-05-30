import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {NavSearchComponent} from './layout/navbar/nav-search/nav-search.component';
import {LoginComponent} from './layout/navbar/login/login.component';
import {LoginModalComponent} from './components/login/login.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {SliderComponent} from './components/main-page/slider/slider.component';
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';
import {RouterModule} from '@angular/router';
import {appRouter} from './app.router';
import {FiltesComponent} from './components/main-page/filtes/filtes.component';
import {WantDoComponent} from './components/main-page/filtes/want-do/want-do.component';
import {WhereComponent} from './components/main-page/filtes/where/where.component';
import {TimeFrameComponent} from './components/main-page/filtes/time-frame/time-frame.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WandDoService} from './components/main-page/filtes/want-do/wand-do.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {WhereService} from './components/main-page/filtes/where/where.service';
import {TimeFrameService} from './components/main-page/filtes/time-frame/time-frame.service';
import {MoreFiltersComponent} from './components/main-page/filtes/moreFilters/more-filters.component';
import {MoreFiltersModalService} from './components/main-page/filtes/moreFilters/more-filters-modal.service';
import {CauseComponent} from './components/main-page/filtes/cause/cause.component';
import {CauseService} from './components/main-page/filtes/cause/cause.service';
import {LocationComponent} from './components/main-page/filtes/location/location.component';
import {LocationService} from './components/main-page/filtes/location/location.service';
import {TimeOfYearComponent} from './components/main-page/filtes/time-of-year/time-of-year.component';
import {TimeOfYearService} from './components/main-page/filtes/time-of-year/time-of-year.service';
import {FrequencyComponent} from './components/main-page/filtes/frequency/frequency.component';
import {FrequencyService} from './components/main-page/filtes/frequency/frequency.service';
import {ProgtamOpenToComponent} from './components/main-page/filtes/progtam-open-to/progtam-open-to.component';
import {ProgramOpenToService} from './components/main-page/filtes/progtam-open-to/program-open-to.service';
import {EducationComponent} from './components/main-page/filtes/education/education.component';
import {EducationService} from './components/main-page/filtes/education/education.service';
import {AgeGroupComponent} from './components/main-page/filtes/age-group/age-group.component';
import {AgeGroupService} from './components/main-page/filtes/age-group/age-group.service';
import {OccupationComponent} from './components/main-page/filtes/occupation/occupation.component';
import {OccupationService} from './components/main-page/filtes/occupation/occupation.service';
import {GenderComponent} from './components/main-page/filtes/gender/gender.component';
import {GenderService} from './components/main-page/filtes/gender/gender.service';
import {ScholarshipsComponent} from './components/main-page/filtes/scholarships/scholarships.component';
import {ScholarshipsService} from './components/main-page/filtes/scholarships/scholarships.service';
import {MainPageService} from './components/main-page/main-page.service';
import {DataComponent} from './components/main-page/data/data.component';
import {DetailPageComponent} from './components/detail-page/detail-page.component';
import {DetailSliderComponent} from './components/detail-page/detail-slider/detail-slider.component';
import {DetailPageService} from './components/detail-page/detail-page.service';
import {DetailAccordionComponent} from './components/detail-page/detail-accordion/detail-accordion.component';
import {NotesComponent} from './components/detail-page/notes/notes.component';
import {CommentsComponent} from './components/detail-page/comments/comments.component';
import {FooterComponent} from './layout/footer/footer.component';
import {LoginComponent as SignIn} from './components/account/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './components/account/login/login.service';
import {LoginService as LoginPorupService} from './components/login/login.service';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import {ProgramsService} from './services/programs.service';
import {LoginModalService} from './components/login/login-modal.service';
import {CrateAccountComponent} from './components/crateAccount/crateAccount.component';
import {CrateAccountService} from './components/crateAccount/crateAccount.service';
import {CrateAccountModalService} from './components/crateAccount/crateAccount-modal.service';
import {EventsService} from './services/events.service';
import {IonRangeSliderModule} from 'ng2-ion-range-slider';
import {ProductApplyModalComponent} from './components/productApply/product-apply.component';
import {ProductApplyService} from './components/productApply/product-apply.service';
import {ProfileComponent} from './components/account/profile/profile.component';
import {BasicInfoComponent} from './components/account/profile/basic-info/basic-info.component';
import {PersonalInfoComponent} from './components/account/profile/personal-info/personal-info.component';
import {MoreInfoComponent} from './components/account/profile/more-info/more-info.component';
import {TokenInterceptor} from './services/token.interceptor';
import {AccordionModule, PopoverModule} from 'ngx-bootstrap';
import {UserDataComponent} from './components/main-page/user-data/user-data.component';
import {AuthorizedComponent} from './layout/navbar/authorized/authorized.component';
import {CreateReviewComponent} from './components/detail-page/createReview/createReview.component';
import {CreateReviewService} from './components/detail-page/createReview/createReview.service';
import {CreateReviewModalService} from './components/detail-page/createReview/createReview-modal.service';
import {AccountService} from './services/account.service';
import {LookingComponent} from './components/main-page/filtes/looking/looking.component';
import {LookingService} from './components/main-page/filtes/looking/looking.service';
import {OrganizationComponent} from './components/main-page/filtes/organization/organization.component';
import {OrganizationService} from './components/main-page/filtes/organization/organization.service';
import {NG_SELECT_DEFAULT_CONFIG, NgSelectModule} from '@ng-select/ng-select';
import {MatButtonModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavSearchComponent,
    LoginComponent,
    MainPageComponent,
    SliderComponent,
    FiltesComponent,
    WantDoComponent,
    OrganizationComponent,
    WhereComponent,
    TimeFrameComponent,
    MoreFiltersComponent,
    CauseComponent,
    LookingComponent,
    LocationComponent,
    TimeOfYearComponent,
    FrequencyComponent,
    ProgtamOpenToComponent,
    EducationComponent,
    AgeGroupComponent,
    OccupationComponent,
    GenderComponent,
    ScholarshipsComponent,
    DataComponent,
    DetailPageComponent,
    SignIn,
    DetailSliderComponent,
    DetailAccordionComponent,
    NotesComponent,
    CommentsComponent,
    FooterComponent,
    LoginModalComponent,
    CrateAccountComponent,
    CreateReviewComponent,
    ProductApplyModalComponent,
    ProfileComponent,
    BasicInfoComponent,
    PersonalInfoComponent,
    MoreInfoComponent,
    UserDataComponent,
    AuthorizedComponent],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    RouterModule.forRoot(appRouter),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLocalStorageModule.forRoot(),
    IonRangeSliderModule,
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    NgSelectModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  entryComponents: [MoreFiltersComponent, LoginModalComponent, CrateAccountComponent, CreateReviewComponent, ProductApplyModalComponent],
  providers: [
    WandDoService,
    OrganizationService,
    WhereService,
    TimeFrameService,
    MoreFiltersModalService,
    MoreFiltersComponent,
    LoginModalComponent,
    ProductApplyModalComponent,
    CrateAccountComponent,
    CreateReviewComponent,
    CauseService,
    LookingService,
    LocationService,
    TimeOfYearService,
    FrequencyService,
    ProgramOpenToService,
    EducationService,
    AgeGroupService,
    OccupationService,
    GenderService,
    ScholarshipsService,
    MainPageService,
    DetailPageService,
    LoginService,
    AccountService,
    ProgramsService,
    LoginPorupService,
    LoginModalService,
    ProductApplyService,
    CrateAccountService,
    CrateAccountModalService,
    CreateReviewService,
    CreateReviewModalService,
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'Custom not found'
      }
    }
  ],
  exports: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
