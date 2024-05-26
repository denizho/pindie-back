const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

// Импортируем вспомогательные функции
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  checkIsCategoryExists,
  checkEmptyName,
  deleteCategory,
} = require("../middlewares/categories");
const {
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryUpdated,
  sendCategoryDeleted,
  sendAllCategories,
} = require("../controllers/categories");

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
