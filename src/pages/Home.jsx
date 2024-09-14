import React, { useState } from 'react';
import AppointmentList from '../components/AppointmentList';
import Doctors from '../components/Doctors';
import {appointmentData} from '../helpers/data';
const Home = () => {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const handleAdd = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
    localStorage.setItem(
      "list",
      JSON.stringify([...appointments, newAppointment])
    );
  };
  const handleDelete = (id) => {
    const filteredList = appointments.filter((item) => item.id !== id);
    setAppointments(filteredList);
    localStorage.setItem("list", JSON.stringify(filteredList));
  };
  const handleDoubleClick = (id) => {
    const updatedList = appointments.map((app) =>
      app.id === id ? { ...app, consulted: !app.consulted } : app
    );
    setAppointments(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};

export default Home