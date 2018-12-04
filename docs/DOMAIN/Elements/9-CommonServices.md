## Common services

Some services are common to all our applications. That's why they were abstracted to avoid duplication in all domains.

### Fetcher

You SHOULD not use any external library to make fetch of an external API as you should use the HTTPFetcher provided to you by [@s-ui/domain] library.

### Logger

Class that offers an abstract interface for logging useful messages, errors and requests.

[@s-ui/domain]:https://www.npmjs.com/package/@s-ui/domain
[correct]:https://img.shields.io/badge/-OK-green.svg
[incorrect]:https://img.shields.io/badge/-KO-red.svg
[ddd-building-blocks]:https://github.com/we-learn-js/js-training/blob/master/src/slideshow/slides/DomainDrivenDesign.md#building-blocks