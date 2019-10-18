const Cats = require('./cats-model');
const db = require('../data/dbConfig');

describe('cats model test', () => {
  it('should use testing env', () => {
    expect(process.env.DB_env).toBe('testing')
  });
});

describe('testing cats-model', () => {
  beforeEach(async () => {
    await db('cats').truncate();
  });

  it('should add new cat to database', async () => {
    const records = await db('cats');
    expect(records).toHaveLength(0)

    await Cats.insert({ name: 'samuel', age: 4, gender: 'male'})
  });
});