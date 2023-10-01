export default class Currency {
  constructor (code, name) {
    if (typeof code !== 'string') throw new TypeError('code must be a string');
    if (typeof name !== 'string') throw new TypeError('name must be a string');

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') throw new TypeError('code must be a string');
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TtpeError('name must be a string');
    this._name = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
