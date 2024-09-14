import React, { useState } from 'react';
import AppointmentList from '../components/AppointmentList';
import Doctors from '../components/Doctors';
import {appointmentData} from '../helpers/data';
const Home = () => {
const[appointments,setAppointments]=useState(appointmentData)

  return (
   <main className='text-center mt-2'>

   <h1 className='display-5 text-danger'>KİEL HOSPİTAL</h1>

<Doctors/>

<AppointmentList appointments={appointments}/>





 </main>

  )
}

export default Home