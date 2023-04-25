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

  // Consulta para selecionar todos os produtos da tabela "perfumes"
  const query = "SELECT id, email, username, password, phone, address, passport, status, perfil, sexo, cep, endereco, numero, complemento, cidade, uf, bairro, nome, rua, plano, column_b, descricao, recuperar_senha, utilizador, confirmacao, cpf, userId, nascimento FROM user";
  const results = await executeQuery({ query });

  if (results.error) {
    res.status(500).json({ error: "Error executing the query" });
    return;
  }

  // Mapeia os resultados da consulta para um objeto com os atributos desejados
  const products = results.map((row) => ({
    id: row.id,
    email: row.email,
    username: row.username,
    password: row.password,
    phone: row.phone,
    address: row.adress,
    passport: row.passport,
    status: row.status,
    perfil: row.perfil,
    sexo: row.sexo,
    cep: row.cep,
    endereco: row.endereco,
    numero: row.numero,
    complemento: row.complemento,
    cidade: row.cidade,
    uf: row.uf,
    bairro: row.bairro,
    nome: row.nome,
    rua: row.rua,
    plano: row.plano,
    column_b: row.column_b,
    descricao: row.descricao,
    recuperar_senha: row.recuperar_senha,
    utilizador: row.utilizador,
    confirmacao: row.confirmacao,
    cpf: row.cpf,
    userId: row.userId,
    nascimento: row.nascimento,





  }));

  res.status(200).json({ data: products });
}
