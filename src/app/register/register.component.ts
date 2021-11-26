import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service : UserService,private toastr: ToastrService ,private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset()
  }

  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          this.router.navigateByUrl('/login');
        }else{
          res.errors.forEach(element=>{
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;
            
              default:
                this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err=>{
        console.log(err);
      }
    );
  }
}
