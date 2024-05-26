const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const {
  findAllGames,
  findGameById,
  createGame,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkIsVoteRequest,
} = require("../middlewares/games");

const {
  sendGameById,
  sendGameUpdated,
  sendGameCreated,
  sendGameDeleted,
  sendAllGames,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);

gamesRouter.delete(
  "/games/:id",
  checkAuth, // Слушаем запросы по эндпоинту
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = gamesRouter;
