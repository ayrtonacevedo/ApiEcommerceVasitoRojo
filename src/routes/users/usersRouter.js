const { Router } = require("express");
const { getUsers, getUserById } = require("../../Middleware/users/getUsers");
const { createUser } = require("../../Middleware/users/createUsers");
const { Users, Roles } = require("../../db");
const { updateUser } = require("../../Middleware/users/updateUsers");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let users = await getUsers();

    if (users.length > 0) {
      res.send(users);
    } else {
      res.status(404).send({ message: "There are no users" }); // Cambiar el código de estado a 404 si no se encuentran usuarios
    }
  } catch (error) {
    console.error("Error getting users:", error); // Agregar un mensaje de registro para el error
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user by ID:", error);
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { name, email, cellPhone, image, location, direction, role } =
      req.body;
    const result = await createUser(
      name,
      email,
      cellPhone,
      image,
      location,
      direction,
      role
    );

    if (result.flag) {
      res.status(201).send({ message: "User created successfully" });
    } else {
      res.status(400).send({ message: result.message });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, email, cellPhone, image, location, direction, role, disabled } =
    req.body;
  try {
    const result = await updateUser(
      id,
      name,
      email,
      cellPhone,
      image,
      location,
      direction,
      role,
      disabled
    );
    if (result.success) {
      res.status(200).json({ success: true, message: "User updated" });
    } else {
      res.status(400).json({
        success: false,
        message: result.message,
        errors: result.errors,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
