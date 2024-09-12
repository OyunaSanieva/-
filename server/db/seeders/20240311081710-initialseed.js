/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await res.json();


    
    if (!Array.isArray(data)) {
        console.error("Unexpected data format:", data);
        return;
    }
    
    await queryInterface.bulkInsert(
      "Characters",
      data.map(({ name, image, house }) => ({
        name,
        house,
        image,
      })),
      {}
    );
    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
