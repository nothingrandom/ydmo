const parse = (s) => {
  const fragments = [];
  const numberSegments = s.match(/[0-9]+/g);
  const letterSegments = s.match(/[A-Za-z]+/g);

  if (numberSegments.length !== letterSegments.length) {
    throw new Error('Invalid ydmo format');
  }

  numberSegments.forEach((i, index) => {
    fragments.push({
      quantity: numberSegments[index],
      period: letterSegments[index],
    });
  });

  // TODO: be able to parse the + or - at the beginning of `s`

  return fragments;
};

module.exports = parse;