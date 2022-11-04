import { Router } from "express";

import auth from "./middleWares/auth.js";

import helloController from "./controllers/helloController.js";
import sessionsController from "./controllers/sessionsController.js";
import userController from "./controllers/userController.js";
import iniciativesController from "./controllers/iniciativesController.js";

const routes = Router()

//RESTFull
routes.get('/hello', helloController.index)
routes.post('/session', sessionsController.create)
routes.post('/users', userController.create)

routes.get('/iniciatives', iniciativesController.list)
routes.get('/users', userController.index)

routes.use(auth)

routes.get('/iniciatives/:id', iniciativesController.show)
routes.post('/iniciatives', iniciativesController.create)
routes.delete('/iniciatives/:id', iniciativesController.destroy)

routes.get('/users/:id', userController.show)
routes.put('/users/:id', userController.updatePoints)
routes.delete('/users/:id', userController.destroy)


export default routes