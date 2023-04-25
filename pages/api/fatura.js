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

  const { fatura_id } = req.body;

  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    `https://api.iugu.com/v1/invoices/${fatura_id}?api_token=0BD34B87F90504F4CF3EED918F26369D49F15D02EF193965F683BEC84B5035EF`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
       console.log(response.status);
       console.log("brendo");
        return res.status(200).json({ faturastatus: response.status });

     
    })

    .catch((err) => console.error(err));

}
