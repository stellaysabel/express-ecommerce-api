const knex = require('knex');

const useSSL = String(process.env.DB_SSL || '').toLowerCase() === 'true';

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: useSSL ? { rejectUnauthorized: false } : undefined
  },
  pool: { min: 0, max: 10 }
});

module.exports = db;
