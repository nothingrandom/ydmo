import test from 'ava';
import ydmo from '..';

test('1 day', (t) => {
  const ydmoDate = ydmo('1d').getTime();
  const jsDate = new Date().getTime() + ((60 * 60 * 24) * 1000);
  t.is(ydmoDate, jsDate);
});

test('5 weeks', (t) => {
  const ydmoDate = ydmo('5w').getTime();
  const jsDate = new Date().getTime() + ((60 * 60 * 24 * 7) * 5 * 1000);
  t.is(ydmoDate, jsDate);
});

test('3 months', (t) => {
  const ydmoDate = ydmo('3mo').getTime();
  const jsDate = new Date().getTime() + (((60 * 60 * 24 * 365) / 12) * 3 * 1000);
  t.is(ydmoDate, jsDate);
});

test('2 years', (t) => {
  const ydmoDate = ydmo('2y').getTime();
  const jsDate = new Date().getTime() + ((60 * 60 * 24 * 365) * 2 * 1000);
  t.is(ydmoDate, jsDate);
});

test('1 ago day', (t) => {
  const ydmoDate = ydmo('-1d').getTime();
  const jsDate = new Date().getTime() - ((60 * 60 * 24) * 1000);
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

test('10 days minus 5 hours', (t) => {
  const ydmoDate = ydmo('10d-5h').getTime();
  const jsDate = new Date().getTime() + (((60 * 60 * 24 * 10) - (60 * 60 * 5)) * 1000);
  t.is(ydmoDate, jsDate);
});

test('empty', (t) => {
  const ydmoDate = ydmo('').getTime();
  const jsDate = new Date().getTime();
  t.is(ydmoDate, jsDate);
});

test('nothing', (t) => {
  const ydmoDate = ydmo().getTime();
  const jsDate = new Date().getTime();
  t.is(ydmoDate, jsDate);
});
