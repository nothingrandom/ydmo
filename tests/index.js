import test from 'ava';
import ydmo from '..';

test('1 day', (t) => {
  const ydmoDate = ydmo('1d').getTime();
  const jsDate = new Date().getTime() + ((60 * 60 * 24) * 1000);
  t.is(ydmoDate, jsDate);
});

test('10 days', (t) => {
  const ydmoDate = ydmo('10d').getTime();
  const jsDate = new Date().getTime() + ((60 * 60 * 24 * 10) * 1000);
  t.is(ydmoDate, jsDate);
});

test('10 days 5 hours', (t) => {
  const ydmoDate = ydmo('10d5h').getTime();
  const jsDate = new Date().getTime() + (((60 * 60 * 24 * 10) + (60 * 60 * 5)) * 1000);
  t.is(ydmoDate, jsDate);
});
