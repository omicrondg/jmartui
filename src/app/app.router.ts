import {MainPageComponent} from './components/main-page/main-page.component';
import {DetailPageComponent} from './components/detail-page/detail-page.component';
import {LoginComponent} from './components/account/login/login.component';
import {ProfileComponent} from './components/account/profile/profile.component';

export const appRouter = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      name: 'MainPage'
    }
  },
  {
    path: 'dashboard',
    component: MainPageComponent,
    data: {
      name: 'MainPage'
    }
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent,
    data: {
      name: 'DetailPage'
    }
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
