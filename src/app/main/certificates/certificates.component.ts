import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { customOptionsSingle } from '../constant';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  public customOptionsSingle: OwlOptions = customOptionsSingle;
}
