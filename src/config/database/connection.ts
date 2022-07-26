const Pool = require('pg').Pool;
import connection from './dev.json';

export const POOL = new Pool({
  user: connection.dev.user,
  host: connection.dev.host,
  database: connection.dev.database,
  password: connection.dev.password,
  port: 5432,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
POOL.on('error', (err: Error, client: any) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

(async () => {
  const client = await POOL.connect();
  try {
    // const res = await client.query(
    //   'SELECT * FROM product.users WHERE id = $1',
    //   [1],
    // );
    // console.log(res.rows[0]);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
})().catch((err) => console.log(err.stack));
