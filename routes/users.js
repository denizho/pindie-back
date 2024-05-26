const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const { sendMe } = require("../controllers/users.js");

usersRouter.get("/me", checkAuth, sendMe);

// Импортируем вспомогательные функции
const {
  findAllUsers,
  findUserById,
  updateUser,
  createUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  hashPassword,
  deleteUser,
} = require("../middlewares/users");
const {
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendAllUsers,
} = require("../controllers/users");

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
module.exports = usersRouter;
