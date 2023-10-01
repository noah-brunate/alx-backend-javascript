export default class Pricing {
  constructor(amount, currency) {
    if (!Number.isInteger(amount)) throw new TypeError('amount must be an integer');

    this._amount = amount;
    this._currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    if (!Number.isInteger(amount)) throw new TypeError('amount must be an integer');
    if (!Number.isInteger(conversionRate)) throw new TypeError('conversionRate must be an integer');

    return (amount * conversionRate);
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (!Number.isInteger(val)) throw new TypeError('amount must be an integer');
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    this._Currency = val;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
}
