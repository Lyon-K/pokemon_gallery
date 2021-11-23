import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  userData = {
    admin: "password",
    test: "test"
  }
  username: string = ''
  password: string = ''


  constructor(private router: Router) {}

  ngOnInit() {}

  clearInputs() {
    this.username = '';
    this.password = '';
  }

  tryLogin(): void {
    if(this.userData[this.username] === this.password){
      this.router.navigate(["pokemon-collection"]);
    }
    else if(this.userData[this.username]){
      alert("Wrong password");
      this.clearInputs();
    }
    else{
      alert("No matching user found, try registering.");
    }
  }

  tryRegister(): void{
    if(this.userData[this.username]) alert("This username had already been used!");
    else{
      if(this.password.length < 4 || /[^a-z0-9]/i.test(this.password)){
        alert("password must be alphanumeric and longer than 3 characters");
        this.clearInputs();
      }
      else{
        alert("Account created! Proceed to login.");
        this.userData[this.username] = this.password;
      }
    }
  }
}