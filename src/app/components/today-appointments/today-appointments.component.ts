import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  time: string;
  type: string;
  status: 'Booked' | 'In Progress' | 'Completed' | 'Missed';
  paymentStatus: 'Paid' | 'Unpaid';
}
@Component({
  selector: 'app-today-appointments',
  templateUrl: './today-appointments.component.html',
  styleUrls: ['./today-appointments.component.css'],
  imports:[CommonModule],
})
export class TodayAppointmentsComponent {
  appointments = [
    {
      id: 487,
      name: 'Sanjai',
      email: 'sanjaikumar.pobo@gmail.com',
      phone: '9655770823',
      date: '21-FEB-2025 12:00 PM',
      type: 'Consultation - Direct Visit',
      paid: true,
      status: 'Booked'
    },
    {
      id: 485,
      name: 'Joshva',
      email: 'joshva.pobo@gmail.com',
      phone: '9965480147',
      date: '21-FEB-2025 1:00 PM',
      type: 'Consultation - Direct Visit',
      paid: true,
      status: 'In Progress'
    }
  ];

  acceptAppointment(id: number) {
    console.log(`Accepted appointment #${id}`);
  }

  rejectAppointment(id: number) {
    console.log(`Rejected appointment #${id}`);
  }

  markMissed(id: number) {
    console.log(`Marked missed appointment #${id}`);
  }

  openNow(id: number) {
    console.log(`Opening appointment #${id}`);
  }

  completeAppointment(id: number) {
    console.log(`Completed appointment #${id}`);
  }
}
