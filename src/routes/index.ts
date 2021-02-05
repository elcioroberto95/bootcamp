import { Router } from 'express';
import apppointmentsRoutes from './appointments.routes';

const routes = Router();

routes.use('/appointments',apppointmentsRoutes);

export default routes;
