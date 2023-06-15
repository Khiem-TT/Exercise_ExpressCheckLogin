import {Router} from "express";
import {checkLogin} from "../middlewares/checkLogin";
import {GeneralController} from "../controllers/general.controller";

const apiRouter = Router();

apiRouter.post('/login', checkLogin, GeneralController.loginAccount);

export default apiRouter;