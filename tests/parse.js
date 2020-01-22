import test from 'ava';
import parse from '../parse';

test('parse 1 day', (t) => {
  const parseTest = {
    expected: [{ modifier: '+', quantity: 1, period: 'd' }],
    parsed: parse('1d'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse 20 days', (t) => {
  const parseTest = {
    expected: [{ modifier: '+', quantity: 20, period: 'd' }],
    parsed: parse('20d'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse 1 month', (t) => {
  const parseTest = {
    expected: [{ modifier: '+', quantity: 1, period: 'mo' }],
    parsed: parse('1mo'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse 20 months', (t) => {
  const parseTest = {
    expected: [{ modifier: '+', quantity: 20, period: 'mo' }],
    parsed: parse('20mo'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse short string', (t) => {
  const parseTest = {
    expected: [
      { modifier: '+', quantity: 1, period: 'y' },
      { modifier: '+', quantity: 3, period: 'mo' },
    ],
    parsed: parse('1y3mo'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse long string', (t) => {
  const parseTest = {
    expected: [
      { modifier: '+', quantity: 1, period: 'y' },
      { modifier: '+', quantity: 6, period: 'mo' },
      { modifier: '+', quantity: 15, period: 'd' },
      { modifier: '+', quantity: 7, period: 'h' },
      { modifier: '+', quantity: 30, period: 'mi' },
    ],
    parsed: parse('1y6mo15d7h30mi'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse long maths', (t) => {
  const parseTest = {
    expected: [
      { modifier: '+', quantity: 1, period: 'y' },
      { modifier: '-', quantity: 6, period: 'mo' },
      { modifier: '-', quantity: 15, period: 'd' },
      { modifier: '+', quantity: 7, period: 'h' },
      { modifier: '+', quantity: 30, period: 'mi' },
    ],
    parsed: parse('1y-6mo-15d7h30mi'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse long maths 2', (t) => {
  const parseTest = {
    expected: [
      { modifier: '-', quantity: 1, period: 'y' },
      { modifier: '-', quantity: 6, period: 'mo' },
      { modifier: '+', quantity: 15, period: 'd' },
      { modifier: '+', quantity: 7, period: 'h' },
      { modifier: '-', quantity: 30, period: 'mi' },
    ],
    parsed: parse('-1y-6mo15d+7h-30mi'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});
