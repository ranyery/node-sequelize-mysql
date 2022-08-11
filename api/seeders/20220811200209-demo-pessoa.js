"use strict";

// npx sequelize-cli seed:generate --name demo-pessoa
// npx sequelize-cli db:seed:all

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Ana Souza",
          ativo: true,
          email: "ana@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Marcos Cintra",
          ativo: true,
          email: "marcos@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Felipe Cardoso",
          ativo: true,
          email: "felipe@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sandra Gomes",
          ativo: false,
          email: "sandra@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Paula Morais",
          ativo: true,
          email: "paula@mail.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sergio Lopes",
          ativo: true,
          email: "sergio@mail.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
