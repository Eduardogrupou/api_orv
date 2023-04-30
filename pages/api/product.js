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

  const { gender } = req.query;

  // Define a consulta SQL base
  let query = "SELECT * FROM product";

  // Verifica se o filtro de gênero foi especificado
  if (gender) {
    // Adiciona a cláusula WHERE na consulta SQL para filtrar por gênero
    query += ` WHERE gender = '${gender}'`;
  }

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
  brand: row.brand_id, // assume-se que a tabela 'product' contém um campo 'brand_id' com o ID da marca
  destaque: row.destaque,
}));

  res.status(200).json({ data: products });
}
