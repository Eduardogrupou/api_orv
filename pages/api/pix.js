import Cors from "cors";

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

  const { frete_valor, userName, email, customer_id, servico,fatura_id } =
    req.body;

  console.log(
    "frete_valor",
    frete_valor,
    "userName",
    userName,
    "email",
    email,
    "customer_id",
    customer_id,
    "servico",
    servico,
  );

const options = {
  method: "POST",
  headers: { accept: "application/json", "content-type": "application/json" },
  body: JSON.stringify({
    ensure_workday_due_date: false,
    custom_variables: [{ name: "fatura_id", value: fatura_id }],
    external_reference: fatura_id,
    

    items: [
      {
        description: servico,
        quantity: 1,
        price_cents: frete_valor,
        fatura_id: fatura_id,
      },
    ],
    payable_with: ["pix"],
    payer: { name: userName, email: email },
    email: email,
    return_url: "https://app.freteme.com/servicos",
    notification_url:
      "https://fretemeapi2-j06c1g55x-devrutherles.vercel.app/api/notification",
    customer_id: customer_id,
    due_date: "2024-10-02",
  }),
};

fetch(
  "https://api.iugu.com/v1/invoices?api_token=0BD34B87F90504F4CF3EED918F26369D49F15D02EF193965F683BEC84B5035EF",
  options
)
  .then((response) => response.json())
  .then((response) => {console.log(response)
    return res.status(200).json({ mensagem: response});

})
  .catch((err) => {console.error(err)
    return res.status(200).json({ mensagem: err});
});
  
}
