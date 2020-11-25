import { Component, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { passValidator } from './validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';
  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form  = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      firstname: ['', [Validators.required,Validators.minLength(4)]],
      secondname: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      cnfpass: ['', passValidator],
      
    });


    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.cnfpass.updateValueAndValidity()
    )
  }

  onReset(){

  }
  onRegister(){
    // console.log(this.form.controls.zip);

    window.location.href="http://w3schools.com"
  }
}
