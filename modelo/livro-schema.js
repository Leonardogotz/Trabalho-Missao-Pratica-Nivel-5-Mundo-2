const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
  _id: { type: String, default: null },
  codEditora: { type: Number, required: true },
  titulo: { type: String, required: true },
  resumo: { type: String, required: true },
  autores: { type: [String], required: true }
});

const Livro = mongoose.model('livros', LivroSchema);

module.exports = Livro;
