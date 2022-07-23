import { Component } from '@angular/core';

@Component({
  selector: 'vii-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'viiCalc'
  inputDisplay: string = ''
  resultDisplay: string = ''
  operand1: number = 0
  operand2!: number
  operator: string = ''
  operatorSet = false

  keyPress(key:string) {
    if (key === '0') {
      if (this.inputDisplay === '') {
        return
      }
    }
    if (key === '.') {
      if (this.inputDisplay.includes('.')) {
        return
      }
    }
    if (key === '/' || key === '*' || key === '-' || key === '+') {
      const lastKey = this.inputDisplay[this.inputDisplay.length - 1]
      if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true
      }
      if ((this.operatorSet) || (this.inputDisplay === '')) {
        return
      }
      this.operand1 = parseFloat(this.inputDisplay)
      this.operator = key
      this.operatorSet = true

      console.log(`Operand one is ${this.operand1}`)
      console.log(`Operand two is ${this.operand2}`)
      console.log(`The operator is ${this.operator}`)
      console.log(`Operator set: ${this.operatorSet}`)

    }
    this.inputDisplay += key
  }

  clear() {
    this.inputDisplay = ''
    this.resultDisplay = ''
    this.operand1 = 0
    this.operand2 = 0
    this.operator = ''
    this.operatorSet = false
  }

  equals() {
    this.operand2 = parseFloat(this.inputDisplay.split(this.operator)[1])

    if (this.operator === "+") {
      this.resultDisplay = (this.operand1 + this.operand2).toString()
    }
    else if (this.operator === "+") {
      this.resultDisplay = (this.operand1 + this.operand2).toString()
    }
    else if (this.operator === "-") {
      this.resultDisplay = (this.operand1 - this.operand2).toString()
    }
    else if (this.operator === "*") {
      this.resultDisplay = (this.operand1 * this.operand2).toString()
    }
    else if (this.operator === "/") {
      this.resultDisplay = (this.operand1 / this.operand2).toString()
    }
    this.operand1 = parseFloat(this.resultDisplay)
    this.operatorSet = false
  }

}
