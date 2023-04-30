

import Cors from "cors";
import executeQuery from "../../lib/db";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
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

  const {filter} = req.query;
  const {values} = req.params;
  if {filter} {
    const query = `SELECT * FROM product WHERE ${filter} = ${values}`};
    const results = await executeQuery({ query });

    if (results.error) {
      res.status(500).json({ error: "Error executing the query" });
      return;
    }
    if (!results|| !value )  
      res.status(300).json({ error: "Error executing the query" });
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
  const query = "SELECT * FROM product";
  const results = await executeQuery({ query });

  if (results.error) {
    res.status(500).json({ error: "Error executing the query" });
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

