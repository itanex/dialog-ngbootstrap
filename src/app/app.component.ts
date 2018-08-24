import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-ngbootstrap';

  constructor(
    private modalService: NgbModal
  ) {

  }

  options: NgbModalOptions = {
    windowClass: 'side-panel'
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, this.options);
    modalRef.componentInstance.name = 'World';

  }
}
