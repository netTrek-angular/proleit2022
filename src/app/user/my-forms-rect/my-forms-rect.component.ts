import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'proleit-my-forms-rect',
  templateUrl: './my-forms-rect.component.html',
  styleUrls: ['./my-forms-rect.component.scss']
})
export class MyFormsRectComponent implements OnInit {
  myForm!: FormGroup;
  username!: FormControl;
  email!: FormControl;
  personalInfo!: FormGroup;
  msg!: FormControl;

  constructor( private readonly fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.username = new FormControl( '', [
    //   Validators.required, Validators.minLength ( 3 )
    // ] );
    // this.email = new FormControl( '', [
    //   Validators.required, Validators.email
    // ] );
    // this.msg = new FormControl( '' );
    //
    // this.personalInfo = new FormGroup( { name: this.username, email: this.email } );
    //
    // this.myForm = new FormGroup( {
    //   personalInfo: this.personalInfo, msg: this.msg } );

    this.myForm = this.fb.group( {
      personalInfo: this.fb.group( {
        name: ['', [Validators.required, Validators.minLength ( 3 )] ],
        email: ['', [Validators.required, Validators.email ] ],
      }),
      msg: [ '' ]
    });

    this.username = this.myForm.get ( ['personalInfo', 'name'] ) as FormControl;
    this.email = this.myForm.get ( ['personalInfo', 'email'] ) as FormControl ;
    this.msg = this.myForm.get ( ['msg'] ) as FormControl ;
    this.personalInfo = this.myForm.get ( ['personalInfo'] ) as FormGroup ;
  }

}
