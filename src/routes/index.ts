import { Router } from 'express';
import apppointmentsRoutes from './appointments.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/appointments',apppointmentsRoutes);
routes.use('/users',usersRouter);

export default routes;
