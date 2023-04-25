import Cors from "cors";
import excuteQuery from "../../lib/db";
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

if (req.method === "GET") {
    const { user_id } = req.query;

    const result = await excuteQuery({
      query: "SELECT * FROM cliente WHERE cliente_id = ? " ,
      values: [user_id],
    });

    console.log(result);
    return res.status(200).json(result[0]);

  
} else if (req.method === "PUT") { 
    const {user_id,token} = JSON.parse(req.body);
    console.log(user_id,token);
    console.log(req.body);
    

    

  const result = await excuteQuery({ 
      query:
        "UPDATE cliente SET iugu_token = ? WHERE cliente_id = " + user_id,
      values: [token],
    });
    console.log(result);
    return res.status(200).json(result);
  
  }

  const { userName,email ,telefone,perfil} = req.body;

 


  const result = await excuteQuery({
    query: "SELECT * FROM cliente WHERE email = ?",
    values: [email],
  });

  if (result.length < 1) {

   
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ email: email, name: userName ,telefone:telefone,perfil:perfil }),
  };

  fetch(
    `https://api.iugu.com/v1/customers?api_token=${process.env.IUGU_API_PRODUC}`,
    options
  )
    .then((response) => response.json())
    .then(async (response) => {
      const result = await excuteQuery({
        query:
          "INSERT INTO cliente (nome,email,cliente_id_iugu_producao,telefone,perfil) VALUES(?,?,?,?,?)",
        values: [userName, email, response.id,telefone,perfil],
      });

            console.log(result);



      return res
        .status(200)
        .send({ iugu_id: response.id, user_id: result.insertId });
    })
    .catch((err) => send.status(200).json({mensage:err}));
    




  } else {

    return res
      .status(200)
      .send({
        user_id: result[0].cliente_id,
        user_iugu: result[0].cliente_id_iugu_producao
      });
  }
}
