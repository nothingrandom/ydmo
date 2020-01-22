# ydmo
![Travis (.com)](https://img.shields.io/travis/com/nothingrandom/ydmo)
> Date parsing for a past or future data with a simple short letter format

## Install

``` bash
$ yarn add ydmo
$ npm install ydmo
```

## Usage (ES6 imports)
``` js
import ydmo from 'ydmo';

// returns date 1 year and 3 days in the future
const futureDate = ydmo('+1y3d');

// returns date 1 year and 3 days in the past
const pastData = ydmo('-6mo4h');
```

## Date codes
Year: `y`

Month: `mo` or `m`

Day: `d`

Hour: `h`

Minute: `mi`

Second: `s`

## License
MIT © [Benjamin Hollway](https://nothingrandom.com)