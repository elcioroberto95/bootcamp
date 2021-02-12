import { Router } from 'express';
import apppointmentsRoutes from './appointments.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './user.routes';
const routes = Router();

routes.use('/appointments',apppointmentsRoutes);
routes.use('/users',usersRouter);
routes.use('/sessions',sessionsRouter)


export default routes;
