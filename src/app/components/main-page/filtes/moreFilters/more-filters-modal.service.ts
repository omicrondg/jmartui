import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { MoreFiltersComponent } from './more-filters.component';

@Injectable()
export class MoreFiltersModalService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
    ) {}

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const modalRef = this.modalService.open(MoreFiltersComponent, {
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
