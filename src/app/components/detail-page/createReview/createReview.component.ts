import {Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateReviewService} from './createReview.service';


@Component({
  selector: 'app-crate-review',
  templateUrl: './createReview.component.html',
  styleUrls: [
    'createReview.css'
  ]
})
export class CreateReviewComponent implements OnInit {
  username: string;
  credentials: any;
  reviewForm: FormGroup;
  loginSuccess: boolean;
  showSpinner: boolean;
  id: number;

  constructor(private _fb: FormBuilder,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private _createReviewService: CreateReviewService) {
    this.credentials = {};
  }


  ngOnInit() {
    this.showSpinner = false;
    this.loginSuccess = false;
    this.reviewForm = this._fb.group({
      caption: ['', Validators.compose([Validators.required])],
      rating: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
    });

    this.reviewForm.setValue({
      caption: '',
      rating: '',
      content: ''
    });
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    const values = this.reviewForm.value;
    values.programId = this.id;
    this._createReviewService.createReview(values).subscribe(
      (res) => {
        this.reviewForm.reset();
        this.cancel();
      },
      (err) => {
      }
    );
  }
}
