import {FilterDataItem} from './filtes/FilterDataItem';

export class MainPageRequestResource {

  // fitler list.
  filters: FilterDataItem[];

  // for pager.
  offset: number;
}
