import { Component } from '@angular/core';

@Component({
  selector: 'vii-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'viiCalc'
  inputDisplay: string = ''
  mainDisplay: string = ''
  operand1: number = 0
  operand2!: number
  operator: string = ''
  operatorSet = false
  // lastKey = this.inputDisplay[this.inputDisplay.length - 1]


  keyPress(key:string) {
    const lastKey = this.inputDisplay[this.inputDisplay.length - 1]
    if (lastKey === '+' || lastKey === '-' || lastKey === '*' || lastKey === '/') {
      this.operator = key
      this.operatorSet = true
      this.operand1 = parseFloat(this.inputDisplay)
      console.log(this.operand1)
    }
    if (key === '0') {
      if (this.inputDisplay === '') {
        return
      }
    }
    if (key === '.') {
      if (this.mainDisplay.includes('.')) {
        return
      }
    }
    if (this.operatorSet = true) {
      this.operand2 = parseFloat(this.inputDisplay.split(this.operator)[1])}
      this.inputDisplay += key
      this.mainDisplay += key
      console.log(this.operand1)
      console.log(this.operand2)
    }

  // operatorPress(op: string) {
  //   const lastKey = this.inputDisplay[this.inputDisplay.length - 1]

  //   if (lastKey === '+' || lastKey === '-' || lastKey === '*' || lastKey === '/') {
  //     this.operator = op
  //     this.operatorSet = true
  //   }

  //   this.operand1 = parseFloat(this.mainDisplay)
  //   this.operatorSet = true

  //   console.log(this.operand1)
  //   console.log(this.operand2)
  //   console.log(this.operator)
  // }

  clear() {
    this.inputDisplay = ''
    this.mainDisplay = ''
    this.operand1 = 0;
    this.operator = ''
    console.log(this.operand1)
    console.log(this.operand2)
    console.log(this.operator)
  }

}
