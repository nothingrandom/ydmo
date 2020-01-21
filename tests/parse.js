import test from 'ava';
import parse from '../parse';

test('parse 1 day', (t) => {
  const parseTest = {
    expected: [{ quantity: '1', period: 'd' }],
    parsed: parse('1d'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse 20 days', (t) => {
  const parseTest = {
    expected: [{ quantity: '20', period: 'd' }],
    parsed: parse('20d'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse 1 month', (t) => {
  const parseTest = {
    expected: [{ quantity: '1', period: 'mo' }],
    parsed: parse('1mo'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse 20 months', (t) => {
  const parseTest = {
    expected: [{ quantity: '20', period: 'mo' }],
    parsed: parse('20mo'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse short string', (t) => {
  const parseTest = {
    expected: [
      { quantity: '1', period: 'y' },
      { quantity: '3', period: 'mo' },
    ],
    parsed: parse('1y3mo'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});

test('parse long string', (t) => {
  const parseTest = {
    expected: [
      { quantity: '1', period: 'y' },
      { quantity: '6', period: 'mo' },
      { quantity: '15', period: 'd' },
      { quantity: '7', period: 'h' },
      { quantity: '30', period: 'mi' },
    ],
    parsed: parse('1y6mo15d7h30mi'),
  };
  t.deepEqual(parseTest.parsed, parseTest.expected);
});
