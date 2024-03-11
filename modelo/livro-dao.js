const Livro = require('./livro-schema');

const LivroDAO = {
  obterLivros: async () => {
    try {
      return await Livro.find({});
    } catch (error) {
      console.error("Erro ao obter livros:", error);
      throw error;
    }
  },

  incluir: async (livro) => {
    try {
      return await Livro.create(livro);
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
      throw error;
    }
  },

  excluir: async (codigo) => {
    try {
      return await Livro.deleteOne({ _id: codigo });
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      throw error;
    }
  }
};

module.exports = LivroDAO;
