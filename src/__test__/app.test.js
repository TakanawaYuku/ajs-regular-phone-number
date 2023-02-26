import phoneFormat from '../app';

test('to check that foreign phone number is returned in follow format +4625000000', () => {
  expect(phoneFormat('46 (250) 000-000')).toBe('+46250000000');
});

test('to check that local phone number is returned in follow format +7925000000', () => {
  expect(phoneFormat('+8 (925) 000-000')).toBe('+7925000000');
});
