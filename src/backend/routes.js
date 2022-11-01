import { Router } from "express";

import auth from "./middleWares/auth.js";

import helloController from "./controllers/helloController.js";
import sessionsController from "./controllers/sessionsController.js";
import userController from "./controllers/userController.js";

const routes = Router()

//RESTFull
routes.get('/hello', helloController.index)
routes.post('/session', sessionsController.create)
routes.post('/users', userController.create)

routes.use(auth)

routes.get('/users', userController.index)
routes.get('/users/:id', userController.show)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.destroy)


export default routes