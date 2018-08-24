import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.component.html'
})
export class NgbdModalContent implements OnInit {
  //@Input()
   bodyContent: string;

  constructor(public activeModal: NgbActiveModal) { 

    this.bodyContent = `
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Pellentesque mi leo</a>, blandit eu sapien id, porta imperdiet diam. Aenean consequat lacinia neque, eu semper orci <a href="#">maximus commodo</a>. Aliquam vitae tortor augue. Pellentesque tempor non orci vitae maximus. Curabitur ante turpis, imperdiet eu sagittis eu, pretium sit amet enim. Curabitur vitae turpis blandit, ultricies massa sit amet, feugiat mi. In eu lectus finibus, fringilla tellus in, cursus ipsum. Nam porta dictum neque in pharetra. Suspendisse viverra vitae tellus a hendrerit. Etiam ornare consequat sem at vulputate. Vivamus rhoncus, ipsum non facilisis auctor, libero purus accumsan sapien, dictum sollicitudin orci erat at ex. Vestibulum in risus est.
    </p>
    `
  }

  ngOnInit = () => {

  }
}
