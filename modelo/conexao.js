const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
  .catch(err => console.error('Erro ao conectar com o MongoDB:', err));

module.exports = mongoose;
