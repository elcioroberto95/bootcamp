import { parseISO } from 'date-fns';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const apppointmentsRoutes = Router();
apppointmentsRoutes.use(ensureAuthenticated);

  apppointmentsRoutes.get('/',async  (request,response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointments = await appointmentsRepository.find();

    return response.json(appointments);

  })



///post
  apppointmentsRoutes.post('/',async(request,response) => {

    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await  createAppointment.execute({
      date:parsedDate,
      provider_id,
    })

    return response.json(appointment);

  })

export default apppointmentsRoutes;
