const authControllers = require("../controllers/authController");
const express = require("express");
const router = express.Router();

//authRouter

/**
 * @swagger
 * /api/register:
 *  post:
 *      summary: Register users
 * requestBody:
 *      required: true
 * responses:
 *  200:
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */
router.post("/api/register", authControllers.register)


/**
 * @swagger
 * /api/login:
 *  post:
 *      summary: Login Users
 * requestBody:
 *      required: true
 * responses:
 *  200:
 * content:
 *      application/json:
 *          schema:
 *              type: array
 */
router.post("/api/login", authControllers.login)

module.exports = router;
