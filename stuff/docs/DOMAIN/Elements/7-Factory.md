### Factory

Class that only has static methods that instantiate every single object used in the domain (UseCases, Services, Repositories, Mappers, ValueObjects and Entities). It's **the only place in the domain where you could do an import of another file and where you could create an instance of any of them**. It's also responsible of injecting in the constructor of the Domain Object all the needed dependencies. Config, third-party libraries, other factories and services would be some examples of resources that you could inject. Every Domain Object type of every context has to have its own Factory.

Factories are responsible of building all the Entities and ValueObjects that an Entity or ValueObject could need between their properties.

```javascript
class SearchFactory extends Factory {
    static propertyEntity ({ id = 1, url = 'http://', price: "400000" }) {
        const urlValueObject = SearchFactory.urlValueObject({ url })
        const priceValueObject = CommonFactory.priceValueObject({ price })
        return new PropertyEntity({ id, url: urlValueObject, price: priceValueObject })
    }

    // Example of inline factory for a ValueObject
    static urlValueObject = ({ url }) => new UrlValueObject({ url })
}
```
