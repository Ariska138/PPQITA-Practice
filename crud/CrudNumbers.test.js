const {
  createData,
  readAll,
  readByIdx,
  updateData,
  deleteData,
} = require('./crudNumbers');

describe.skip('test crud numbers', () => {
  test('when create should success', () => {
    let bank = [];
    let result = createData(bank, 5);

    expect(result).toEqual([5]);
  });

  test('when readAll should success', () => {
    let bank = [3, 4, 5];
    let result = readAll(bank);

    expect(result).toEqual([3, 4, 5]);
  });

  test('when readByIdx should success', () => {
    let bank = [3, 4, 5];
    let result = readByIdx(bank, 2);
    expect(result).toEqual(5);
  });

  test('when updateData should success', () => {
    let bank = [3, 4, 5];
    let result = updateData(bank, 1, 8); // ubah data index 1 dengan nilai 8
    result = updateData(result, 2, 6);
    result = updateData(result, 0, 3);
    result = updateData(result, 1, 4);
    expect(result).toEqual([3, 4, 6]);
  });

  test('when delete should success', () => {
    let bank = [2, 3, 4, 5];
    let result = deleteData(bank, 2); // hapus data index 2
    result = deleteData(result, 1);
    expect(result).toEqual([2, 5]);
  });
});
