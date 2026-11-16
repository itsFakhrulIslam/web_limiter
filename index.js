import express from "express";
const app = express();

const PORTs = process.env.PORT || 2020;

app.listen(PORTs, () => {
  console.log(`server is running port ${PORTs} on...`);
});
