import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ProgramsService} from '../../services/programs.service';
import {Program} from '../../services/program';
import {environment} from '../../../environments/environment.prod';
import {CreateReviewModalService} from './createReview/createReview-modal.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailPageComponent implements OnInit {

  id: number;
  result: any;
  programDerail: Program;
  tagListArray: Array<any>;

  constructor(private _activeRoute: ActivatedRoute,
              config: NgbRatingConfig,
              private _programsService: ProgramsService,
              private _createReviewModalService: CreateReviewModalService) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this._programsService.getProgramById(this.id).subscribe((res) => {
        this.programDerail = res;
        this.getTagList();
      });
    });
  }

  getTagList() {
    this.tagListArray = this.programDerail.tagList.split(';');
  }

  getImage(id) {
    return environment.server_api + 'api/pictures/' + id;
  }

  createReview(id: number) {
    this._createReviewModalService.open(id);
  }

}
