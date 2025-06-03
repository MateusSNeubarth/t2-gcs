const app = require("./app");
const { connect } = require("./config/db");

const PORT = process.env.PORT || 8080;

// Testar conexão com o banco de dados
async function startServer() {
  await connect();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();