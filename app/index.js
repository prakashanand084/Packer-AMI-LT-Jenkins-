const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app running on custom AMI! BABY I LOVE YOU AND I MISS YOU. You have one more sister for Rajesh also');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
