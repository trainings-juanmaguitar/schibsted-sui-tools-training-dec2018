## Definition and motivation

### What is a domain?

It's the layer with all the calls for other system for retrieving data, the place where we do all our calculations, transformations and other validations independently from the interface.

To sum up, **an SDK for controlling the logic business of our application developed using only pure Javascript.**

### Why is the domain important?

In order to avoid coupling our frontend solution to our logic. This will help us in order to move faster our stack to another solution in the future if we want as the **Domain is written in pure Javascript.** Also, this offers us to focus our logic in a single point, avoiding unnecessary noise. Furthermore, the domain provides us a single point of truth for our logic business and a perfect place to make the best test coverage of our core.

### Where do I start?

We've created [@s-ui/domain](https://github.com/SUI-Components/sui/tree/master/packages/sui-domain) that's meant to be the backbone for our domains. It provides the basic stuff and some examples to start creating a domain from the ground. Anyway, you'll need before that a great understanding of the core concepts.