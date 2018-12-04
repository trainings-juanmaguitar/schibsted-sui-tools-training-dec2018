### ValueObject

It represents a simple object that represents a simple business concept or value **whose equality is not based on identity but in its value**. That means that two objects are equal when they have the same value but they're not necessarily the same object. For example, the coordinates of a graph, money or date, could be represented using ValueObjects.

**ValueObjects must be immutable.** Two ValueObject created equally must remain equal.

A ValueObject must implement at least two methods:
* `constructor()`, that instantiate the entity setting its properties
* `toJSON()`, that returns a plain representation of the Value Object. This plain object could be passed to its factory in order to create the same ValueObject.

You could also create useful methods that can help your work on the domain, they're called introspective methods.

Usually, an `equals` that returns equality to another instance of the ValueObject is provided.


```javascript
class CurrencyValueObject extends ValueObject {
  constructor({ amount, currency }) {
    this._amount = amount
    this._currency = currency
  }

  amount() {
    return this._amount
  }

  currency() {
    return this._currency
  }

  isEuroCurrency() {
    return this._currency === 'EUR'
  }

  equals(currencyValueObject) {
    return this.amount() === currencyValueObject.amount()
    		&& this.currency() === currencyValueObject.currency()
  }

  toString() {
    return `${this._amount} ${this._currency}`
  }

  toJSON() {
    return {
      amount: this._amount,
      currency: this._currency
    }
  }
}
```
