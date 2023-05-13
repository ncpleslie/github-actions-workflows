import azureFunctionHandler from "azure-aws-serverless-express";
import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.send("Hello, World!");
});

export default azureFunctionHandler(app);
