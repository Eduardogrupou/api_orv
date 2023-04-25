import Cors from "cors";
import excuteQuery from "../../lib/db";
import { useState } from "react";

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

  const {
    endereco_origem,
    endereco_destino,
    servico,
    userName,
    status_pagamento,
    motorista_id,
    frete_valor,
    numero_origem,
    numero_destino,
    detalhes_servico,
    status,
    hora,
    extra,
    ajudante,
    moradiaO,
    moradiaD,
  } = req.body;

  if (req.method === "PUT") {
    const { servico_id, status, motorista_id, fatura_id, status_pagamento } =
      req.body;

    const result = await excuteQuery({
      query:
        "UPDATE servicos SET status,motorista_id,fatura_id,status_pagamento  = ?,?,?,? WHERE id =" +
        servico_id,
      values: [status, motorista_id, fatura_id, status_pagamento],
    });
    return res.status(200).json(result);
  }

  if (req.method === "GET") {
    const {user_id} = req.query;
console.log(user_id)
    const result = await excuteQuery({
      query: "SELECT * FROM servicos WHERE user_id = ? " ,
      values:[user_id],
    });
console.log(result)
    return res.status(200).json(result);
  }

  const result = await excuteQuery({
    query:
      "INSERT INTO servicos (endereco_origem,endereco_destino,servico,userName,status_pagamento,motorista_id,frete_valor,numero_origem,numero_destino,detalhes_servico,status,hora,extra,ajudante,moradiaO,moradiaD) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    values: [
      endereco_origem,
      endereco_destino,
      servico,
      userName,
      status_pagamento,
      motorista_id,
      frete_valor,
      numero_origem,
      numero_destino,
      detalhes_servico,
      status,
      hora,
      extra,
      ajudante,
      moradiaO,
      moradiaD,
    ],
  });

  return res.status(200).json(result.insertId);
}
