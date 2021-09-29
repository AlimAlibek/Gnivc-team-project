import { makeAutoObservable } from 'mobx';
import _ from 'lodash';

import DiagramValue from '../models/DiagramValue';

class Diagrams {
  chartData: DiagramValue[] = [];

  constructor() {
    makeAutoObservable(this);

    this.setRandomData();
  }

  setRandomData() {
    _.times(4, (i) => {
      const randomValue = Math.round(Math.random() * 100);
      const randomColor = `#${Math.random().toString(16).slice(2, 8)}`;

      this.chartData.push(new DiagramValue({
        value: randomValue,
        color: randomColor,
      }));
    });
  }
}

export default new Diagrams();
