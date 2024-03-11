const express = require('express');
const router = express.Router();
const LivroDAO = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    console.error("Erro ao obter livros:", error);
    res.status(500).json({ error: "Erro ao obter livros" });
  }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    const novoLivro = await LivroDAO.incluir(livro);
    res.json({ message: "Livro incluído com sucesso", livro: novoLivro });
  } catch (error) {
    console.error("Erro ao incluir livro:", error);
    res.status(500).json({ error: "Erro ao incluir livro" });
  }
});

// Rota para excluir um livro
router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    const resultado = await LivroDAO.excluir(codigo);
    if (resultado.deletedCount === 1) {
      res.json({ message: "Livro excluído com sucesso" });
    } else {
      res.status(404).json({ error: "Livro não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
    res.status(500).json({ error: "Erro ao excluir livro" });
  }
});

module.exports = router;
