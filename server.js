const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes);

const apiRoutes = require("./routes/api-routes.js");
app.use(apiRoutes);

const dataRoutes = require("./routes/data-routes.js");
app.use(dataRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
