describe.skip('Test CrudStrings', () => {
  test('create should success', () => {
    let bank = [];
    let result = createData(bank, 'apple');

    expect(result).toEqual(['apple']);
  });

  test('readByIdx should success', () => {
    let bank = ['apple', 'mango', 'orange'];
    let result = readByIdx(bank, 1);

    expect(result).toEqual('mango');
  });

  test('updateData should success', () => {
    let bank = ['apple', 'mangoo', 'orange'];
    let result = updateData(bank, 2, 'pear');

    expect(result).toEqual(['apple', 'mangoo', 'pear']);
  });

  test('deleteData should success', () => {
    let bank = ['apple', 'mangoo', 'orange'];
    let result = deleteData(bank, 0);

    expect(result).toEqual(['mangoo', 'orange']);
  });
});
