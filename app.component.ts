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
      const lastKey = this.inputDisplay[this.inputDisplay.length - 1];
      if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.inputDisplay === '')) {
        return;
      }
      this.operand1 = parseFloat(this.inputDisplay);
      this.operator = key;
      this.operatorSet = true;

      console.log(`Operand one is ${this.operand1}`)
      console.log(`Operand two is ${this.operand2}`)
      console.log(`The operator is ${this.operator}`)
      console.log(`Operator set: ${this.operatorSet}`)

    }
    this.inputDisplay += key;

    console.log(this.operand1)
    console.log(this.operand2)
    console.log(this.operator)
    console.log(this.operatorSet)

  }

    // const lastKey = this.inputDisplay[this.inputDisplay.length - 1]
    // console.log(lastKey)
    // if (lastKey === '+' || lastKey === '-' || lastKey === '*' || lastKey === '/') {
    //   this.operator = key
    //   this.operatorSet = true
    //   this.operand1 = parseFloat(this.inputDisplay)
    //   console.log(this.operand1)
    // }
    // if (key === '0') {
    //   if (this.inputDisplay === '') {
    //     return
    //   }
    // }
    // if (key === '.') {
    //   if (this.resultDisplay.includes('.')) {
    //     return
    //   }


    // if (this.operatorSet = true) {
      //   // this.resultDisplay = '';
    //   this.inputDisplay += key;
    //   // this.resultDisplay += key;
    // }

  // operatorPress(op: string) {
  //   const lastKey = this.inputDisplay[this.inputDisplay.length - 1]

  //   if (lastKey === '+' || lastKey === '-' || lastKey === '*' || lastKey === '/') {
  //     this.operator = op
  //     this.operatorSet = true
  //   }

  //   this.operand1 = parseFloat(this.resultDisplay)
  //   this.operatorSet = true

  //   console.log(this.operand1)
  //   console.log(this.operand2)
  //   console.log(this.operator)
  // }

  clear() {
    this.inputDisplay = ''
    this.resultDisplay = ''
    this.operand1 = 0;
    this.operator = ''
    console.log(this.operand1)
    console.log(this.operand2)
    console.log(this.operator)
  }

}
