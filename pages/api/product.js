import Cors from "cors";
import executeQuery from "../../lib/db";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { filter, value, limit } = req.query;

if (filter) {
const query = SELECT * FROM product WHERE ${filter} = ?;
const results = await executeQuery({ query, params: [value] });
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
  } else if (limit) {
const query = SELECT * FROM product LIMIT ${limit};
const results = await executeQuery({ query });

    if (results.error) {
      res.status(500).json({ error: "Error executing the query" });
      return;
    }

    // Mapeia os resultados da consulta para um objeto com os atributos desejados
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
  } else {
    // Consulta para selecionar todos os produtos da tabela "perfumes"
    const query = "SELECT * FROM product";
    const results = await executeQuery({ query });

    if (results.error) {
      res.status(500).json({ error: "Error executing the query" });
      return;
    }

    // Mapeia os resultados da consulta para um objeto com os atributos desejados
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
}

export default handler;
