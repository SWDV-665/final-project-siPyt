import { Component } from '@angular/core';

@Component({
  selector: 'app-ohms-law',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  voltage!: number;
  current!: number;
  resistance!: number;
  result!: string;

  constructor() {}

  calculateVoltage() {
    if (this.current && this.resistance) {
      this.voltage = this.current * this.resistance;
      this.result = `Voltage (V) = ${this.voltage} V`;
    } else {
      this.result = 'Please enter both Current (I) and Resistance (R).';
    }
  }

  calculateCurrent() {
    if (this.voltage && this.resistance) {
      this.current = this.voltage / this.resistance;
      this.result = `Current (I) = ${this.current} A`;
    } else {
      this.result = 'Please enter both Voltage (V) and Resistance (R).';
    }
  }

  calculateResistance() {
    if (this.voltage && this.current) {
      this.resistance = this.voltage / this.current;
      this.result = `Resistance (R) = ${this.resistance} Ω`;
    } else {
      this.result = 'Please enter both Voltage (V) and Current (I).';
    }
  }
}
