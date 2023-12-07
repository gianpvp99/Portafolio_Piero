import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import * as AOS from 'aos';
import { throttleTime} from 'rxjs/operators';
import { ScrollSpyService } from 'ng-spy';
declare var particlesJS: any; // Importa la biblioteca

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, AfterViewInit{
  public fixedHeader: boolean = false;
  private windowScroll$: Subscription = Subscription.EMPTY;
  
  constructor(private spyService: ScrollSpyService){}
  
  ngOnInit() {
      AOS.init()
      window.addEventListener('load',AOS.refresh);
      particlesJS('particles-js', {
        particles: {

          number: {
            value: 80,
            density: {
              enable:true,
              value_area:800
            }
          },
          color: {
            value: '#0025DA'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#0025DA'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 180,
            color: '#0025DA',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: '#b61924',
          background_image: '',
          background_position: '50% 50%',
          background_repeat: 'no-repeat',
          background_size: 'cover'
        }
      });

    this.windowScroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(30))
      .subscribe(() => this.onScroll());
  }

  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 50 });
    setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    // const loader = document.querySelector('.loader');
      if(preloader){
        preloader.classList.add('preloader-deactivate');
        // console.log('preloader',preloader)
      }
    },1000);

  }

  ngOnDestroy() {
    this.windowScroll$.unsubscribe();
  }
  
  onScroll(){
    //code to fix header on scroll
    if (document.documentElement.scrollTop >= 100 || document.body.scrollTop >= 100) {
      this.fixedHeader = true;
    } else {
      this.fixedHeader = false;
    }
  }
}
