import operate from '../../logic/operate';

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

test('subtracts 1 x -2 to equal 2', () => {
  expect(operate(1, -2, 'x')).toBe('-2');
});

test('divide 39 ÷4 to equal 9.75', () => {
  expect(operate(39, 4, '÷')).toBe('9.75');
});

test('divide 1 ÷ 0 to equal errorMsg', () => {
  expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
});

test('modulo 5 ÷ 2.5 to 0', () => {
  expect(operate(5, 2.5, '%')).toBe('0');
});

test('modulo 5 ÷ 0 to errorMsg', () => {
  expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});
