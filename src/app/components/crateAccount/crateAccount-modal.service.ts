import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CrateAccountComponent} from './crateAccount.component';


@Injectable()
export class CrateAccountModalService {
    private isOpen = false;

    constructor(private modalService: NgbModal) {
    }

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const modalRef = this.modalService.open(CrateAccountComponent, {
            container: 'body'
        });
        modalRef.result.then((result) => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }
}
