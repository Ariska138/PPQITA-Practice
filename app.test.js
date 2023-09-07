const request = require('supertest');
const app = require('./app');

describe('Test in app', () => {
  test('when get root should success', async () => {
    let response = await request(app).get('/');

    expect(response.status).toBe(200); // ===
    // '5' === 5 => false
    expect(response.body).toEqual({ data: [] }); // ==
    // '5' == 5 => true
  }, 5000);

  test('when post data should success', async () => {
    const data = { name: 'ariska', age: 23 };
    let response = await request(app).post('/').send(data);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: [{ name: 'ariska', age: 23 }] });
  });

  afterAll(() => {
    app.close(); // Menutup server setelah semua tes selesai
  });
});
