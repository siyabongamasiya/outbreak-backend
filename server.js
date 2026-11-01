const express = require("express");
const cors = require("cors");
const fs = require("node:fs/promises");
const path = require("node:path");

const app = express();
const datasetPath = path.join(__dirname, "covid.json");

app.use(cors({ origin: "https://outbreak-wala.onrender.com" }));

app.get("/api/covid", async (req, res) => {
  try {
    const contents = await fs.readFile(datasetPath, "utf8");
    const dataset = JSON.parse(contents);

    if (!Array.isArray(dataset)) {
      throw new TypeError("COVID-19 dataset must be a JSON array");
    }

    res.json(dataset);
  } catch (error) {
    console.error("Failed to load COVID-19 dataset:", error);
    res.status(500).json({ error: "Failed to load COVID-19 dataset" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`COVID-19 API listening on port ${port}`);
});
