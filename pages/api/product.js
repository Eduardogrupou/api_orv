import Cors from 'cors';
import executeQuery from '../../lib/db';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { gender, brandId, search, query } = req.query;

  if (query) {
    const results = await executeQuery({
      query: `SELECT name FROM product WHERE name ILIKE '%${query}%' ORDER BY name LIMIT 10`,
    });

    const products = results.map((row) => ({
      name: row.name,
    }));

    res.status(200).json(products);
    return;
  }

  let querySql = "SELECT * FROM product";

  if (gender || brandId || search) {
    querySql += ' WHERE';

    if (gender) {
      querySql += ` gender = '${gender}'`;
    }

    if (brandId) {
      const brandIdInt = parseInt(brandId, 10);
      const whereClause = gender || search ? ' AND' : '';
      querySql += `${whereClause} brand_id = ${brandIdInt}`;
    }

    if (search) {
      const whereClause = gender || brandId ? ' AND' : '';
      querySql += `${whereClause} name ILIKE '%${search}%'`;
    }
  }

  querySql += ' ORDER BY name';

  const results = await executeQuery({ query: querySql });

  if (results.error) {
    res.status(500).json({ error: 'Error executing the query' });
    return;
  }

  const products = results.map((row) => ({
    id: row.id,
    name: row.name,
    image: row.image,
    dcp: row.dcp,
    gender: row.gender,
    brand_id: row.brand_id,
    destaque: row.destaque,
  }));

  res.status(200).json({ data: products });
}
