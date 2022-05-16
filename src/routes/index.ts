import  Router  from 'express';
import AutomateController from '../controllers/MethodController';
import AuthenticatedToken from "../middlewares/authenticatedToken";

const router = Router();

router
.get('/methodGet', AuthenticatedToken.ensureAuthenticated, AutomateController.methodGet)
.post('/methodPost', AuthenticatedToken.ensureAuthenticated, AutomateController.methodPost)

export default (app) => {
    app.use(router);
};