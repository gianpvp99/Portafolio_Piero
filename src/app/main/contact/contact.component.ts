import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { contactRegister } from 'src/app/interfaces/registerContact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public contactForm :FormGroup = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',Validators.pattern(/^\d{10}$/)),
    message: new FormControl('',Validators.required)
    
  });
  
  get PControls(): { [p: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  
  public showErrors:boolean = false;

  constructor(private formBuilder:FormBuilder, private contact:ContactService){}

  ngOnInit(): void {
    
  }

  register(){
    // const registerContact:contactRegister = {
    //   fullname: 'jeremy figort',
    //   email: 'jeremy@gmail.com',
    //   phone: '993448380',
    //   message: 'quiero tu servicio'
    // }
    this.showErrors = true;

    this.contact.registerContact(this.contactForm.value).subscribe(
      (res:any) => {
        console.log(res);
      }, (error:any) => {
        console.error(error);
      })
  }
}
