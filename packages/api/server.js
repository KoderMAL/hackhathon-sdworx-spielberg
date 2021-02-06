const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    name: 'together-api',
    port: 3000,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/me', (req, res) => {
  return {
    cheersReceived: 35,
    cheersGiven: 45,
    cheersSpent: 11,
    badges: [{ "Mentoring": 12 },
      { "Seniority": 3 },
      { "Ponctuality": 23 },
      { "Run With Colleagues": 13 }],
    team: "IT"
  }
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
});