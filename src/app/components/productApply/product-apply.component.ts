import {Component, AfterViewInit, OnInit, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountModel} from '../account/login/Account';
import {AccountService} from '../../services/account.service';


@Component({
  selector: 'app-product-apply-popup',
  templateUrl: './product-apply.component.html',
  styleUrls: [
    'product-apply.css'
  ]
})
export class ProductApplyModalComponent implements AfterViewInit, OnInit {

  applyForm: FormGroup;
  account: AccountModel;

  @Input() data: any;

  constructor(private modalService: NgbModal,
              private _fb: FormBuilder,
              private _accountService: AccountService) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {

    this.account = this._accountService.getAccount();
    this.applyForm = this._fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      emailConfirm: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      citizenship: ['', Validators.compose([Validators.required])],
      questions: ['', Validators.compose([Validators.required])],
    });

    this.applyForm.setValue({
      firstName: this.account.firstName,
      lastName: this.account.lastName,
      email: this.account.email,
      emailConfirm: this.account.email,
      phone: this.account.phoneNumber,
      country: this.account.country,
      city: this.account.city,
      citizenship: '',
      questions: '',
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    const values = this.applyForm.value;
  }

}
