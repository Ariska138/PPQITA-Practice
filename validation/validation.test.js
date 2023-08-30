const { nameValidation } = require('./validation');
describe('testing name validation', () => {
  test('when input less 3 character should error', () => {
    let result = nameValidation('ab');

    expect(result).toEqual({ error: true, message: 'nama harus lebih dari 3' });
  });

  // latihan
  test('when input number character should error', () => {
    let result = nameValidation('123455');

    expect(result).toEqual({
      error: true,
      message: 'nama tidak boleh pakai angka',
    });
  });

  test('when input more 20 characters should error', () => {
    let result = nameValidation('qwertyuiopasdfghjklzxcvbnm');

    expect(result).toEqual({
      error: true,
      message: 'nama tidak boleh lebih dari 20',
    });
  });

  test('when input space only  should error', () => {
    let result = nameValidation('         ');

    expect(result).toEqual({ error: true, message: 'nama harus lebih dari 3' });
  });

  test('should success', () => {
    let result = nameValidation('Hidayat');

    expect(result).toEqual({ error: false, message: 'OK', data: 'Hidayat' });
  });

  test('should success', () => {
    let result = nameValidation('Samsul'); // harus bisa diisi random

    expect(result).toEqual({ error: false, message: 'OK', data: 'Samsul' });
  });
});

describe('test ageValidation', () => {
  test('when less 12 should error', () => {
    let result = ageValidation(10);

    expect(result).toEqual({
      error: true,
      message: 'umur harus lebih dari 12',
    });
  });

  test('when more 80 should error', () => {
    let result = ageValidation(90);

    expect(result).toEqual({
      error: true,
      message: 'umur harus kurang dari 80',
    });
  });

  test('should success', () => {
    let result = ageValidation(20);

    expect(result).toEqual({ error: false, message: 'OK', data: 20 });
  });
});
