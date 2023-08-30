const { sum } = require('./mymath');

describe('testing mymath', () => {
  test('test sum should success', () => {
    let result = sum(10, 30);

    expect(result).toEqual(40);
  });

  // latihan
  // test('test reduce should success', () => {
  //   let result = kurang(30, 10);

  //   expect(result).toEqual(20);
  // });

  // test('test cross should success', () => {
  //   let result = kali(30, 10);

  //   expect(result).toEqual(300);
  // });

  // test('test devide should success', () => {
  //   let result = bagi(30, 10);

  //   expect(result).toEqual(3);
  // });
});
