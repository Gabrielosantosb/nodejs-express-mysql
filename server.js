const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://crud-angular-3bsafgw4r-gabrielosantosb.vercel.app",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Começou a aplicação." });
});

require("./app/routes/tutorial.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
