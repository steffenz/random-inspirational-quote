# random-inspirational-quote
This is just a sample package developed as part of a demonstration/presentation of the vast potential of doing "everything" inside GitHub (DevOps, packages, etc).

If you do however have a great quote, feel free to submit a pull request! 

Usage:

```bash
npm install --save @steffenz/random-inspirational-quote
```

```js
import { getRandomQuote } from '@steffenz/@steffenz/random-inspirational-quote';

...

const optionalArrayOfQuotesToOmit = [1, 5, 2];

getRandomQuote(optionalArrayOfQuotesToOmit);
```