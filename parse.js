const parse = (s) => {
  const fragments = [];
  const numberSegments = s.match(/[+-]?\d+/g);
  const letterSegments = s.match(/[A-Za-z]+/g);

  if (numberSegments && letterSegments) {
    if (numberSegments.length !== letterSegments.length) {
      throw new Error('Invalid ydmo format');
    }
  } else {
    return [{ modifier: '+', quantity: 0, period: 's' }];
  }

  numberSegments.forEach((i, index) => {
    const segModifier = i.match(/[+-]+/g) || ['+'];
    const segNumber = i.match(/\d+/g);

    fragments.push({
      modifier: segModifier.toString(),
      quantity: Number(segNumber),
      period: letterSegments[index],
    });
  });

  return fragments;
};

module.exports = parse;
