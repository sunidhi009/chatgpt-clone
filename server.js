const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {

const messages = req.body.messages;

try{

const response = await axios.post(
  "http://localhost:5000/chat",
  {
    model: "gpt-3.5-turbo",
    messages: messages
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    }
  }
);

res.json(response.data);

}catch(error){
res.status(500).json(error.response?.data || error.message);
}

});

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});