import { Router } from "express";
import { ProductsController } from "../controllers/producuts-controller";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get('/', productsController.index)

productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes };

