describe('Test in app', () => {
  test('when  sould success', async () => {
    let res = await fetch('http://localhost:3000/');

    console.log(res.data);

    expect(res.data).toEqual(undefined);
  });
});
