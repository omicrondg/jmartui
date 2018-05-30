import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CreateReviewComponent} from './createReview.component';


@Injectable()
export class CreateReviewModalService {
    private isOpen = false;

    constructor(private modalService: NgbModal) {
    }

    open(id): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const modalRef = this.modalService.open(CreateReviewComponent, {
            container: 'body'
        });
        modalRef.result.then((result) => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        modalRef.componentInstance.id = id;
        return modalRef;
    }
}
