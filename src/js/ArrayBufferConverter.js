export default class ArrayBufferConverter {
  constructor() {
    this.data = undefined;
  }

  load(buffer) {
    this.data = new Uint16Array(buffer);
  }

  toString() {
    return JSON.parse(String.fromCharCode.apply(null, this.data));
  }
}
