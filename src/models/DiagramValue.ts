export default class DiagramValue {
  value: number;

  color: string;

  constructor(data: { value: number; color: string }) {
    this.value = data.value;
    this.color = data.color;
  }
}
