require("dotenv/config");
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 8080;

app.get("/:id", async (req, res, next) => {
  await axios
    .get(`https://fhir.loinc.org/Questionnaire/${req.params["id"]}`, {
      auth: {
        username: process.env.USER_ID,
        password: process.env.PASSWORD,
      },
    })
    .then((data) => {
      res.jsonp(data.data);
    })
    .catch((err) => next(err));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
