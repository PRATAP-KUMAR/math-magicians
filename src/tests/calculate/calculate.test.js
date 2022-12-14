import calculate from '../../logic/calculate';

let obj = { total: null, next: null, operation: null };

test('if AC button is pressed return acObj', () => {
  const acObj = { total: null, next: null, operation: null };
  expect(calculate({}, 'AC')).toStrictEqual(acObj);
});

test('zero and next zero', () => {
  obj.next = '0';
  expect(calculate(obj, '0')).toStrictEqual({});
});

test('30x22=660', () => {
  obj = { total: 30, next: 22, operation: 'x' };
  expect(calculate(obj, '=')).toStrictEqual({ total: '660', next: null, operation: null });
});

test('99x44 +/-', () => {
  obj = { total: 99, next: 44, operation: 'x' };
  expect(calculate(obj, '+/-')).toStrictEqual({ ...obj, next: '-44' });
});

const mathObj = { total: 23, next: 27, operation: '+' };

describe('Testing the basic calculator functions', () => {
  test('Return total for +', () => {
    expect(calculate(mathObj, '=').total).toBe('50');
  });
  test('Return null for + -> next', () => {
    expect(calculate(mathObj, '=').next).toBe(null);
  });
  test('Return null for + -> operation', () => {
    expect(calculate(mathObj, '=').operation).toBe(null);
  });
});
