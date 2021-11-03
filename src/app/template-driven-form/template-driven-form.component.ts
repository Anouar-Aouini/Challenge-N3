import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { User } from './user.module';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  public  userModel = new User("Anouar","anoirawini1571@gmail.com","type",123456789,"02/02/2020","code123456")
  constructor() { }

  ngOnInit(): void {
  }
      onSubmit(userForm:NgForm){
        console.log("NgForm :", userForm);
        console.log("NgForm.value :",userForm.value)
     }

}
