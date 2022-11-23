'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      { titulo: 'Banana', preco: 120.65, descricao: "fruta", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/69/Banana.png"},
      { titulo: 'Uva', preco: 5.00, descricao: "fruta", imagem:"https://www.divvino.com.br/blog/wp-content/uploads/2020/09/uva-garnacha.jpg" },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};