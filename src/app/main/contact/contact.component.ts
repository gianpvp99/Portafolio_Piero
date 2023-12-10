import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { contactRegister } from 'src/app/interfaces/registerContact.interface';
import { ContactService } from 'src/app/services/contact.service';
import  Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  public showErrors:boolean = false;
  public preloader:boolean = false;
  constructor(
    private fb:FormBuilder,
    private contact:ContactService,
    private renderer: Renderer2){
    
      this.contactForm = this.fb.group({
      fullname: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.required],
      message: ['',Validators.required]
    });
  }
  ngOnInit(): void {
    
  }
  
  register(){
    
    this.showErrors = true;
    if(this.contactForm.invalid){
      return;
    } 

    this.preloader = true;
    
    this.contact.registerContact(this.contactForm.value).subscribe(
      (res:any) => {
        
        if(res.state == 0){
          Swal.fire(
            'Advertencia',
            `${res.mensaje}, inténtelo en otro momento.`,
            'error'
          )
        }else {
          Swal.fire(
            'Registrado correctamente :)',
            'Nos comunicaremos con usted a través de su gmail en el transcurso del día!',
            'success'
          );
        }

        this.preloader = false;
      }, (error:any) => {

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Hubo un error interno en el servidor, intente en otro momento"
          });

          this.preloader = false;
      })
  }
}
