import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerhardwareListService {
  private hardwares: string[] = ['CPU', 'GPU', 'RAM', 'MOTHERBOARD'];

  addHardware(hardware: string) {
    this.hardwares.push(hardware);
  }

  getHardwares(): string[] {
    return this.hardwares;
  }

  removeHardware(index: number) {
    if (index > -1) {
      this.hardwares.splice(index, 1);
    }
  }
}
