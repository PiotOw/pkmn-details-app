import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PikachuService {

  getHeightInPickachus(number: number): number {
    return Math.round((number / 4) * 100) / 100;
  }

  getWeightInPikachus(number: number): number {
    return Math.round((number / 60) * 100) / 100;
  }

  constructor() {
  }
}
