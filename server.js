const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const dotenv = require('dotenv');
const cors = require('cors');
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes")
const app = express();
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const paymentRoutes = require("./routes/paymentRoutes")

dotenv.config(),

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(
    cors({
        origin: "*",
        // origin: "https://ecommerce-navy-kappa-26.vercel.app",
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "auth-token"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    })
)
app.use("/",categoryRoutes)
app.use("/",productRoutes)
app.use("/",authRoutes)
app.use("/",cartRoutes)
app.use("/",paymentRoutes)


// Extended configuration for Swagger documentation
const swaggerOptions = {
    swaggerDefinition: {
    openapi: "3.0.0",
    info: {
    title: "J24 Ecommerce API Documentation",
    version: "1.0.0",
    description: "API Documentation J24 ",
    contact: {
    name: "Adetoun Goodluck",
    email: "goodluckmelanie@gmail.com",
    },
    servers: [
    {
    url: "*",
    },
    ],
    },
    },
    apis: ["./routes/*.js"], // Path to your API files
   };
   const swaggerDocs = swaggerJsDoc(swaggerOptions);
   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}!`) )