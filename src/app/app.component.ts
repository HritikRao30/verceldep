import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  password:string = "";
  instance = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  validChars: string = "";
  length: number = 0;
  generatePassword() {
    this.password = "";
    this.validChars = "";
    let nums = "0123456789";
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let symbols = "!@#$%^&*()";
    if (this.useLetters) {
      this.validChars += chars;
    }
    if (this.useNumbers) {
      this.validChars += nums;
    }
    if (this.useSymbols) {
      this.validChars += symbols;
    }
    for (let i = 0; i < this.length; i++){
      this.password += this.validChars[Math.floor(Math.random() * this.validChars.length)];
    }
  }

  triggerInput(){
    console.log("input event was triggered :", this.password);
  }

  changeLetters() {
    this.useLetters = !this.useLetters;
  }

  changeNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  changeSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  getLength(val: any) {
    let valInt = parseInt(val.target.value);
    if (!isNaN(valInt)) {
      this.length = valInt;
      console.log(this.length);
    }
    else {
      this.length = 0;
    }
  }

  disableButton() {
    if (this.length && (this.useLetters || this.useNumbers || this.useSymbols)) {
      return false;
    }
    return true;
  }

}
