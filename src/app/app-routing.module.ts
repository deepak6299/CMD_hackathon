import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddAppointmentComponent } from './appointments/add-appointment/add-appointment.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {
    path:'addAppointment',
    component:AddAppointmentComponent
  },
  {
    path:'addPatient',
    component:AddPatientComponent
  },

  {
    path:'doctor',
    component:DoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
