const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  seederCategories,
} = require("./src/Seeders/categories/categories.seeder.js");
const { seederBrands } = require("./src/Seeders/brands/brands.seeders.js");
const { seederProducts } = require("./src/Seeders/products/products.seeder.js");
const { seederRoles } = require("./src/Seeders/roles/roles.seeders.js");
const { seederUser } = require("./src/Seeders/users/users.seeder.js");
const { seederOrders } = require("./src/Seeders/orders/orders.seeders.js");
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    seederCategories();
    seederBrands();
    seederProducts();
    seederRoles();
    seederUser();
    seederOrders();
  });
});
