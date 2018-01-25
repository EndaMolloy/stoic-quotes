# stoic-quotes
A selection of stoic quotes from the three heavyweights of stoicism - Seneca, Marcus Aurelius, Epictetus.

[![NPM](https://nodei.co/npm/stoic-quotes.png)](https://nodei.co/npm/stoic-quotes/)

# Installation
```
npm install --save stoic-quotes
```

# Usage
```javascript
const stoicQuote = require('stoic-quotes');

//random quote
console.log(stoicQuote());
//{ quote: 'He suffers more than necessary, who suffers before it is necessary.',
//author: 'Seneca' }

//random quote from specific author
stoicQuote('Seneca');
stoicQuote('Marcus');
stoicQuote('Epictetus');
```
