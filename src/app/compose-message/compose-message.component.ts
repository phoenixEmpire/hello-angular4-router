import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
  animations: [slideInDownAnimation]
})
export class ComposeMessageComponent implements OnInit {

  @HostBinding('@routeAnimation')
  routeAnimation = true;
  @HostBinding('style.display')
  display = 'block';
  @HostBinding('style.position')
  position = 'absolute';

  details: string;
  sending = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // 清除第二路由
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
