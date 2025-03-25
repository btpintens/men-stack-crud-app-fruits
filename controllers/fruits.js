import { Router } from "express";
import Fruit from "../models/fruit.js";

const fruitsRouter = Router();

fruitsRouter.get("/", (req, res) => {
    res.render("index");
});

fruitsRouter.get("/fruits", async (req, res) => {
    const fruits = await Fruit.find({});
    res.render("fruits/index", { fruits });
});

fruitsRouter.get("/fruits/new", (req, res) => {
    res.render("fruits/new")
});

fruitsRouter.get("/fruits/:id", async (req, res) => {
    const { id } = req.params

    const fruit = await Fruit.findById(id)

    res.render("fruits/show", { fruit });
});


fruitsRouter.post("/fruits", async (req, res) => {
    let { name, isReadyToEat } = req.body;

    const fruit = await Fruit.create({ name, isReadyToEat });

    res.redirect("/fruits")
});

export default fruitsRouter;