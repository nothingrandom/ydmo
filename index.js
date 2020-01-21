const parse = require('./parse');

const ydmo = (s) => {
  const fragments = parse(s);

  fragments.forEach((unit) => {
    // turn each unit.period into a * multiplier to add or subtract from new Date();
    // multiply the period multiplier by unit quantity
  });

  return fragments;
};

module.exports = ydmo;
