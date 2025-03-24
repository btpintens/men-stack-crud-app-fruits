import { Router } from "express";

const fruitsRouter = Router();

fruitsRouter.get("/", (req, res) => {
    res.render("index");
});


fruitsRouter.get("/fruits/new", (req, res) => {
    res.render("fruits/new")
});

export default fruitsRouter;