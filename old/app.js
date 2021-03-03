const express = require('express');
const contact = require('./routes/contact');
const app = express();

app.use(express.json());
app.use('/contact', contact);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT} ...`));
