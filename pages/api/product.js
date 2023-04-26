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

  const query = "SELECT * FROM product WHERE 1 == ?";
  const value = [1];
  const products = await executeQuery(query, value);

  if (results.error) {
    res.status(500).json({ error: "Error executing the query" });
    return;
  }


  res.status(200).json({ data: products });
}
