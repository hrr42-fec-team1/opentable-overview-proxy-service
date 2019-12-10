const app = require('./app.js');
const PORT = 666;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});