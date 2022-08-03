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
  result!: number
  operator: string = ''
  operatorSet = false

  keyPress(key:string) {
    // Does not allow zero to begin the number in the calculator, else could have 0003 as a number, which is wrong.
    if (key === '0') {
      if (this.inputDisplay === '') {
        return
      }
    }
    // Checks to see if the input already has a decimal, if so do not allow another one.
    if (key === '.') {
      if (this.inputDisplay.includes('.')) {
        return
      }
    }
    if (key === '/' || key === '*' || key === '-' || key === '+') {
      const lastKey = this.inputDisplay[this.inputDisplay.length - 1]
      console.log(`The key is ${key}`)
      console.log(`The lastKey is ${lastKey}`)
      // If a number is pressed and the operator is chosen, does not allow new operator to be pressed.
      if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true
        console.log("Testing Operators")
        console.log(`The operator is ${this.operator}`)
      }
      if ((this.operatorSet) || (this.inputDisplay === '')) {
        this.operator = lastKey
        console.log(`The operator is ${this.operator}`)
        return
      }
      this.operand1 = parseFloat(this.inputDisplay)
      this.operator = key
      this.operatorSet = true
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

  // NOTE - Right now I cannot rapid fire equations. Ideally, code will take the result and set it to operand1 when
  // you press equals (currently does this). Then, the next input would be set to operand2. But, this is going to 
  // require a bit of change to the existing code to figure out if there was a result, which I started working on.

  // You can clear after each equation to start a new equation. But, that's not how it SHOULD work. This is an
  // improvement to story requirements, and as of right now the calculator works as requested.

  equals() {
    this.operand2 = parseFloat(this.inputDisplay.split(this.operator)[1])
    console.log(`Operand one is ${this.operand1}`)
    console.log(`Operand two is ${this.operand2}`)
    console.log(`The operator is ${this.operator}`)
    console.log(`Operator set: ${this.operatorSet}`)

    if (this.operator === "+") {
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
    this.operator = ""
    this.operatorSet = false
    // Separating the logs so I know where things are actually changing and how. This would be removed when finished.
    console.log(`SOLVED - Operand one is ${this.operand1}`)
    console.log(`SOLVED - Operand two is ${this.operand2}`)
    console.log(`SOLVED - The operator is ${this.operator}`)
    console.log(`SOLVED - Operator set: ${this.operatorSet}`)
  }


}