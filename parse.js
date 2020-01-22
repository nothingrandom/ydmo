const parse = (s) => {
  const fragments = [];
  const numberSegments = s.match(/[+-]?[0-9]+/g);
  const letterSegments = s.match(/[A-Za-z]+/g);

  if (numberSegments.length !== letterSegments.length) {
    throw new Error('Invalid ydmo format');
  }

  numberSegments.forEach((i, index) => {
    const segModifier = i.match(/[+-]+/g) || ['+'];
    const segNumber = i.match(/[0-9]+/g);

    fragments.push({
      modifier: segModifier.toString(),
      quantity: Number(segNumber),
      period: letterSegments[index],
    });
  });

  return fragments;
};

module.exports = parse;