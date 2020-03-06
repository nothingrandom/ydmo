const varops = require('varops');
const parse = require('./parse');

const ydmo = (s = '') => {
  const fragments = parse(s);

  const datePeriods = {
    y: 60 * 60 * 24 * 365,
    mo: (60 * 60 * 24 * 365) / 12,
    m: (60 * 60 * 24 * 365) / 12,
    w: 60 * 60 * 24 * 7,
    d: 60 * 60 * 24,
    h: 60 * 60,
    mi: 60,
    s: 1,
  };

  const dateNow = new Date();
  let timeNow = dateNow.getTime();

  fragments.forEach((unit) => {
    timeNow = varops[unit.modifier](timeNow, ((datePeriods[unit.period] * unit.quantity) * 1000));
  });

  return new Date(timeNow);
};

module.exports = ydmo;
