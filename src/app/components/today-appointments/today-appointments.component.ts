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

}
