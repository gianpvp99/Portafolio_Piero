import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesStore = [
      {
        id : 1,
        src: "assets/img/angular_brand.png",
        alt: "angular",
        title: "angular",
      },
      {
        id : 2,
        src: "assets/img/php_brand.png",
        alt: "php",
        title: "php",
      },
      {
        id : 3,
        src: "assets/img/laravel_brand.png",
        alt: "laravel",
        title: "laravel",
      },
      {
        id : 4,
        src: "assets/img/sql_brand.jpg",
        alt: "sql",
        title: "sql",
      },
      {
        id : 5,
        src: "assets/img/mysql_brand.png",
        alt: "mysql",
        title: "mysql",
      },
      {
        id : 6,
        src: "assets/img/reactjs_brand.png",
        alt: "reactjs",
        title: "reactjs",
      },
      {
        id : 7,
        src: "assets/img/netcore.png",
        alt: "netcore",
        title: "netcore",
      }
    ];
  }
}
