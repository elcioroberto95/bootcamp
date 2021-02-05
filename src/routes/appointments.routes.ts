import { parseISO } from 'date-fns';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const apppointmentsRoutes = Router();


  apppointmentsRoutes.get('/',async  (request,response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointments = await appointmentsRepository.find();

    return response.json(appointments);

  })



///post
  apppointmentsRoutes.post('/',async(request,response) => {
   try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment =await  createAppointment.execute({
      date:parsedDate,
      provider,
    })

    return response.json(appointment);
   }
   catch(err){
    return response.status(400).json({error:err.message});
  }

  })

export default apppointmentsRoutes;