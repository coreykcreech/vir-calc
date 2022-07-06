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
  // operatorSet = false
  waitingForOperand2 = true

  numPress(num:string) {
    if (num === '0') {
      if (this.inputDisplay === '') {
        return
      }
    }
    if (num === '.') {
      if (this.mainDisplay.includes('.')) {
        return
      }
    }
    this.inputDisplay += num
    this.mainDisplay += num
  }

  operatorPress(op: string) {
    this.operator = op
    this.operand1 = parseFloat(this.mainDisplay)

    this.waitingForOperand2 = false
    console.log(this.operand1)
    console.log(this.operand2)
    console.log(this.operator)
  }

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
