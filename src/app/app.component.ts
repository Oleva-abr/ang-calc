
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-calc';

  calValue: number = 0;
  funcT: any = "NoFunction"
  calNumber: string = "noValue"
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    if (type == "number") {
      this.onNumberClick(val);
    } else if (type == "function") {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber !== "noValue") {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (val == "c") {
      this.clearAll();
    } else if (this.funcT == "NoFunction") {
      this.firstNumber = this.calValue;
      this.calNumber = "noValue"
      this.funcT = val;
    } else if (this.funcT !== "NoFunction") {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }

  }

  valueCalculate(val: string) {
    switch (this.funcT) {
      case "+":
        const additionTotal = this.firstNumber + this.secondNumber;
        this.totalAssignValue(additionTotal, val);
        break
      case "-":
        const subtractionTotal = this.firstNumber - this.secondNumber;
        this.totalAssignValue(subtractionTotal, val);
        break;
      case "*":
        const multiplicationTotal = this.firstNumber * this.secondNumber;
        this.totalAssignValue(multiplicationTotal, val);
        break;
      case "/":
        const divisionTotal = this.firstNumber / this.secondNumber;
        this.totalAssignValue(divisionTotal, val);
        break;
      case "%":
        const modulusTotal = this.firstNumber % this.secondNumber;
        this.totalAssignValue(modulusTotal, val);
        break;
      default:
        console.error("Invalid operation:", this.funcT);
    }
  }

  totalAssignValue(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = "noValue";
    this.funcT = val;
    if (val == "=") { this.onEqualPress() }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = "NoFunction";
    this.calNumber = "noValue"
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = "NoFunction";
    this.calNumber = "noValue";
  }
}




