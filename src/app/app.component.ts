import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideProfileComponent } from './components/side-profile/side-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

import { TodayAppointmentsComponent } from './components/today-appointments/today-appointments.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [SideProfileComponent,HeaderComponent,TodayAppointmentsComponent,CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctor-request';
}
