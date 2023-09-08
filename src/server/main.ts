import express from 'express';
import dotenv from 'dotenv';
import viteexpress from "vite-express"
dotenv.config();

const app = express();
const port = process.env.PORT || "3000";

app.get('/hello/:nom', (req, res) => {

  const nom = req.params.nom;
  const message = `Bonjour ${nom} !`;
  res.send(message);
});

viteexpress.listen(app, parseInt(port), () => {
  console.log(`Server is running on port ${port}`);
}); 



