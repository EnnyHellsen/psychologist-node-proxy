import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/psychologists', async (req, res) => {
  const response = await fetch('https://mindler.se/api/mindlerproxy/psychologists/available/', {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
  const data = await response.json();
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));