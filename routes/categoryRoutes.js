const categoryController = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();



/**
 * @swagger
 * /api/category:
 *  post:
 *      summary: create cartegory
 * requestBody:
 *      required: true
 * responses:
 *  200:
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */

router.post("/api/category", categoryController.createCategory);

/**
 * @swagger
 * /api/categories:
 *  get:
 *      summary: Retrieve a list of users
 * responses:
 *  200:
 *      description: A list of users.
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */
router.get("/api/categories", categoryController.getCategory);

/**
 * @swagger
 * /api/categories/:id:
 *  get:
 *      summary: Retrieve a single cartegory
 * responses:
 *  200:
 *      description: A list of users.
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */
router.get("/api/categories/:id", categoryController.getsinglecategory);


/**
 * @swagger
 * /api/category/:id:
 *  put:
 *      summary: Edit cartegory
 * requestBody:
 *      required: true
 * responses:
 *  201:
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */

router.put("/api/category/:id", categoryController.updatecategory);


/**
 * @swagger
 * /api/category/:id:
 *  delete:
 *      summary: Delete a cartegory
 * requestBody:
 *      required: true
 * responses:
 *  201:
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */

router.delete("/api/category/:id", categoryController.deletecategory);

module.exports= router;