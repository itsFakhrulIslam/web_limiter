import express from "express";
const app = express();

const PORTs = process.env.PORT || 2020;

app.get('/', (req,res)=>{
  res.send('hello web limiter world.')
})

app.listen(PORTs, () => {
  console.log(`server is running port ${PORTs} on...`);
});
