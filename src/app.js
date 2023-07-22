import express from "express";

import authRouter from './routes/auth.router.js';
import categoryRouter from "./routes/category.router.js";
import productRouter from "./routes/product.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/ping", (req, res) => {
    res.json({message: "ProductService.Version1.0.0"});
});

app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" })
});

app.use((error, req, res, next) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({message})
});

export default app;